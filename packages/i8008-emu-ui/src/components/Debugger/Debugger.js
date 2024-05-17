import { Button, Notification, Columns, Table, Tag } from 'react-bulma-components';

import { padHex } from '../../utilities/string.js';
import FramedBox from '../UI/FramedBox/FramedBox.js';
import IO from './IO.js';
import emulator from '../../services/emulator.js';
import compile from '../../services/compiler.js';
import editorStore from '../../stores/editorStore.js';
import compilerStore from '../../stores/compilerStore.js';
import emulatorStore from '../../stores/emulatorStore.js';

/*
 * Compile source code into ROM image and run this image inside emulator
 */
const buildAndRun = (editor, runningMode) => {
  const unsubscribe = compilerStore.subscribe(
    (state) => state.isCompiling,
    (isCompiling, state) => {
      if (isCompiling) {
        return;
      }

      unsubscribe();

      if (!state.errors?.length) {
        emulator.run(state.romDump, runningMode);
        editor.focus();
      }
    },
  );

  compile(editor.getValue());
};

export default function Debugger() {
  const editor = editorStore.useState((state) => state.editor);
  const isCompiling = compilerStore.useState((state) => state.isCompiling);
  const { emulatorError, flags, isRunning, registers, runningMode, stack } = emulatorStore.useState(
    (state) => ({
      emulatorError: state.error,
      flags: state.flags,
      isRunning: state.isRunning,
      registers: state.registers,
      runningMode: state.runningMode,
      stack: state.stack,
    }),
  );

  return (
    <>
      { emulatorError && <Notification color="danger">{emulatorError}</Notification> }
      <div className="buttons">
        <Button color="success" disabled={isCompiling || isRunning} onClick={() => buildAndRun(editor, 'run')}>
          Build & Run
        </Button>
        <Button color="info" disabled={isCompiling || isRunning} onClick={() => buildAndRun(editor, 'debug')}>
          Build & Debug
        </Button>
        { isRunning && <Button color="danger" onClick={() => emulator.stop()}>Stop</Button> }
        { isRunning && (runningMode === 'debug') && <Button onClick={() => emulator.stepOver()}>Step over</Button> }
        { isRunning && (runningMode === 'debug') && <Button onClick={() => emulator.stepInto()}>Step into</Button> }
        { isRunning && (runningMode === 'debug') && <Button onClick={() => emulator.continueExec()}>Continue</Button> }
      </div>
      <Columns>
        <Columns.Column>
          <FramedBox title="Control">
            <Table bordered={false} size="narrow" striped={false}>
              <tbody>
                <tr>
                  <td>{padHex(registers.PC || 0, 4) }</td>
                  <td><Tag>PC</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.SP || 0, 2) }</td>
                  <td><Tag>SP</Tag></td>
                </tr>
                {
                  stack.map((stackValue, idx) => (
                    <tr key={`stack-${idx}`}>
                      <td>{padHex(stackValue || 0, 4) }</td>
                      <td><Tag>{`S${idx}`}</Tag></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </FramedBox>
        </Columns.Column>
        <Columns.Column>
          <FramedBox title="Registers">
            <Table bordered={false} size="narrow" striped={false}>
              <tbody>
                <tr>
                  <td>{padHex(registers.A || 0, 2) }</td>
                  <td><Tag>A</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.B || 0, 2) }</td>
                  <td><Tag>B</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.C || 0, 2) }</td>
                  <td><Tag>C</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.D || 0, 2) }</td>
                  <td><Tag>D</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.E || 0, 2) }</td>
                  <td><Tag>E</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.H || 0, 2) }</td>
                  <td><Tag>H</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(registers.L || 0, 2) }</td>
                  <td><Tag>L</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(flags.carry | 0, 2) }</td>
                  <td><Tag>Carry flag</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(flags.zero | 0, 2) }</td>
                  <td><Tag>Zero flag</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(flags.sign | 0, 2) }</td>
                  <td><Tag>Sign flag</Tag></td>
                </tr>
                <tr>
                  <td>{padHex(flags.parity | 0, 2) }</td>
                  <td><Tag>Parity flag</Tag></td>
                </tr>
              </tbody>
            </Table>
          </FramedBox>
        </Columns.Column>
        <Columns.Column>
          <FramedBox style={{ maxHeight: '500px', overflow: 'auto', width: '100%' }} title="IO">
            <IO />
          </FramedBox>
        </Columns.Column>
      </Columns>
    </>
  );
}
