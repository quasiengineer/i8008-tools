import SignalSource from '../../signals/signalSource.js';
import SIGNAL_STATES from '../../signals/signalStates.js';
import decodeInstruction, { ALU_OPERATIONS, INSTRUCTION_TYPES } from './cpuInstructionDecoder.js';

export const CPU_STATES = Object.freeze({
  T1: Symbol('CPU_STATES/T1'),
  T2: Symbol('CPU_STATES/T2'),
  T3: Symbol('CPU_STATES/T3'),
  T4: Symbol('CPU_STATES/T4'),
  T5: Symbol('CPU_STATES/T5'),
  STOPPED: Symbol('CPU_STATES/STOPPED'),
});

export const STATE_TO_NUMERIC = Object.freeze({
  [CPU_STATES.T1]: 0b010,
  [CPU_STATES.T2]: 0b100,
  [CPU_STATES.T3]: 0b001,
  [CPU_STATES.T4]: 0b111,
  [CPU_STATES.T5]: 0b101,
  [CPU_STATES.STOPPED]: 0b011,
});

export const NUMERIC_TO_STATE = Object.freeze({
  0b010: CPU_STATES.T1,
  0b100: CPU_STATES.T2,
  0b001: CPU_STATES.T3,
  0b111: CPU_STATES.T4,
  0b101: CPU_STATES.T5,
  0b011: CPU_STATES.STOPPED,
});

export const INSTRUCTION_CYCLES = Object.freeze({
  PCI: Symbol('INSTRUCTION_CYCLES/PCI'),
  PCR: Symbol('INSTRUCTION_CYCLES/PCR'),
  PCC: Symbol('INSTRUCTION_CYCLES/PCC'),
  PCW: Symbol('INSTRUCTION_CYCLES/PCW'),
});

// D7 D6
export const CYCLE_TO_NUMERIC = Object.freeze({
  [INSTRUCTION_CYCLES.PCI]: 0b00,
  [INSTRUCTION_CYCLES.PCR]: 0b10,
  [INSTRUCTION_CYCLES.PCC]: 0b01,
  [INSTRUCTION_CYCLES.PCW]: 0b11,
});

// D7 D6
export const NUMERIC_TO_CYCLE = Object.freeze({
  0b00: INSTRUCTION_CYCLES.PCI,
  0b10: INSTRUCTION_CYCLES.PCR,
  0b01: INSTRUCTION_CYCLES.PCC,
  0b11: INSTRUCTION_CYCLES.PCW,
});

const STACK_DEPTH = 7;

class CPU {
  #state = CPU_STATES.T1;

  #nextState;

  #clockPeriod = 0;

  #instructionCycle = 0;

  #currentInstruction = {
    type: undefined,
    op1: undefined,
    op2: undefined,
  };

  #registers = {
    PC: 0x0,
    SP: 0x0,
    A: 0x0,
    B: 0x0,
    C: 0x0,
    D: 0x0,
    E: 0x0,
    H: 0x0,
    L: 0x0,
  };

  #flags = {
    carry: false,
    zero: false,
    sign: false,
    parity: false,
  };

  #stack = new Array(STACK_DEPTH).fill(0);

  #signalBus;

  #syncSignal;

  #s0Signal;

  #s1Signal;

  #s2Signal;

  #dataBusSignals;

  constructor(signalBus) {
    this.#syncSignal = new SignalSource();
    this.#s0Signal = new SignalSource();
    this.#s1Signal = new SignalSource();
    this.#s2Signal = new SignalSource();
    this.#dataBusSignals = Array.from(Array(8), () => new SignalSource());

    this.#signalBus = signalBus;
    signalBus.registerSignalSource('sync', this.#syncSignal);
    signalBus.registerSignalSource('s0', this.#s0Signal);
    signalBus.registerSignalSource('s1', this.#s1Signal);
    signalBus.registerSignalSource('s2', this.#s2Signal);
    this.#dataBusSignals.forEach((dataSignal, idx) => signalBus.registerSignalSource(`d${idx}`, dataSignal));

    signalBus.onHigh('ph1', () => {
      // each t-state contains two clock periods, need to distinguish them
      this.#clockPeriod = this.#clockPeriod === 1 ? 2 : 1;
    });

    signalBus.onLow('ph1', () => {
      // update SYNC signal
      this.#syncSignal.state = this.#clockPeriod === 1 ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;

      // read/write data bus due 2nd clock period of t-state
      if (this.#clockPeriod === 2) {
        this.#nextState = this.#stateWorker();
      }
    });

    signalBus.onLow('ph2', () => {
      if (this.#clockPeriod === 1) {
        // update Sx signals
        const sX = STATE_TO_NUMERIC[this.#state];
        this.#s2Signal.state = (sX & 0x4) ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;
        this.#s1Signal.state = (sX & 0x2) ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;
        this.#s0Signal.state = (sX & 0x1) ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;
      } else {
        // free data bus
        this.#dataBusSignals.forEach((dataSignal) => {
          dataSignal.state = SIGNAL_STATES.FLOATING;
        });

        // update state, based on pending value
        this.#state = this.#nextState;
      }
    });
  }

  #pushPCToStack() {
    this.#stack[this.#registers.SP] = this.#registers.PC;
    this.#registers.SP += 1;

    // XXX: i8008 handles that properly, but it sounds like a bad practice
    if (this.#registers.SP >= STACK_DEPTH) {
      throw Error('Stack overflow!');
    }
  }

  #popPCFromStack() {
    // XXX: i8008 handles that properly, but it sounds like a bad practice
    if (this.#registers.SP <= 0) {
      throw Error('Stack overflow!');
    }

    this.#registers.SP -= 1;
    this.#registers.PC = this.#stack[this.#registers.SP];
  }

  #updateFlags(value, carry) {
    if (carry !== undefined) {
      this.#flags.carry = carry;
    }

    this.#flags.zero = value === 0x0;
    this.#flags.sign = (value & 0x80) === 0x80;
    this.#flags.parity = (value & 0x1) === 0x0;
  }

  #performALUOperation(operation, value) {
    let result = this.#registers.A;

    switch (operation) {
      case ALU_OPERATIONS.ADD:
        result += value;
        break;

      case ALU_OPERATIONS.ADC:
        result += value + (this.#flags.carry ? 1 : 0);
        break;

      case ALU_OPERATIONS.SUB:
        result -= value;
        break;

      case ALU_OPERATIONS.SBC:
        result -= (value + (this.#flags.carry ? 1 : 0));
        break;

      case ALU_OPERATIONS.AND:
        result &= value;
        break;

      case ALU_OPERATIONS.XOR:
        result ^= value;
        break;

      case ALU_OPERATIONS.OR:
        result |= value;
        break;

      case ALU_OPERATIONS.CMP:
        result -= value;
        break;

      default:
        break;
    }

    this.#updateFlags(result, result > 0xFF || result < 0);

    if (operation !== ALU_OPERATIONS.CMP) {
      this.#registers.A = result < 0 ? (result + 0x100) : (result & 0xFF);
    }
  }

  #writeValueToDataBus(value) {
    this.#dataBusSignals.forEach((dataSignal, idx) => {
      dataSignal.state = (value & (1 << idx)) ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;
    });
  }

  #decodingState(instruction) {
    this.#currentInstruction = decodeInstruction(instruction);

    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.HLT:
        return CPU_STATES.STOPPED;

      case INSTRUCTION_TYPES.RLC:
      case INSTRUCTION_TYPES.RRC:
      case INSTRUCTION_TYPES.RAL:
      case INSTRUCTION_TYPES.RAR:
      case INSTRUCTION_TYPES.INr:
      case INSTRUCTION_TYPES.DCr:
      case INSTRUCTION_TYPES.RET:
      case INSTRUCTION_TYPES.ALUr:
      case INSTRUCTION_TYPES.Lrr:
      case INSTRUCTION_TYPES.LMr:
        return CPU_STATES.T4;

      case INSTRUCTION_TYPES.INP:
      case INSTRUCTION_TYPES.OUT:
      case INSTRUCTION_TYPES.JMP:
      case INSTRUCTION_TYPES.JFc:
      case INSTRUCTION_TYPES.JTc:
      case INSTRUCTION_TYPES.CAL:
      case INSTRUCTION_TYPES.CFc:
      case INSTRUCTION_TYPES.CTc:
      case INSTRUCTION_TYPES.ALUM:
      case INSTRUCTION_TYPES.ALUI:
      case INSTRUCTION_TYPES.LMI:
      case INSTRUCTION_TYPES.LrI:
      case INSTRUCTION_TYPES.LrM:
        this.#instructionCycle += 1;
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.RST:
        this.#pushPCToStack();
        return CPU_STATES.T4;

      case INSTRUCTION_TYPES.RFc:
        return this.#flags[this.#currentInstruction.op1] ? CPU_STATES.T1 : CPU_STATES.T4;

      case INSTRUCTION_TYPES.RTc:
        return this.#flags[this.#currentInstruction.op1] ? CPU_STATES.T4 : CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #firstExecutionStateOnFirstCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.RLC:
      case INSTRUCTION_TYPES.RRC:
      case INSTRUCTION_TYPES.RAL:
      case INSTRUCTION_TYPES.RAR:
      case INSTRUCTION_TYPES.INr:
      case INSTRUCTION_TYPES.DCr:
      case INSTRUCTION_TYPES.ALUr:
      case INSTRUCTION_TYPES.Lrr:
        return CPU_STATES.T5;

      case INSTRUCTION_TYPES.RET:
      case INSTRUCTION_TYPES.RFc:
      case INSTRUCTION_TYPES.RTc:
        this.#popPCFromStack();
        return CPU_STATES.T5;

      case INSTRUCTION_TYPES.RST:
        this.#registers.PC &= 0xFF;
        return CPU_STATES.T5;

      case INSTRUCTION_TYPES.LMr:
        this.#instructionCycle += 1;
        return CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #secondExecutionStateOnFirstCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.RST:
        this.#registers.PC = this.#currentInstruction.op1 << 3;
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.RET:
      case INSTRUCTION_TYPES.RFc:
      case INSTRUCTION_TYPES.RTc:
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.Lrr:
        this.#registers[this.#currentInstruction.op1] = this.#registers[this.#currentInstruction.op2];
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.RLC:
        this.#flags.carry = (this.#registers.A & 0x80) === 0x80;
        this.#registers.A = ((this.#registers.A << 1) & 0xFF) | (this.#flags.carry ? 1 : 0);
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.RRC:
        this.#flags.carry = (this.#registers.A & 0x1) === 0x1;
        this.#registers.A = (this.#registers.A >> 1) | (this.#flags.carry ? 0x80 : 0);
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.RAL: {
        const originalCarry = this.#flags.carry;
        this.#flags.carry = (this.#registers.A & 0x80) === 0x80;
        this.#registers.A = ((this.#registers.A << 1) & 0xFF) | (originalCarry ? 1 : 0);
        return CPU_STATES.T1;
      }

      case INSTRUCTION_TYPES.RAR: {
        const originalCarry = this.#flags.carry;
        this.#flags.carry = (this.#registers.A & 0x1) === 0x1;
        this.#registers.A = (this.#registers.A >> 1) | (originalCarry ? 0x80 : 0);
        return CPU_STATES.T1;
      }

      case INSTRUCTION_TYPES.INr:
        this.#registers[this.#currentInstruction.op1] = (this.#registers[this.#currentInstruction.op1] + 1) & 0xFF;
        this.#updateFlags(this.#registers[this.#currentInstruction.op1]);
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.DCr: {
        const result = this.#registers[this.#currentInstruction.op1] - 1;
        this.#registers[this.#currentInstruction.op1] = result < 0 ? result + 0x100 : result;
        this.#updateFlags(this.#registers[this.#currentInstruction.op1]);
        return CPU_STATES.T1;
      }

      case INSTRUCTION_TYPES.ALUr:
        this.#performALUOperation(this.#currentInstruction.op1, this.#registers[this.#currentInstruction.op2]);
        return CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #stateWorkerForFirstCycle() {
    switch (this.#state) {
      case CPU_STATES.T1:
        this.#writeValueToDataBus(this.#registers.PC & 0xFF);
        return CPU_STATES.T2;

      case CPU_STATES.T2:
        this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCI] << 6) | (this.#registers.PC >> 8));
        this.#registers.PC += 1;
        return CPU_STATES.T3;

      case CPU_STATES.T3:
        return this.#decodingState(this.#signalBus.busValue('d', 8));

      case CPU_STATES.T4:
        return this.#firstExecutionStateOnFirstCycle();

      case CPU_STATES.T5:
        return this.#secondExecutionStateOnFirstCycle();

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #firstAddressStateOnSecondCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.LrM:
      case INSTRUCTION_TYPES.LMr:
      case INSTRUCTION_TYPES.ALUM:
        this.#writeValueToDataBus(this.#registers.L);
        return CPU_STATES.T2;

      case INSTRUCTION_TYPES.LrI:
      case INSTRUCTION_TYPES.LMI:
      case INSTRUCTION_TYPES.ALUI:
      case INSTRUCTION_TYPES.JMP:
      case INSTRUCTION_TYPES.JFc:
      case INSTRUCTION_TYPES.JTc:
      case INSTRUCTION_TYPES.CAL:
      case INSTRUCTION_TYPES.CFc:
      case INSTRUCTION_TYPES.CTc:
        this.#writeValueToDataBus(this.#registers.PC & 0xFF);
        return CPU_STATES.T2;

      case INSTRUCTION_TYPES.INP:
      case INSTRUCTION_TYPES.OUT:
        this.#writeValueToDataBus(this.#registers.A);
        return CPU_STATES.T2;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #secondAddressStateOnSecondCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.LMr:
        this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCW] << 6) | this.#registers.H);
        return CPU_STATES.T3;

      case INSTRUCTION_TYPES.LrM:
      case INSTRUCTION_TYPES.ALUM:
        this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6) | this.#registers.H);
        return CPU_STATES.T3;

      case INSTRUCTION_TYPES.LrI:
      case INSTRUCTION_TYPES.LMI:
      case INSTRUCTION_TYPES.ALUI:
      case INSTRUCTION_TYPES.JMP:
      case INSTRUCTION_TYPES.JFc:
      case INSTRUCTION_TYPES.JTc:
      case INSTRUCTION_TYPES.CAL:
      case INSTRUCTION_TYPES.CFc:
      case INSTRUCTION_TYPES.CTc:
        this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6) | (this.#registers.PC >> 8));
        this.#registers.PC += 1;
        return CPU_STATES.T3;

      case INSTRUCTION_TYPES.INP:
      case INSTRUCTION_TYPES.OUT:
        this.#writeValueToDataBus(this.#currentInstruction.opcode);
        return CPU_STATES.T3;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #dataBusOperationOnSecondCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.LMI:
      case INSTRUCTION_TYPES.JMP:
      case INSTRUCTION_TYPES.JFc:
      case INSTRUCTION_TYPES.JTc:
      case INSTRUCTION_TYPES.CAL:
      case INSTRUCTION_TYPES.CFc:
      case INSTRUCTION_TYPES.CTc:
        this.#currentInstruction.op2 = this.#signalBus.busValue('d', 8);
        this.#instructionCycle += 1;
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.LrM:
      case INSTRUCTION_TYPES.LrI:
      case INSTRUCTION_TYPES.ALUM:
      case INSTRUCTION_TYPES.ALUI:
      case INSTRUCTION_TYPES.INP:
        this.#currentInstruction.op2 = this.#signalBus.busValue('d', 8);
        return CPU_STATES.T4;

      case INSTRUCTION_TYPES.OUT:
        this.#instructionCycle = 0;
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.LMr:
        this.#writeValueToDataBus(this.#registers[this.#currentInstruction.op1]);
        this.#instructionCycle = 0;
        return CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #executionStateOnSecondCycle() {
    switch (this.#currentInstruction.type) {
      case INSTRUCTION_TYPES.LrM:
      case INSTRUCTION_TYPES.LrI:
        this.#registers[this.#currentInstruction.op1] = this.#currentInstruction.op2;
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.ALUM:
      case INSTRUCTION_TYPES.ALUI:
        this.#performALUOperation(this.#currentInstruction.op1, this.#currentInstruction.op2);
        return CPU_STATES.T1;

      case INSTRUCTION_TYPES.INP:
        this.#registers.A = this.#currentInstruction.op2;
        return CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #stateWorkerForSecondCycle() {
    switch (this.#state) {
      case CPU_STATES.T1:
        return this.#firstAddressStateOnSecondCycle();

      case CPU_STATES.T2:
        return this.#secondAddressStateOnSecondCycle();

      case CPU_STATES.T3:
        return this.#dataBusOperationOnSecondCycle();

      case CPU_STATES.T4:
        if (this.#currentInstruction.type === INSTRUCTION_TYPES.INP) {
          const { carry, zero, parity, sign } = this.#flags;
          const flags = (carry ? 0x8 : 0x0) | (parity ? 0x4 : 0x0) | (zero ? 0x2 : 0x0) | (sign ? 0x1 : 0x0);
          this.#writeValueToDataBus(flags);
        }

        return CPU_STATES.T5;

      case CPU_STATES.T5:
        this.#instructionCycle = 0;
        return this.#executionStateOnSecondCycle();

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #stateWorkerForThirdCycle() {
    const { type } = this.#currentInstruction;

    switch (this.#state) {
      case CPU_STATES.T1:
        this.#writeValueToDataBus(type === INSTRUCTION_TYPES.LMI ? this.#registers.L : (this.#registers.PC & 0xFF));
        return CPU_STATES.T2;

      case CPU_STATES.T2: {
        if (type === INSTRUCTION_TYPES.LMI) {
          this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCW] << 6) | this.#registers.H);
        } else {
          this.#writeValueToDataBus((CYCLE_TO_NUMERIC[INSTRUCTION_CYCLES.PCR] << 6) | (this.#registers.PC >> 8));
          this.#registers.PC += 1;
        }

        return CPU_STATES.T3;
      }

      case CPU_STATES.T3: {
        if (type === INSTRUCTION_TYPES.LMI) {
          this.#writeValueToDataBus(this.#currentInstruction.op2);
          this.#instructionCycle = 0;
          return CPU_STATES.T1;
        }

        this.#currentInstruction.op2 |= (this.#signalBus.busValue('d', 8) << 8);

        const flag = this.#flags[this.#currentInstruction.op1];
        const falseCondFailed = (type === INSTRUCTION_TYPES.JFc || type === INSTRUCTION_TYPES.CFc) && flag;
        const trueCondFailed = (type === INSTRUCTION_TYPES.JTc || type === INSTRUCTION_TYPES.CTc) && !flag;

        if (falseCondFailed || trueCondFailed) {
          this.#instructionCycle = 0;
          return CPU_STATES.T1;
        }

        return CPU_STATES.T4;
      }

      case CPU_STATES.T4:
        if (type === INSTRUCTION_TYPES.CAL || type === INSTRUCTION_TYPES.CFc || type === INSTRUCTION_TYPES.CTc) {
          this.#pushPCToStack();
        }
        this.#registers.PC = (this.#registers.PC & 0xFF) | (this.#currentInstruction.op2 & 0xFF00);
        return CPU_STATES.T5;

      case CPU_STATES.T5:
        this.#registers.PC = (this.#registers.PC & 0xFF00) | (this.#currentInstruction.op2 & 0xFF);
        this.#instructionCycle = 0;
        return CPU_STATES.T1;

      default:
        return CPU_STATES.STOPPED;
    }
  }

  #stateWorker() {
    if (this.#state === CPU_STATES.STOPPED) {
      return CPU_STATES.STOPPED;
    }

    switch (this.#instructionCycle) {
      case 0:
        return this.#stateWorkerForFirstCycle();

      case 1:
        return this.#stateWorkerForSecondCycle();

      case 2:
        return this.#stateWorkerForThirdCycle();

      default:
        return CPU_STATES.STOPPED;
    }
  }

  get instructionCycle() {
    return this.#instructionCycle;
  }

  get stack() {
    return this.#stack;
  }

  get registers() {
    return this.#registers;
  }

  get flags() {
    return this.#flags;
  }

  get state() {
    return this.#state;
  }
}

export default CPU;
