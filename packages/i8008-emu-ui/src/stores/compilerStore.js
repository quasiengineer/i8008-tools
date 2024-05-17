import { Store } from 'pullstate';

export default new Store({
  errors: [],
  isCompiling: false,
  romDump: null,
  romOffsetBySourceCode: new Map(),
  sourceCodeLineByRomOffset: new Map(),
});
