/* eslint-disable no-console */

import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

import { preprocessFile } from 'i8008-preprocess';
import { compile } from 'i8008-asm';

(function main() {
  const fileName = process.argv[2];
  const dirName = path.dirname(fileURLToPath(import.meta.url));
  const preprocessedCode = preprocessFile(path.resolve(dirName, '../', fileName));
  const { errors } = compile(preprocessedCode);
  if (errors?.length) {
    console.log('COULD NOT PARSE SOURCE CODE!');
    console.log(errors);
    process.exit(1);
  }

  console.log(preprocessedCode);
}());
