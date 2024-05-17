const AddrType = {
  Label: Symbol('Label'),
  Address: Symbol('Address'),
};

const ACCUMULATOR_INSTRUCTION_OPCODE = {
  ad: 0b000,
  ac: 0b001,
  su: 0b010,
  sb: 0b011,
  nd: 0b100,
  xr: 0b101,
  or: 0b110,
  cp: 0b111,
};

const REGISTER_OPCODE = {
  a: 0b000,
  b: 0b001,
  c: 0b010,
  d: 0b011,
  e: 0b100,
  h: 0b101,
  l: 0b110,
  m: 0b111,
};

const CONDITION_DIRECTION_OPCODE = {
  f: 0b0,
  t: 0b1,
};

const CONDITION_FLAG_OPCODE = {
  c: 0b00,
  z: 0b01,
  s: 0b10,
  p: 0b11,
};

const UNGROUPED_INSTRUCTIONS_OPCODES = {
  hlt: 0b11111111,
  ret: 0b00000111,
  rlc: 0b00000010,
  rrc: 0b00001010,
  ral: 0b00010010,
  rar: 0b00011010,
};

const MAX_IMM3 = 2 ** 3 - 1;
const MAX_IMM5 = 2 ** 5 - 1;
const MAX_IMM8 = 2 ** 8 - 1;

class CodeGenerator {
  #bytecode = [];

  #labelToOffsetMap = new Map();

  #sourceMap = [];

  #referencesByLabel = [];

  // process hex and decimal values
  static #immToNumber(imm) {
    return imm.startsWith('0x') ? parseInt(imm.substring(2), 16) : Number(imm);
  }

  #pushAddress = (addr, type) => {
    if (type === AddrType.Label) {
      this.#referencesByLabel.push({ referencedLabel: addr, offset: this.#bytecode.length });
      this.#bytecode.push(0x00, 0x00);
      return;
    }

    const address = CodeGenerator.#immToNumber(addr);
    this.#bytecode.push(address & 0xFF, address >> 8);
  };

  addLabel(label) {
    if (this.#labelToOffsetMap.has(label)) {
      return false;
    }

    this.#labelToOffsetMap.set(label, this.#bytecode.length);
    return true;
  }

  pushInstructionRST(imm, line) {
    const immValue = CodeGenerator.#immToNumber(imm);
    if (immValue > MAX_IMM3) {
      throw new Error('Incorrect argument, subroutine number should be less than 8');
    }

    this.#sourceMap.push({ offset: this.#bytecode.length, line });
    this.#bytecode.push(0b00_000_101 | (immValue << 3));
  }

  pushInstructionINP(imm, line) {
    const immValue = CodeGenerator.#immToNumber(imm);
    if (immValue > MAX_IMM3) {
      throw new Error('Incorrect argument, device number should be less than 8');
    }

    this.#sourceMap.push({ offset: this.#bytecode.length, line });
    this.#bytecode.push(0b01_00000_1 | (immValue << 1));
  }

  pushInstructionOUT(imm, line) {
    const immValue = CodeGenerator.#immToNumber(imm);
    if (immValue > MAX_IMM5 || (immValue >> 3 === 0)) {
      throw new Error('Incorrect argument, device number should be in range [8..32]');
    }

    this.#sourceMap.push({ offset: this.#bytecode.length, line });
    this.#bytecode.push(0b01_00000_1 | (immValue << 1));
  }

  pushInstructionWithImm8(instruction, imm, line) {
    const immValue = CodeGenerator.#immToNumber(imm);
    if (immValue > MAX_IMM8) {
      throw new Error('Incorrect argument, immediate value should fit into single byte');
    }

    this.#sourceMap.push({ offset: this.#bytecode.length, line });

    // LrI / LMI
    if (instruction[0] === 'l') {
      this.#bytecode.push(0b00_000_110 | (REGISTER_OPCODE[instruction[1]] << 3));
    } else {
      this.#bytecode.push(0b00_000_100 | (ACCUMULATOR_INSTRUCTION_OPCODE[instruction.substring(0, 2)] << 3));
    }

    this.#bytecode.push(immValue);
  }

  pushInstructionWithAddress(instruction, addr, type, line) {
    this.#sourceMap.push({ offset: this.#bytecode.length, line });

    switch (instruction) {
      case 'jmp':
        this.#bytecode.push(0b01000100);
        break;

      case 'cal':
        this.#bytecode.push(0b01000110);
        break;

      default: {
        // JFc / JTc / CFc / CTc
        const instrOpcode = instruction[0] === 'j' ? 0b000 : 0b010;
        const condDirOpcode = CONDITION_DIRECTION_OPCODE[instruction[1]];
        const condFlagOpcode = CONDITION_FLAG_OPCODE[instruction[2]];
        this.#bytecode.push(0b01_000_000 | (condDirOpcode << 5) | (condFlagOpcode << 3) | instrOpcode);
        break;
      }
    }

    this.#pushAddress(addr, type);
  }

  pushInstructionWithoutArg(instruction, line) {
    this.#sourceMap.push({ offset: this.#bytecode.length, line });

    if (UNGROUPED_INSTRUCTIONS_OPCODES[instruction]) {
      this.#bytecode.push(UNGROUPED_INSTRUCTIONS_OPCODES[instruction]);
      return;
    }

    switch (instruction[0]) {
      // Lrr / LrM / LMr
      case 'l':
        this.#bytecode.push(0b11_000_000 | (REGISTER_OPCODE[instruction[1]] << 3) | REGISTER_OPCODE[instruction[2]]);
        break;

      // INr
      case 'i':
        this.#bytecode.push(0b00_000_000 | (REGISTER_OPCODE[instruction[2]] << 3));
        break;

      // DCr
      case 'd':
        this.#bytecode.push(0b00_000_001 | (REGISTER_OPCODE[instruction[2]] << 3));
        break;

      // RFc / RTc
      case 'r': {
        const condDirOpcode = CONDITION_DIRECTION_OPCODE[instruction[1]];
        const condFlagOpcode = CONDITION_FLAG_OPCODE[instruction[2]];
        this.#bytecode.push(0b00_000_011 | (condDirOpcode << 5) | (condFlagOpcode << 3));
        break;
      }

      default: {
        const regOpcode = REGISTER_OPCODE[instruction[2]];
        const instrOpcode = ACCUMULATOR_INSTRUCTION_OPCODE[instruction.substring(0, 2)];
        this.#bytecode.push(0b10_000_000 | (instrOpcode << 3) | regOpcode);
        break;
      }
    }
  }

  generate() {
    // on this stage we have information about all labels, so we can fill all references to actual instructions
    for (const { referencedLabel, offset: addrOffset } of this.#referencesByLabel) {
      const labelOffset = this.#labelToOffsetMap.get(referencedLabel);
      if (labelOffset === undefined) {
        throw new Error(`Unknown label ${referencedLabel}`);
      }

      this.#bytecode[addrOffset] = labelOffset & 0xFF;
      this.#bytecode[addrOffset + 1] = labelOffset >> 8;
    }

    return {
      bytecode: Uint8Array.from(this.#bytecode),
      sourceMap: [...this.#sourceMap],
      symbols: [...this.#labelToOffsetMap.entries()].map(([label, offset]) => ({ label, offset })),
    };
  }

  clear() {
    this.#bytecode = [];
    this.#sourceMap = [];
    this.#labelToOffsetMap = new Map();
    this.#referencesByLabel = [];
  }
}

module.exports = {
  CodeGenerator,
  AddrType,
};
