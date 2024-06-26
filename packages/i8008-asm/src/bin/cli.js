#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const { compile } = require('../index.js');

const usage = () => {
  console.log('USAGE: i8008-asm INPUT_FILE [OUTPUT_FILE]');
  console.log('  if [OUTPUT_FILE] is not specified, then INPUT_FILE would be used (with extension replacement to .bin)');
};

const main = () => {
  const [inputPathArg, outputPathArg] = process.argv.slice(2);
  if (!inputPathArg) {
    usage();
    return;
  }

  const inputPath = path.resolve(inputPathArg);
  const outputPath = outputPathArg || path.format({ ...path.parse(inputPath), ext: '.bin', base: undefined });

  const fileData = fs.readFileSync(inputPath);
  const { errors, bytecode } = compile(fileData.toString());
  if (errors?.length) {
    console.log('COULD NOT PARSE SOURCE CODE!');
    console.log(errors);
    process.exit(1);
  }

  fs.writeFileSync(outputPath, Buffer.from(bytecode.buffer));
  console.log(`ROM image has been saved to ${outputPath}`);
};

main();
