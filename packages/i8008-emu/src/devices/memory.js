import SignalSource from '../signals/signalSource.js';
import SIGNAL_STATES from '../signals/signalStates.js';
import { CPU_STATES, NUMERIC_TO_STATE, NUMERIC_TO_CYCLE, INSTRUCTION_CYCLES } from './cpu/cpu.js';

class Memory {
  #signalBus;

  #dataBusSignals;

  #memory;

  #ioOutputHandler;

  #addressLow;

  #addressHigh;

  constructor(signalBus, dump, ioOutputHandler) {
    this.#memory = dump;
    this.#ioOutputHandler = ioOutputHandler;
    this.#signalBus = signalBus;

    this.#dataBusSignals = Array.from(Array(8), () => new SignalSource());
    this.#dataBusSignals.forEach((dataSignal, idx) => signalBus.registerSignalSource(`d${idx}`, dataSignal));

    // write data due ph1_2 raise to data bus if necessary, i8008 reads it around ph1_2 fall
    signalBus.onHigh('ph1', () => {
      if (signalBus.signalState('sync') !== SIGNAL_STATES.HIGH) {
        return;
      }

      const tState = NUMERIC_TO_STATE[signalBus.busValue('s', 3)];
      if (tState === CPU_STATES.T3) {
        this.#writeValueFromMemoryToDataBus();
      }
    });

    // read data due ph2_2 raise, we have window between ph1_2 fall and ph2_2 fall
    signalBus.onHigh('ph2', () => {
      if (signalBus.signalState('sync') !== SIGNAL_STATES.LOW) {
        return;
      }

      const tState = NUMERIC_TO_STATE[signalBus.busValue('s', 3)];
      switch (tState) {
        case CPU_STATES.T1:
          this.#addressLow = signalBus.busValue('d', 8);
          break;

        case CPU_STATES.T2:
          this.#addressHigh = signalBus.busValue('d', 8);
          break;

        case CPU_STATES.T3:
          this.#writeValueFromDataBusToMemory();
          break;

        default:
          break;
      }
    });

    // free data bus due ph2_2 fall, i8008 reads it around ph1_2 fall
    signalBus.onLow('ph2', () => {
      if (signalBus.signalState('sync') !== SIGNAL_STATES.LOW) {
        return;
      }

      const tState = NUMERIC_TO_STATE[signalBus.busValue('s', 3)];
      if (tState === CPU_STATES.T3) {
        this.#dataBusSignals.forEach((dataSignal) => {
          dataSignal.state = SIGNAL_STATES.FLOATING;
        });
      }
    });
  }

  #buildAddress() {
    return {
      address: ((this.#addressHigh & 0x3F) << 8) | this.#addressLow,
      instructionCycle: NUMERIC_TO_CYCLE[this.#addressHigh >> 6],
    };
  }

  #writeValueFromMemoryToDataBus() {
    const { address, instructionCycle } = this.#buildAddress();
    if (instructionCycle !== INSTRUCTION_CYCLES.PCI && instructionCycle !== INSTRUCTION_CYCLES.PCR) {
      return;
    }

    const data = this.#memory[address];
    this.#dataBusSignals.forEach((dataSignal, idx) => {
      dataSignal.state = (data & (1 << idx)) ? SIGNAL_STATES.HIGH : SIGNAL_STATES.LOW;
    });
  }

  #writeValueFromDataBusToMemory() {
    const { address, instructionCycle } = this.#buildAddress();
    switch (instructionCycle) {
      case INSTRUCTION_CYCLES.PCW:
        this.#memory[address] = this.#signalBus.busValue('d', 8);
        break;

      case INSTRUCTION_CYCLES.PCC: {
        const deviceNo = (this.#addressHigh >> 1) & 0x1F;
        if (deviceNo >= 8) {
          this.#ioOutputHandler({ deviceNo, data: this.#addressLow });
        } else {
          // input operation, not implemented
        }
        break;
      }

      default:
        break;
    }
  }

  get memory(){
    return this.#memory;
  }
}

export default Memory;
