import { ConnectorPointerPosition } from '../connector.model';

function isPointerPositioned(position: ConnectorPointerPosition): boolean {
  return ['top', 'left', 'right', 'bottom'].indexOf(position) !== -1;
}

function f() {}

export { isPointerPositioned };
