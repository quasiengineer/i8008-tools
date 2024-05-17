import SignalBus from './signals/signalBus.js';
import ClockGenerator from './devices/clock.js';
import CPU, { CPU_STATES } from './devices/cpu/cpu.js';
import Memory from './devices/memory.js';

class System {
  #cpu;

  #memory;

  #clockGenerator;

  #signalBus;

  #terminated = false;

  #doesCpuStartedNewInstruction() {
    return this.#cpu.state === CPU_STATES.T1 && this.#cpu.instructionCycle === 0;
  }

  constructor({ memoryDump, ioOutputHandler }) {
    this.#signalBus = new SignalBus();
    this.#clockGenerator = new ClockGenerator(this.#signalBus);
    this.#cpu = new CPU(this.#signalBus);
    this.#memory = new Memory(this.#signalBus, memoryDump, ioOutputHandler);
  }

  instruction() {
    do {
      // each t-state requires two ticks
      this.#clockGenerator.tick();
      this.#clockGenerator.tick();
    } while (this.#cpu.state !== CPU_STATES.STOPPED && !this.#doesCpuStartedNewInstruction());
  }

  terminate() {
    this.#terminated = true;
  }

  get isFinished() {
    return this.#terminated || this.#cpu.state === CPU_STATES.STOPPED;
  }

  get ticks() {
    return this.#clockGenerator.ticks;
  }

  get tStates() {
    return this.#clockGenerator.ticks / 2n;
  }

  get stack() {
    return this.#cpu.stack;
  }

  get registers() {
    return this.#cpu.registers;
  }

  get flags() {
    return this.#cpu.flags;
  }

  get memory() {
    return this.#memory.memory;
  }
}

export default System;
