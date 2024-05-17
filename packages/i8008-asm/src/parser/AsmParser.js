const { EmbeddedActionsParser, MismatchedTokenException } = require('chevrotain');

const { Tokens, allTokens } = require('./tokens.js');
const { CodeGenerator, AddrType } = require('./CodeGenerator.js');

class AsmParser extends EmbeddedActionsParser {
  constructor() {
    super(allTokens, { outputCst: false });

    const $ = this;

    const codeGenerator = new CodeGenerator();
    this.codeGenerator = codeGenerator;

    $.RULE('program', () => {
      $.AT_LEAST_ONE_SEP({
        SEP: Tokens.NewLine,
        DEF: () => $.SUBRULE($.instructionWithLabel),
      });

      try {
        // we expect that program rule should cover whole source code
        if (this.isAtEndOfInput()) {
          return codeGenerator.generate();
        }
      } catch (err) {
        throw $.SAVE_ERROR(new MismatchedTokenException(err.toString()));
      }

      return null;
    });

    $.RULE('instructionWithLabel', () => {
      $.OPTION1(() => $.SUBRULE($.label));
      $.OPTION2(() => $.SUBRULE($.instruction));
    });

    $.RULE('label', () => {
      const labelToken = $.CONSUME(Tokens.Label);
      $.CONSUME(Tokens.Colon);

      $.ACTION(() => {
        if (!codeGenerator.addLabel(labelToken.image)) {
          throw $.SAVE_ERROR(new MismatchedTokenException('Duplicated definition for label', labelToken));
        }
      });
    });

    $.RULE('instruction', () => {
      $.OR([
        { ALT: () => $.SUBRULE($.instructionWithoutArg) },
        { ALT: () => $.SUBRULE($.instructionRST) },
        { ALT: () => $.SUBRULE($.instructionINP) },
        { ALT: () => $.SUBRULE($.instructionOUT) },
        { ALT: () => $.SUBRULE($.instructionWithImm8) },
        { ALT: () => $.SUBRULE($.instructionWithAddr) },
      ]);
    });

    $.RULE('instructionWithoutArg', () => {
      const instruction = $.OR([
        { ALT: () => $.CONSUME(Tokens.InstructionLrr) },
        { ALT: () => $.CONSUME(Tokens.InstructionLrM) },
        { ALT: () => $.CONSUME(Tokens.InstructionLMr) },
        { ALT: () => $.CONSUME(Tokens.InstructionINr) },
        { ALT: () => $.CONSUME(Tokens.InstructionDCr) },
        { ALT: () => $.CONSUME(Tokens.InstructionRLC) },
        { ALT: () => $.CONSUME(Tokens.InstructionRRC) },
        { ALT: () => $.CONSUME(Tokens.InstructionRAL) },
        { ALT: () => $.CONSUME(Tokens.InstructionRAR) },
        { ALT: () => $.CONSUME(Tokens.InstructionRET) },
        { ALT: () => $.CONSUME(Tokens.InstructionRFc) },
        { ALT: () => $.CONSUME(Tokens.InstructionRTc) },
        { ALT: () => $.CONSUME(Tokens.InstructionHLT) },
        { ALT: () => $.CONSUME(Tokens.InstructionADr) },
        { ALT: () => $.CONSUME(Tokens.InstructionADM) },
        { ALT: () => $.CONSUME(Tokens.InstructionACr) },
        { ALT: () => $.CONSUME(Tokens.InstructionACM) },
        { ALT: () => $.CONSUME(Tokens.InstructionSUr) },
        { ALT: () => $.CONSUME(Tokens.InstructionSUM) },
        { ALT: () => $.CONSUME(Tokens.InstructionSBr) },
        { ALT: () => $.CONSUME(Tokens.InstructionSBM) },
        { ALT: () => $.CONSUME(Tokens.InstructionNDr) },
        { ALT: () => $.CONSUME(Tokens.InstructionNDM) },
        { ALT: () => $.CONSUME(Tokens.InstructionXRr) },
        { ALT: () => $.CONSUME(Tokens.InstructionXRM) },
        { ALT: () => $.CONSUME(Tokens.InstructionORr) },
        { ALT: () => $.CONSUME(Tokens.InstructionORM) },
        { ALT: () => $.CONSUME(Tokens.InstructionCPr) },
        { ALT: () => $.CONSUME(Tokens.InstructionCPM) },
      ]);

      $.ACTION(() => {
        codeGenerator.pushInstructionWithoutArg(instruction.image, instruction.startLine);
      });
    });

    $.RULE('instructionOUT', () => {
      const instruction = $.CONSUME(Tokens.InstructionOUT);
      const imm = $.CONSUME(Tokens.Imm);

      $.ACTION(() => {
        try {
          codeGenerator.pushInstructionOUT(imm.image, instruction.startLine);
        } catch (err) {
          throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
        }
      });
    });

    $.RULE('instructionINP', () => {
      const instruction = $.CONSUME(Tokens.InstructionINP);
      const imm = $.CONSUME(Tokens.Imm);

      $.ACTION(() => {
        try {
          codeGenerator.pushInstructionINP(imm.image, instruction.startLine);
        } catch (err) {
          throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
        }
      });
    });

    $.RULE('instructionRST', () => {
      const instruction = $.CONSUME(Tokens.InstructionRST);
      const imm = $.CONSUME(Tokens.Imm);

      $.ACTION(() => {
        try {
          codeGenerator.pushInstructionRST(imm.image, instruction.startLine);
        } catch (err) {
          throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
        }
      });
    });

    $.RULE('instructionWithImm8', () => {
      const instruction = $.OR([
        { ALT: () => $.CONSUME(Tokens.InstructionLrI) },
        { ALT: () => $.CONSUME(Tokens.InstructionLMI) },
        { ALT: () => $.CONSUME(Tokens.InstructionADI) },
        { ALT: () => $.CONSUME(Tokens.InstructionACI) },
        { ALT: () => $.CONSUME(Tokens.InstructionSUI) },
        { ALT: () => $.CONSUME(Tokens.InstructionSBI) },
        { ALT: () => $.CONSUME(Tokens.InstructionNDI) },
        { ALT: () => $.CONSUME(Tokens.InstructionXRI) },
        { ALT: () => $.CONSUME(Tokens.InstructionORI) },
        { ALT: () => $.CONSUME(Tokens.InstructionCPI) },
      ]);

      const imm = $.CONSUME(Tokens.Imm);

      $.ACTION(() => {
        try {
          codeGenerator.pushInstructionWithImm8(instruction.image, imm.image, instruction.startLine);
        } catch (err) {
          throw $.SAVE_ERROR(new MismatchedTokenException(err.toString(), imm, instruction));
        }
      });
    });

    $.RULE('address', () => $.OR([
      { ALT: () => ({ token: $.CONSUME(Tokens.Label), type: AddrType.Label }) },
      { ALT: () => ({ token: $.CONSUME(Tokens.Imm), type: AddrType.Address }) },
    ]));

    $.RULE('instructionWithAddr', () => {
      const instruction = $.OR([
        { ALT: () => $.CONSUME(Tokens.InstructionJMP) },
        { ALT: () => $.CONSUME(Tokens.InstructionCAL) },
        { ALT: () => $.CONSUME(Tokens.InstructionJFc) },
        { ALT: () => $.CONSUME(Tokens.InstructionJTc) },
        { ALT: () => $.CONSUME(Tokens.InstructionCFc) },
        { ALT: () => $.CONSUME(Tokens.InstructionCTc) },
      ]);

      const { token: addr, type } = $.SUBRULE($.address);

      $.ACTION(() => {
        codeGenerator.pushInstructionWithAddress(instruction.image, addr.image, type, instruction.startLine);
      });
    });

    $.performSelfAnalysis();
  }

  parse(input) {
    this.input = input;
    this.codeGenerator.clear();
    return this.program();
  }
}

module.exports = new AsmParser([]);
