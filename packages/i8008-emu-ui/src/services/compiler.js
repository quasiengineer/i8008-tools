import compilerStore from '../stores/compilerStore.js';

const worker = new Worker(new URL('../workers/compiler/compiler.js', import.meta.url), { type: 'module' });

worker.onmessage = ({ data: { bytecode, errors, sourceMap } }) => {
  const romOffsetBySourceCode = new Map();
  const sourceCodeLineByRomOffset = new Map();

  if (sourceMap) {
    for (const { line, offset } of sourceMap) {
      romOffsetBySourceCode.set(line, offset);
      sourceCodeLineByRomOffset.set(offset, line);
    }
  }

  compilerStore.update((state) => {
    state.isCompiling = false;
    state.errors = errors;
    state.romDump = bytecode;
    state.romOffsetBySourceCode = romOffsetBySourceCode;
    state.sourceCodeLineByRomOffset = sourceCodeLineByRomOffset;
  });
};

export default function compile(sourceCode) {
  compilerStore.update((state) => {
    state.isCompiling = true;
    state.errors = [];
    state.romDump = null;
    state.romOffsetBySourceCode = new Map();
    state.sourceCodeLineByRomOffset = new Map();
  });

  worker.postMessage(sourceCode);
}
