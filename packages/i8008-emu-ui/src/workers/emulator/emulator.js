import Emulator from 'i8008-emu';

let system;
let breakpoints = new Set();

const sendState = () => {
  postMessage({
    command: 'state',
    flags: system.flags,
    ram: system.memory,
    registers: system.registers,
    stack: system.stack,
  });
};

/*
 * Interrupt execution loop to check if there is some messages into channel
 */
const yieldToMacrotasks = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 0);
});

const YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS = 100000;

const commands = {
  breakpoints: ({ breakpoints: inputBreakpoints }) => {
    breakpoints = inputBreakpoints;
  },

  continue: async () => {
    let stepsFromLastChannelCheck = 0;
    while (!system.isFinished) {
      system.instruction();

      if (breakpoints.has(system.registers.PC)) {
        sendState();
        return;
      }

      stepsFromLastChannelCheck++;
      if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
        await yieldToMacrotasks();
        stepsFromLastChannelCheck = 0;
      }
    }

    sendState();
    postMessage({ command: 'finish' });
  },

  run: async ({ breakpoints: inputBreakpoints, mode, ramDump, romDump }) => {
    if (mode !== 'debug' && mode !== 'run') {
      throw 'Unknown emulator mode';
    }

    breakpoints = inputBreakpoints || new Set();

    const memoryDump = new Uint8Array(2 ** 14);
    memoryDump.set(romDump, 0);
    if (ramDump.data) {
      memoryDump.set(new Uint8Array(ramDump.data), Number(ramDump.offset));
    }

    system = new Emulator({
      ioOutputHandler: ({ data, deviceNo }) => postMessage({ command: 'IOOutput', data, deviceNo }),
      memoryDump,
    });

    sendState();

    if (mode === 'run') {
      let stepsFromLastChannelCheck = 0;
      while (!system.isFinished) {
        system.instruction();

        stepsFromLastChannelCheck++;
        if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
          await yieldToMacrotasks();
          stepsFromLastChannelCheck = 0;
        }
      }

      sendState();
      postMessage({ command: 'finish' });
    }
  },

  stepInto: () => {
    if (!system.isFinished) {
      system.instruction();
      sendState();
    } else {
      postMessage({ command: 'finish' });
    }
  },

  stepOver: async () => {
    const currentNestingLevel = system.registers.SP;
    if (!system.isFinished) {
      system.instruction();
      let stepsFromLastChannelCheck = 0;

      while (currentNestingLevel !== system.registers.SP) {
        if (system.isFinished) {
          sendState();
          postMessage({ command: 'finish' });
          return;
        }
        system.instruction();

        stepsFromLastChannelCheck++;
        if (stepsFromLastChannelCheck % YIELD_PERIOD_TO_CHECK_FOR_NEW_MESSAGES_IN_EMULATOR_INSTRUCTIONS === 0) {
          await yieldToMacrotasks();
          stepsFromLastChannelCheck = 0;
        }
      }
      sendState();
    } else {
      postMessage({ command: 'finish' });
    }
  },

  stop: () => {
    system.terminate();
    postMessage({ command: 'finish' });
  },
};

onmessage = ({ data: { command, ...args } }) => {
  try {
    if (!commands[command]) {
      postMessage({ command, error: 'Unknown command' });
      return;
    }

    commands[command](args);
  } catch (err) {
    postMessage({ command, error: err.toString() });
  }
};
