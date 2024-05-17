import SignalSource from '../signals/signalSource.js';
import SIGNAL_STATES from '../signals/signalStates.js';

class ClockGenerator {
  #ph1Signal;

  #ph2Signal;

  #ticks = 0n;

  constructor(signalBus) {
    this.#ph1Signal = new SignalSource();
    this.#ph2Signal = new SignalSource();

    signalBus.registerSignalSource('ph1', this.#ph1Signal);
    signalBus.registerSignalSource('ph2', this.#ph2Signal);
  }

  tick() {
    this.#ph1Signal.state = SIGNAL_STATES.HIGH;
    this.#ph1Signal.state = SIGNAL_STATES.LOW;
    this.#ph2Signal.state = SIGNAL_STATES.HIGH;
    this.#ph2Signal.state = SIGNAL_STATES.LOW;

    this.#ticks += 1n;
  }

  get ticks() {
    return this.#ticks;
  }
}

export default ClockGenerator;
