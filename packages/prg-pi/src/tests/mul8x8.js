/* eslint-disable no-console */

import Emulator from 'i8008-emu';

import { compileCodeForTest } from '#utilities/compile.js';

const PROLOGUE_STATES_COUNT = 14n;

const runSingleTest = (romDump, { a, b }) => {
  const system = new Emulator({ memoryDump: romDump });

  const { registers } = system;
  registers.C = a;
  registers.D = b;

  while (!system.isFinished) {
    system.instruction();
  }

  return {
    result: (registers.B << 8) + registers.A,
    elapsedStates: system.tStates,
  };
};

(function main() {
  const { memory } = compileCodeForTest('submodules/mul8x8.i8008', { funcName: 'mul8x8' });

  let sum = 0n;
  for (let a = 0; a <= 0xFF; a++) {
    console.log(`Test: ${a} * x ...`);
    for (let b = 0; b <= 0xFF; b++) {
      const expected = a * b;
      const { result, elapsedStates } = runSingleTest(memory, { a, b });
      if (result !== expected) {
        console.log(`Test failed, a = ${a}, b = ${b}, result = ${result}`);
        process.exit(1);
      }

      sum += (elapsedStates - PROLOGUE_STATES_COUNT);
    }
  }

  console.log('All tests are passed!');
  console.log(`Avg execution time: ${sum / (0x100n * 0x100n)} states`);
}());
