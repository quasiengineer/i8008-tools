import { useState, useCallback } from 'react';
import { Form } from 'react-bulma-components';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import emulatorStore from '../../stores/emulatorStore.js';
import { padHex } from '../../utilities/string.js';

import './Memory.css';

function Row({ data: { ram, selectedAddress }, index, style }) {
  const rowOffset = index * 32;
  const bytes = [];

  for (let byteOffset = 0; byteOffset < 32; byteOffset++) {
    const absOffset = rowOffset + byteOffset;
    bytes.push(absOffset === selectedAddress ? `<b>${padHex(ram[absOffset], 2)}</b>` : padHex(ram[absOffset], 2));
  }

  return <div dangerouslySetInnerHTML={{ __html: `${padHex(rowOffset, 4)} | ${bytes.join(' ')}` }} style={style} />;
}

Row.propTypes = {
  data: PropTypes.shape({ ram: PropTypes.instanceOf(Uint8Array), selectedAddress: PropTypes.number }).isRequired,
  index: PropTypes.number.isRequired,
  style: stylePropType.isRequired,
};

export default function Memory() {
  const [uploadedRAMDumpName, setUploadedRAMDumpName] = useState('');
  const [dumpOffset, setDumpOffset] = useState(0);
  const [itemHeight, setItemHeight] = useState(18);
  const [rowWidth, setRowWidth] = useState(800);
  const { ram, registers } = emulatorStore.useState((state) => ({ ram: state.ram, registers: state.registers }));

  const uploadRAMDump = async (file) => {
    const dump = await file.arrayBuffer();

    emulatorStore.update((state) => {
      state.initialRam.data = dump;
    });

    setUploadedRAMDumpName(file.name);
  };

  const updateDumpOffset = (newDumpOffset) => {
    setDumpOffset(newDumpOffset);

    emulatorStore.update((state) => {
      state.initialRam.offset = newDumpOffset;
    });
  };

  const setHeaderRef = useCallback((node) => {
    if (!node) {
      return;
    }

    setItemHeight(Number(window.getComputedStyle(node)?.getPropertyValue('height')?.slice(0, -2)));
    setRowWidth(Number(window.getComputedStyle(node)?.getPropertyValue('width')?.slice(0, -2)) + 50);
  }, []);

  const selectedAddress = (registers.H << 8) | registers.L;

  return (
    <>
      <div className="mb-2">
        <Form.Field kind="group">
          <Form.Control>
            <Form.InputFile label="Initial RAM dump..." onChange={(e) => uploadRAMDump(e.target.files[0])} />
          </Form.Control>
          <Form.Control>
            <Form.Input
              onChange={({ target: { value } }) => updateDumpOffset(value)}
              placeholder="Dump offset"
              type="text"
              value={dumpOffset}
            />
          </Form.Control>
        </Form.Field>
        <div>
          Loaded dump:
          {uploadedRAMDumpName || 'none'}
          , would be placed at the
          <b>{padHex(dumpOffset, 4)}</b>
          location in the address space
        </div>
      </div>

      <div ref={setHeaderRef} style={{ borderBottom: '1px solid black', fontFamily: 'Lucida Console', fontSize: '9pt' }}>
        &nbsp;&nbsp;&nbsp;&nbsp; |
        00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F 10 11 12 13 14 15 16 17 18 19 1A 1B 1C 1D 1E 1F
      </div>

      <FixedSizeList
        className="memory-bytes"
        height={1024}
        itemCount={Math.floor(ram.length / 32) || 0}
        itemData={{ ram, selectedAddress }}
        itemSize={itemHeight}
        width={rowWidth}
      >
        {Row}
      </FixedSizeList>
    </>
  );
}
