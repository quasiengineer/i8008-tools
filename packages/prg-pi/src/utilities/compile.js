/* eslint-disable no-console */

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { compile } from 'i8008-asm';
import { preprocessFile } from 'i8008-preprocess';

const defaultWrapper = (sourceCode, funcName) => `
entrypoint:
  CAL ${funcName}
  HLT

${sourceCode}
`;

export const compileCodeForTest = (fileName, { sourceCodeWrapper, funcName } = {}) => {
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const preprocessedCode = preprocessFile(path.resolve(dirName, '../', fileName));
  const testCode = sourceCodeWrapper ? sourceCodeWrapper(preprocessedCode) : defaultWrapper(preprocessedCode, funcName);

  const { bytecode, errors, symbols } = compile(testCode);
  if (errors?.length) {
    console.log('COULD NOT PARSE SOURCE CODE!');
    console.log(errors);
    process.exit(1);
  }

  const memory = new Uint8Array(2 ** 14);
  memory.set(bytecode, 0);

  return { memory, sourceCode: testCode, symbols };
};
