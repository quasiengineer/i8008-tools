import { Store } from 'pullstate';

export default new Store({
  error: '',
  flags: {},
  initialRam: { data: null, offset: 0 },
  IOLog: [],
  isRunning: false,
  ram: [],
  registers: {},
  runningMode: null,
  stack: [],
});
