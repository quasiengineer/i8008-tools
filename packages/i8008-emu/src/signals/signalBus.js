import SIGNAL_STATES from './signalStates.js';

class SignalBus {
  #signals = {};

  #highListeners = {};

  #lowListeners = {};

  registerSignalSource(name, signalSource) {
    let signal = this.#signals[name];

    if (!signal) {
      signal = { state: signalSource.state, signalSources: [] };
      this.#signals[name] = signal;
    }

    signal.signalSources.push(signalSource);

    signalSource.addListener((sourceState) => {
      const currentState = signal.state;
      const newState = sourceState === SIGNAL_STATES.FLOATING
        ? signal.signalSources.find((source) => source.state !== SIGNAL_STATES.FLOATING)?.state || SIGNAL_STATES.LOW
        : sourceState;

      signal.state = newState;

      if (newState === SIGNAL_STATES.HIGH && currentState !== SIGNAL_STATES.HIGH) {
        this.#highListeners[name]?.forEach((fn) => fn());
      } else if (newState === SIGNAL_STATES.LOW && currentState !== SIGNAL_STATES.LOW) {
        this.#lowListeners[name]?.forEach((fn) => fn());
      }
    });
  }

  signalState(name) {
    return this.#signals[name]?.state;
  }

  busValue(busName, busWidth) {
    let value = 0;

    for (let signalIdx = 0; signalIdx < busWidth; signalIdx++) {
      const signalValue = this.#signals[`${busName}${signalIdx}`]?.state === SIGNAL_STATES.HIGH ? 1 : 0;
      value |= signalValue << signalIdx;
    }

    return value;
  }

  onHigh(name, fn) {
    if (!this.#highListeners[name]) {
      this.#highListeners[name] = [];
    }

    this.#highListeners[name].push(fn);
  }

  onLow(name, fn) {
    if (!this.#lowListeners[name]) {
      this.#lowListeners[name] = [];
    }

    this.#lowListeners[name].push(fn);
  }
}

export default SignalBus;
