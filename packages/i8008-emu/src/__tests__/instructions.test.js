import { jest } from '@jest/globals'

import System from '../index.js';

describe('register instructions', () => {
  test('LBC', () => {
    const system = new System({ memoryDump: [0b11_001_010] });
    system.registers.C = 0x12;
    system.instruction();
    expect(system.registers.B).toBe(0x12);
    expect(system.ticks).toBe(10n);
  });

  test('LAM', () => {
    const system = new System({ memoryDump: [0b11_000_111] });
    system.registers.L = 0x01;
    system.registers.H = 0x02;
    system.memory[0x201] = 0x12;
    system.instruction();
    expect(system.registers.A).toBe(0x12);
    expect(system.ticks).toBe(16n);
  });

  test('LMA', () => {
    const system = new System({ memoryDump: [0b11_111_000] });
    system.registers.L = 0x01;
    system.registers.H = 0x02;
    system.registers.A = 0x12;
    system.instruction();
    expect(system.memory[0x201]).toBe(0x12);
    expect(system.ticks).toBe(14n);
  });

  test('LAI 0x12', () => {
    const system = new System({ memoryDump: [0b00_000_110, 0x12] });
    system.instruction();
    expect(system.registers.A).toBe(0x12);
    expect(system.ticks).toBe(16n);
  });

  test('LMI', () => {
    const system = new System({ memoryDump: [0b00_111_110, 0x12] });
    system.registers.L = 0x01;
    system.registers.H = 0x02;
    system.instruction();
    expect(system.memory[0x201]).toBe(0x12);
    expect(system.ticks).toBe(18n);
  });

  test('INB', () => {
    const system = new System({ memoryDump: [0b00_001_000] });
    system.registers.B = 0xFF;
    system.instruction();
    expect(system.registers.B).toBe(0x00);
    expect(system.flags.carry).toBeFalsy();
    expect(system.flags.zero).toBeTruthy();
    expect(system.flags.parity).toBeTruthy();
    expect(system.flags.sign).toBeFalsy();
    expect(system.ticks).toBe(10n);
  });

  test('DCB', () => {
    const system = new System({ memoryDump: [0b00_001_001] });
    system.registers.B = 0x00;
    system.instruction();
    expect(system.registers.B).toBe(0xFF);
    expect(system.flags.carry).toBeFalsy();
    expect(system.flags.zero).toBeFalsy();
    expect(system.flags.parity).toBeFalsy();
    expect(system.flags.sign).toBeTruthy();
    expect(system.ticks).toBe(10n);
  });
});

describe('i/o instructions', () => {
  test('OUT 12', () => {
    const outputFn = jest.fn();
    const system = new System({ memoryDump: [0b01_01100_1], ioOutputHandler: outputFn });
    system.registers.A = 0x12;
    system.instruction();
    expect(outputFn).toHaveBeenCalledWith({ deviceNo: 12, data: 0x12 });
    expect(system.ticks).toBe(12n);
  });
});

describe('machine instructions', () => {
  test('HLT', () => {
    const system = new System({ memoryDump: [0xFF] });
    system.instruction();
    expect(system.isFinished).toBeTruthy();
    expect(system.ticks).toBe(6n);
  });
});

describe('accumulator instructions', () => {
  test('RLC', () => {
    const system = new System({ memoryDump: [0b00_000_010] });
    system.registers.A = 0b1010_1010;
    system.instruction();
    expect(system.registers.A).toBe(0b0101_0101);
    expect(system.flags.carry).toBeTruthy();
    expect(system.ticks).toBe(10n);
  });

  test('RRC', () => {
    const system = new System({ memoryDump: [0b00_001_010] });
    system.registers.A = 0b0101_0101;
    system.instruction();
    expect(system.registers.A).toBe(0b1010_1010);
    expect(system.flags.carry).toBeTruthy();
    expect(system.ticks).toBe(10n);
  });

  test('RAL', () => {
    const system = new System({ memoryDump: [0b00_010_010] });
    system.registers.A = 0b0010_1010;
    system.flags.carry = true;
    system.instruction();
    expect(system.registers.A).toBe(0b0101_0101);
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(10n);
  });

  test('RAR', () => {
    const system = new System({ memoryDump: [0b00_011_010] });
    system.registers.A = 0b0101_0100;
    system.flags.carry = true;
    system.instruction();
    expect(system.registers.A).toBe(0b1010_1010);
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(10n);
  });

  test('ADB', () => {
    const system = new System({ memoryDump: [0b10_000_001] });
    system.registers.A = 0xF0;
    system.registers.B = 0x34;
    system.instruction();
    expect(system.registers.A).toBe(0x24);
    expect(system.flags.carry).toBeTruthy();
    expect(system.ticks).toBe(10n);
  });

  test('ACM', () => {
    const system = new System({ memoryDump: [0b10_001_111] });
    system.flags.carry = true;
    system.registers.A = 0x12;
    system.registers.L = 0x01;
    system.registers.H = 0x02;
    system.memory[0x201] = 0x34;
    system.instruction();
    expect(system.registers.A).toBe(0x47);
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(16n);
  });

  test('SUI', () => {
    const system = new System({ memoryDump: [0b00_010_100, 0x30] });
    system.registers.A = 0x12;
    system.instruction();
    expect(system.registers.A).toBe(0xE2);
    expect(system.flags.carry).toBeTruthy();
    expect(system.ticks).toBe(16n);
  });

  test('SBI', () => {
    const system = new System({ memoryDump: [0b00_011_100, 0x10] });
    system.flags.carry = true;
    system.registers.A = 0x12;
    system.instruction();
    expect(system.registers.A).toBe(0x1);
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(16n);
  });

  test('NDI', () => {
    const system = new System({ memoryDump: [0b00_100_100, 0x30] });
    system.flags.carry = true;
    system.registers.A = 0x32;
    system.instruction();
    expect(system.registers.A).toBe(0x30);
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(16n);
  });

  test('XRI', () => {
    const system = new System({ memoryDump: [0b00_101_100, 0x31] });
    system.registers.A = 0x32;
    system.instruction();
    expect(system.registers.A).toBe(0x3);
    expect(system.ticks).toBe(16n);
  });

  test('ORI', () => {
    const system = new System({ memoryDump: [0b00_110_100, 0x1] });
    system.registers.A = 0x30;
    system.instruction();
    expect(system.registers.A).toBe(0x31);
    expect(system.ticks).toBe(16n);
  });

  test('CPI', () => {
    const system = new System({ memoryDump: [0b00_111_100, 0x30] });
    system.flags.carry = true;
    system.registers.A = 0x30;
    system.instruction();
    expect(system.registers.A).toBe(0x30);
    expect(system.flags.zero).toBeTruthy();
    expect(system.flags.carry).toBeFalsy();
    expect(system.ticks).toBe(16n);
  });
});

describe('program counter instructions', () => {
  test('RET', () => {
    const system = new System({ memoryDump: [0b00_000_111] });
    system.registers.SP = 1;
    system.stack[0] = 0x123;
    system.instruction();
    expect(system.registers.PC).toBe(0x123);
    expect(system.registers.SP).toBe(0x0);
    expect(system.ticks).toBe(10n);
  });

  test('RST', () => {
    const system = new System({ memoryDump: [0b00_001_101] });
    system.instruction();
    expect(system.registers.PC).toBe(0x08);
    expect(system.registers.SP).toBe(0x1);
    expect(system.stack).toEqual([0x01]);
    expect(system.ticks).toBe(10n);
  });

  test('JMP', () => {
    const system = new System({ memoryDump: [0b01_000_100, 0x12, 0x34] });
    system.instruction();
    expect(system.registers.PC).toBe(0x3412);
    expect(system.ticks).toBe(22n);
  });

  test('CAL', () => {
    const system = new System({ memoryDump: [0b01_000_110, 0x12, 0x34] });
    system.instruction();
    expect(system.registers.PC).toBe(0x3412);
    expect(system.registers.SP).toBe(0x1);
    expect(system.stack).toEqual([0x03]);
    expect(system.ticks).toBe(22n);
  });

  test('RFZ', () => {
    const system = new System({ memoryDump: [0b000_01_011] });
    system.registers.SP = 1;
    system.stack[0] = 0x123;
    system.flags.zero = true;
    system.instruction();
    expect(system.registers.PC).toBe(0x1);
    expect(system.registers.SP).toBe(0x1);
    expect(system.ticks).toBe(6n);
  });

  test('RTC', () => {
    const system = new System({ memoryDump: [0b001_00_011] });
    system.registers.SP = 1;
    system.stack[0] = 0x123;
    system.flags.carry = true;
    system.instruction();
    expect(system.registers.PC).toBe(0x123);
    expect(system.registers.SP).toBe(0x0);
    expect(system.ticks).toBe(10n);
  });

  test('JFS', () => {
    const system = new System({ memoryDump: [0b010_10_000, 0x12, 0x34] });
    system.flags.sign = false;
    system.instruction();
    expect(system.registers.PC).toBe(0x3412);
    expect(system.ticks).toBe(22n);
  });

  test('JTP', () => {
    const system = new System({ memoryDump: [0b011_10_000, 0x12, 0x34] });
    system.flags.parity = false;
    system.instruction();
    expect(system.registers.PC).toBe(0x3);
    expect(system.ticks).toBe(18n);
  });

  test('CTZ', () => {
    const system = new System({ memoryDump: [0b011_01_010, 0x12, 0x34] });
    system.flags.zero = true;
    system.instruction();
    expect(system.registers.PC).toBe(0x3412);
    expect(system.registers.SP).toBe(0x1);
    expect(system.stack).toEqual([0x03]);
    expect(system.ticks).toBe(22n);
  });

  test('CFC', () => {
    const system = new System({ memoryDump: [0b010_00_010, 0x12, 0x34] });
    system.flags.carry = true;
    system.instruction();
    expect(system.registers.PC).toBe(0x3);
    expect(system.registers.SP).toBe(0x0);
    expect(system.ticks).toBe(18n);
  });
});
