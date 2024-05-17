import { toHex } from './string.js';

export default ({ data, deviceNo }) => `Send 0x${toHex(data)} to ${deviceNo}`;
