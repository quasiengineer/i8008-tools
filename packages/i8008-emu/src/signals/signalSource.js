import SIGNAL_STATES from './signalStates.js';

class SignalSource {
  #state = SIGNAL_STATES.FLOATING;

  #listeners = [];

  addListener(onChange) {
    this.#listeners.push(onChange);
  }

  set state(value) {
    this.#state = value;
    this.#listeners.forEach((fn) => fn(value));
  }

  get state() {
    return this.#state;
  }
}

export default SignalSource;
