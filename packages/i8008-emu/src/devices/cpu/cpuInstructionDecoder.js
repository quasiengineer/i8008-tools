export const INSTRUCTION_TYPES = Object.freeze({
  Lrr: Symbol('INSTRUCTIONS/Lrr'),
  LrM: Symbol('INSTRUCTIONS/LrM'),
  LMr: Symbol('INSTRUCTIONS/LMr'),
  LrI: Symbol('INSTRUCTIONS/LrI'),
  LMI: Symbol('INSTRUCTIONS/LMI'),
  INr: Symbol('INSTRUCTIONS/INr'),
  DCr: Symbol('INSTRUCTIONS/DCr'),
  ALUr: Symbol('INSTRUCTIONS/ALUr'),
  ALUM: Symbol('INSTRUCTIONS/ALUM'),
  ALUI: Symbol('INSTRUCTIONS/ALUI'),
  RLC: Symbol('INSTRUCTIONS/RLC'),
  RRC: Symbol('INSTRUCTIONS/RRC'),
  RAL: Symbol('INSTRUCTIONS/RAL'),
  RAR: Symbol('INSTRUCTIONS/RAR'),
  JMP: Symbol('INSTRUCTIONS/JMP'),
  JFc: Symbol('INSTRUCTIONS/JFc'),
  JTc: Symbol('INSTRUCTIONS/JTc'),
  CAL: Symbol('INSTRUCTIONS/CAL'),
  CFc: Symbol('INSTRUCTIONS/CFc'),
  CTc: Symbol('INSTRUCTIONS/CTc'),
  RET: Symbol('INSTRUCTIONS/RET'),
  RFc: Symbol('INSTRUCTIONS/RFc'),
  RTc: Symbol('INSTRUCTIONS/RTc'),
  RST: Symbol('INSTRUCTIONS/RST'),
  INP: Symbol('INSTRUCTIONS/INP'),
  OUT: Symbol('INSTRUCTIONS/OUT'),
  HLT: Symbol('INSTRUCTIONS/HLT'),
});

export const ALU_OPERATIONS = Object.freeze({
  ADD: Symbol('ALU_OPERATIONS/ADD'),
  ADC: Symbol('ALU_OPERATIONS/ADC'),
  SUB: Symbol('ALU_OPERATIONS/SUB'),
  SBC: Symbol('ALU_OPERATIONS/SBC'),
  AND: Symbol('ALU_OPERATIONS/AND'),
  XOR: Symbol('ALU_OPERATIONS/XOR'),
  OR: Symbol('ALU_OPERATIONS/OR'),
  CMP: Symbol('ALU_OPERATIONS/CMP'),
});

const INSTRUCTIONS_MAP = [
  // 0x00
  { type: INSTRUCTION_TYPES.HLT },
  { type: INSTRUCTION_TYPES.HLT },
  { type: INSTRUCTION_TYPES.RLC },
  { type: INSTRUCTION_TYPES.RFc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.ADD },
  { type: INSTRUCTION_TYPES.RST, op1: 0 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'A' },
  { type: INSTRUCTION_TYPES.RET },
  { type: INSTRUCTION_TYPES.INr, op1: 'B' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'B' },
  { type: INSTRUCTION_TYPES.RRC },
  { type: INSTRUCTION_TYPES.RFc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.ADC },
  { type: INSTRUCTION_TYPES.RST, op1: 1 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'B' },
  { type: INSTRUCTION_TYPES.RET },

  // 0x10
  { type: INSTRUCTION_TYPES.INr, op1: 'C' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'C' },
  { type: INSTRUCTION_TYPES.RAL },
  { type: INSTRUCTION_TYPES.RFc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.SUB },
  { type: INSTRUCTION_TYPES.RST, op1: 2 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'C' },
  { type: INSTRUCTION_TYPES.RET },
  { type: INSTRUCTION_TYPES.INr, op1: 'D' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'D' },
  { type: INSTRUCTION_TYPES.RAR },
  { type: INSTRUCTION_TYPES.RFc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.SBC },
  { type: INSTRUCTION_TYPES.RST, op1: 3 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'D' },
  { type: INSTRUCTION_TYPES.RET },

  // 0x20
  { type: INSTRUCTION_TYPES.INr, op1: 'E' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'E' },
  null,
  { type: INSTRUCTION_TYPES.RTc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.AND },
  { type: INSTRUCTION_TYPES.RST, op1: 4 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'E' },
  { type: INSTRUCTION_TYPES.RET },
  { type: INSTRUCTION_TYPES.INr, op1: 'H' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'H' },
  null,
  { type: INSTRUCTION_TYPES.RTc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.XOR },
  { type: INSTRUCTION_TYPES.RST, op1: 5 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'H' },
  { type: INSTRUCTION_TYPES.RET },

  // 0x30
  { type: INSTRUCTION_TYPES.INr, op1: 'L' },
  { type: INSTRUCTION_TYPES.DCr, op1: 'L' },
  null,
  { type: INSTRUCTION_TYPES.RTc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.OR },
  { type: INSTRUCTION_TYPES.RST, op1: 6 },
  { type: INSTRUCTION_TYPES.LrI, op1: 'L' },
  { type: INSTRUCTION_TYPES.RET },
  null,
  null,
  null,
  { type: INSTRUCTION_TYPES.RTc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.ALUI, op1: ALU_OPERATIONS.CMP },
  { type: INSTRUCTION_TYPES.RST, op1: 7 },
  { type: INSTRUCTION_TYPES.LMI },
  { type: INSTRUCTION_TYPES.RET },

  // 0x40
  { type: INSTRUCTION_TYPES.JFc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.INP, op1: 0 },
  { type: INSTRUCTION_TYPES.CFc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.INP, op1: 1 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.INP, op1: 2 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.INP, op1: 3 },
  { type: INSTRUCTION_TYPES.JFc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.INP, op1: 4 },
  { type: INSTRUCTION_TYPES.CFc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.INP, op1: 5 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.INP, op1: 6 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.INP, op1: 7 },

  // 0x50
  { type: INSTRUCTION_TYPES.JFc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.OUT, op1: 8 },
  { type: INSTRUCTION_TYPES.CFc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.OUT, op1: 9 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 10 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 11 },
  { type: INSTRUCTION_TYPES.JFc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.OUT, op1: 12 },
  { type: INSTRUCTION_TYPES.CFc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.OUT, op1: 13 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 14 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 15 },

  // 0x60
  { type: INSTRUCTION_TYPES.JTc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.OUT, op1: 16 },
  { type: INSTRUCTION_TYPES.CTc, op1: 'carry' },
  { type: INSTRUCTION_TYPES.OUT, op1: 17 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 18 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 19 },
  { type: INSTRUCTION_TYPES.JTc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.OUT, op1: 20 },
  { type: INSTRUCTION_TYPES.CTc, op1: 'zero' },
  { type: INSTRUCTION_TYPES.OUT, op1: 21 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 22 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 23 },

  // 0x70
  { type: INSTRUCTION_TYPES.JTc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.OUT, op1: 24 },
  { type: INSTRUCTION_TYPES.CTc, op1: 'sign' },
  { type: INSTRUCTION_TYPES.OUT, op1: 25 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 26 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 27 },
  { type: INSTRUCTION_TYPES.JTc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.OUT, op1: 28 },
  { type: INSTRUCTION_TYPES.CTc, op1: 'parity' },
  { type: INSTRUCTION_TYPES.OUT, op1: 29 },
  { type: INSTRUCTION_TYPES.JMP },
  { type: INSTRUCTION_TYPES.OUT, op1: 30 },
  { type: INSTRUCTION_TYPES.CAL },
  { type: INSTRUCTION_TYPES.OUT, op1: 31 },

  // 0x80
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADD, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.ADD },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.ADC, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.ADC },

  // 0x90
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SUB, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.SUB },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.SBC, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.SBC },

  // 0xA0
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.AND, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.AND },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.XOR, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.XOR },

  // 0xB0
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.OR, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.OR },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'A' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'B' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'C' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'D' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'E' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'H' },
  { type: INSTRUCTION_TYPES.ALUr, op1: ALU_OPERATIONS.CMP, op2: 'L' },
  { type: INSTRUCTION_TYPES.ALUM, op1: ALU_OPERATIONS.CMP },

  // 0xC0
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'A', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'B', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'B' },

  // 0xD0
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'C', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'D', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'D' },

  // 0xE0
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'E', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'H', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'H' },

  // 0xF0
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'A' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'B' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'C' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'D' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'E' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'H' },
  { type: INSTRUCTION_TYPES.Lrr, op1: 'L', op2: 'L' },
  { type: INSTRUCTION_TYPES.LrM, op1: 'L' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'A' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'B' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'C' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'D' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'E' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'H' },
  { type: INSTRUCTION_TYPES.LMr, op1: 'L' },
  { type: INSTRUCTION_TYPES.HLT },
];

export default function decodeInstruction(opcode) {
  const instruction = INSTRUCTIONS_MAP[opcode];

  if (!instruction) {
    throw Error(`Unknown instruction: ${opcode.toString(16)}`);
  }

  return { ...instruction, opcode };
}