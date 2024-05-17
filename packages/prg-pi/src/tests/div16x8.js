/* eslint-disable no-console */

import Emulator from 'i8008-emu';

import { compileCodeForTest } from '#utilities/compile.js';
import { updateCodeForUseInEmulator, generateRegisterInitialization } from '#utilities/codeGenerator.js';

const PROLOGUE_STATES_COUNT = 14n;

const TESTS = [
  { a: 2550, b: 3 },
  { a: 20480, b: 3 },
];

const runSingleTest = (romDump, { a, b }) => {
  const system = new Emulator({ memoryDump: romDump });

  const { registers, memory } = system;
  registers.L = a & 0xFF;
  registers.H = a >> 8;
  registers.C = b;

  while (!system.isFinished) {
    system.instruction();
  }

  return {
    result: {
      reminder: memory[0x3E08] + (memory[0x3E09] << 8),
      quotient: memory[0x3E0A] + (memory[0x3E0B] << 8),
    },
    elapsedStates: system.tStates,
  };
};

(function main() {
  const { memory, sourceCode } = compileCodeForTest('submodules/div16x8.i8008', { funcName: 'div16x8' });

  let sum = 0n;
  for (const { a, b } of TESTS) {
    const expectedQuotient = Math.trunc(a / b);
    const expectedReminder = a % b;
    const { result: { quotient, reminder }, elapsedStates } = runSingleTest(memory, { a, b });
    if (quotient !== expectedQuotient || reminder !== expectedReminder) {
      console.log(`Test failed, a = ${a}, b = ${b}, returned quotient = ${quotient}, reminder = ${reminder}`);
      console.log('Code to reproduce:');

      const initializators = [
        generateRegisterInitialization('H', a >> 8),
        generateRegisterInitialization('L', a & 0xFF),
        generateRegisterInitialization('C', b),
      ];

      console.log(updateCodeForUseInEmulator(sourceCode, initializators));
      process.exit(1);
    }

    sum += (elapsedStates - PROLOGUE_STATES_COUNT);
  }

  console.log('All tests are passed!');
  console.log(`Avg execution time: ${sum / BigInt(TESTS.length)} states`);
}());
