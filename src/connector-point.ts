import { ConnectorPointPosition } from './connector.model';

export class ConnectorPoint extends HTMLElement {
  position: ConnectorPointPosition;
  constructor() {
    super();
    this.position = 'left';
  }
}
