export default `start:
  LLI 200
  LHI 0
loop:
  LAM
  CPI 0x2E
  JTZ found
  CAL incr
  LAL
  CPI 220
  JFZ loop
  
found:
  HLT
  
incr:
  INL
  RFZ
  INH
  RET
`;
