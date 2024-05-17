import { compile } from 'i8008-asm';

onmessage = ({ data: sourceCode }) => {
  const { bytecode, errors, sourceMap } = compile(sourceCode);
  if (errors?.length) {
    postMessage({
      errors: errors.map(({ column, line, message, token }) => ({
        column: token ? token.startColumn : column,
        row: (token ? token.startLine : line) - 1,
        text: message,
      })),
      rom: null,
    });
    return;
  }

  postMessage({ bytecode, errors: [], sourceMap });
};
