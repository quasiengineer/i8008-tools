/* eslint-disable no-console */

import Emulator from 'i8008-emu';

import { compileCodeForTest } from '#utilities/compile.js';

const PROLOGUE_STATES_COUNT = 14n;

const runSingleTest = (romDump, { a, b }) => {
  const system = new Emulator({ memoryDump: romDump });

  const { registers } = system;
  registers.D = a;
  registers.C = b;

  while (!system.isFinished) {
    system.instruction();
  }

  return {
    result: { quotient: registers.B, reminder: registers.A },
    elapsedStates: system.tStates,
  };
};

(function main() {
  const { memory } = compileCodeForTest('submodules/div8x8.i8008', { funcName: 'div8x8' });

  let sum = 0n;
  for (let a = 0; a <= 0xFF; a++) {
    console.log(`Test: ${a} / x ...`);
    for (let b = 1; b <= 0xFF; b++) {
      const expectedQuotient = Math.trunc(a / b);
      const expectedReminder = a % b;
      const { result: { quotient, reminder }, elapsedStates } = runSingleTest(memory, { a, b });
      if (quotient !== expectedQuotient || reminder !== expectedReminder) {
        console.log(`Test failed, a = ${a}, b = ${b}, returned quotient = ${quotient}, reminder = ${reminder}`);
        process.exit(1);
      }

      sum += (elapsedStates - PROLOGUE_STATES_COUNT);
    }
  }

  console.log('All tests are passed!');
  console.log(`Avg execution time: ${sum / (0x100n * 0xFFn)} states`);
}());
