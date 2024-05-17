/*
 * Updates source code to be more usable inside browser emulator GUI
 *   - adds preamble that contains initialization code to seed registers and memory with values
 */
export const updateCodeForUseInEmulator = (sourceCode, initializators = []) => (`CAL prepareTestData
${sourceCode}
prepareTestData:
${initializators.flat().map((line) => `  ${line}`).join('\n')}
  RET
`);

/*
 * Generate instructions to seed register with value
 */
export const generateRegisterInitialization = (reg, value) => `L${reg}I 0x${value.toString(16)}`;
