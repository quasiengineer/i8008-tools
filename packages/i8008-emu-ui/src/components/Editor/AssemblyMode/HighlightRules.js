const INTEL_8008_INSTRUCTIONS = [
  'HLT', 'RLC', 'RFC', 'ADI', 'RST', 'LAI', 'RET', 'INB', 'DCB', 'RRC', 'RFZ', 'ACI', 'LBI', 'INC', 'DCC', 'RAL', 'RFS',
  'SUI', 'LCI', 'IND', 'DCD', 'RAR', 'RFP', 'SBI', 'LDI', 'INE', 'DCE', 'RTC', 'NDI', 'LEI', 'INH', 'DCH', 'RTZ', 'XRI',
  'LHI', 'INL', 'DCL', 'RTS', 'ORI', 'LLI', 'RTP', 'CPI', 'LMI', 'JFC', 'INP', 'CFC', 'JMP', 'CAL', 'JFZ', 'CFZ', 'JFS',
  'OUT', 'CFS', 'JFP', 'CFP', 'JTC', 'CTC', 'JTZ', 'CTZ', 'JTS', 'CTS', 'JTP', 'CTP', 'ADA', 'ADB', 'ADC', 'ADD', 'ADE',
  'ADH', 'ADL', 'ADM', 'ACA', 'ACB', 'ACC', 'ACD', 'ACE', 'ACH', 'ACL', 'ACM', 'SUA', 'SUB', 'SUC', 'SUD', 'SUE', 'SUH',
  'SUL', 'SUM', 'SBA', 'SBB', 'SBC', 'SBD', 'SBE', 'SBH', 'SBL', 'SBM', 'NDA', 'NDB', 'NDC', 'NDD', 'NDE', 'NDH', 'NDL',
  'NDM', 'XRA', 'XRB', 'XRC', 'XRD', 'XRE', 'XRH', 'XRL', 'XRM', 'ORA', 'ORB', 'ORC', 'ORD', 'ORE', 'ORH', 'ORL', 'ORM',
  'CPA', 'CPB', 'CPC', 'CPD', 'CPE', 'CPH', 'CPL', 'CPM', 'NOP', 'LAB', 'LAC', 'LAD', 'LAE', 'LAH', 'LAL', 'LAM', 'LBA',
  'LBB', 'LBC', 'LBD', 'LBE', 'LBH', 'LBL', 'LBM', 'LCA', 'LCB', 'LCC', 'LCD', 'LCE', 'LCH', 'LCL', 'LCM', 'LDA', 'LDB',
  'LDC', 'LDD', 'LDE', 'LDH', 'LDL', 'LDM', 'LEA', 'LEB', 'LEC', 'LED', 'LEE', 'LEH', 'LEL', 'LEM', 'LHA', 'LHB', 'LHC',
  'LHD', 'LHE', 'LHH', 'LHL', 'LHM', 'LLA', 'LLB', 'LLC', 'LLD', 'LLE', 'LLH', 'LLL', 'LLM', 'LMA', 'LMB', 'LMC', 'LMD',
  'LME', 'LMH', 'LML',
];

class HighlightRules extends window.ace.acequire('ace/mode/text_highlight_rules').TextHighlightRules {
  constructor() {
    super();

    this.$rules = {
      start: [
        {
          regex: '(?://|#).*$',
          token: 'comment',
        },
        {
          regex: '^\\w+:',
          token: 'entity.name.function',
        },
        {
          caseInsensitive: true,
          regex: `\\b(?:${INTEL_8008_INSTRUCTIONS.join('|')})\\b`,
          token: 'keyword.control',
        },
        {
          regex: '\\b[0-9]+\\b',
          token: 'constant.character.decimal',
        },
        {
          caseInsensitive: true,
          regex: '\\b0x[A-F0-9]+\\b',
          token: 'constant.character.hexadecimal',
        },
      ],
    };

    this.normalizeRules();
  }
}

export default HighlightRules;
