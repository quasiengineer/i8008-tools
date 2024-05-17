const { Lexer, createToken } = require('chevrotain');

const tokens = {};

// we want to have labels started with z/c/t or with "add"/"sub"/... prefixes, but "Cond"/"InstructionXXX" tokens
// would be matched first, to prevent that we need to use "longer_alt" option to prefer longer tokens
const labelToken = createToken({ name: 'Label', pattern: /[a-z]\w*/ });

const addToken = (name, options) => {
  tokens[name] = createToken({ name, ...options });
};

const addInstructionToken = (name, pattern) => {
  addToken(`Instruction${name}`, { pattern: new RegExp(pattern), longer_alt: labelToken });
}

addToken('NewLine', { pattern: /\r?\n/ });
addToken('Colon', { pattern: ':' });
addToken('Comment', { pattern: /(?:#|(?:\/\/))[^\n\r]*/, group: Lexer.SKIPPED });
addToken('WhiteSpace', { pattern: /[^\S\r\n]+/, group: Lexer.SKIPPED });

const REGISTERS_REGEX = '(?:a|b|c|d|e|h|l)';
const CONDITIONS_REGEX = '(?:c|z|s|p)';
const CONDITIONS_INSTRUCTIONS = ['jf', 'jt', 'cf', 'ct', 'rf', 'rt'];
const ACCUMULATOR_INSTRUCTIONS = ['ad', 'ac', 'su', 'sb', 'nd', 'xr', 'or', 'cp'];
const UNGROUPED_INSTRUCTIONS = ['lmi', 'rlc', 'rrc', 'ral', 'rar', 'jmp', 'cal', 'ret', 'rst', 'inp', 'out', 'hlt'];

// instructions without registers or condition encoded inside mnemonic
UNGROUPED_INSTRUCTIONS.forEach((instr) => addInstructionToken(instr.toUpperCase(), instr));

addInstructionToken('Lrr', `l${REGISTERS_REGEX}${REGISTERS_REGEX}`);
addInstructionToken('LrM', `l${REGISTERS_REGEX}m`);
addInstructionToken('LrI', `l${REGISTERS_REGEX}i`);
addInstructionToken('LMr', `lm${REGISTERS_REGEX}`);
addInstructionToken('INr', `in${REGISTERS_REGEX}`);
addInstructionToken('DCr', `dc${REGISTERS_REGEX}`);

ACCUMULATOR_INSTRUCTIONS.forEach((instr) => {
  addInstructionToken(`${instr.toUpperCase()}r`, `${instr}${REGISTERS_REGEX}`);
  addInstructionToken(`${instr.toUpperCase()}M`, `${instr}m`);
  addInstructionToken(`${instr.toUpperCase()}I`, `${instr}i`);
});

CONDITIONS_INSTRUCTIONS.forEach((instr) => (
  addInstructionToken(`${instr.toUpperCase()}c`, `${instr}${CONDITIONS_REGEX}`)
));

// maximum bit-width for immediate value is 14 bit
addToken('Imm', { pattern: /0x(?:[0-3][0-9a-f]{3}|[0-9a-f]{1,3})|1[0-5]\d{3}|16[0-2]\d{2}|163[0-7]\d|1638[0-3]|0?\d{1,4}/ });

// important to define label name after keywords, because lexer tries to match first rule from array
// and it could match label first because patterns of instruction names and labels are intersected
tokens.Label = labelToken;

module.exports = {
  allTokens: Object.values(tokens),
  Tokens: tokens,
};
