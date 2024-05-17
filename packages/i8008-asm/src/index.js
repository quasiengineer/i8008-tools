const asmLexer = require('./parser/AsmLexer.js');
const asmParser = require('./parser/AsmParser.js');

/*
 * Compile provided code
 *
 * Returns { symbols, bytecode, sourceMap, errors }
 */
const compile = (sourceCode) => {
  const { tokens, errors: lexerErrors } = asmLexer.tokenize(sourceCode.toLowerCase());
  if (lexerErrors.length) {
    return { errors: lexerErrors };
  }

  const parsingResult = asmParser.parse(tokens);
  if (!parsingResult) {
    for (const err of asmParser.errors) {
      if (err.token) {
        err.line = sourceCode.split('\n')[err.token.startLine - 1];
      }
    }

    return { errors: asmParser.errors };
  }

  return parsingResult;
};

module.exports = {
  compile,
};
