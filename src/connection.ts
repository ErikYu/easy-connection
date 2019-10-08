import { DomConnection, EasyConnectionOptions } from './connector.model';
import { ConnectorBase } from './connector-base';
import { Connectable } from './connectable';
import { ConnectorFlowchart } from './connector-flowchart';
import { ifOverlapping } from './utils';

interface ElementConnectionsMap {
  [a: string]: Array<ConnectorBase>;
}

const TYPE_MAP = {
  undefined: ConnectorBase,
  straight: ConnectorBase,
  flowchart: ConnectorFlowchart,
};

export class EasyConnection {
  playground: HTMLElement;
  options: EasyConnectionOptions;
  connectableElements: Connectable[] = [];
  connections: ConnectorBase[] = [];

  elementConnectionsMap: ElementConnectionsMap = {};

  constructor(
    playground: HTMLElement,
    elements: HTMLElement[] = [],
    connections: DomConnection[] = [],
    options: EasyConnectionOptions = { type: 'straight' },
  ) {
    this.playground = playground;
    this.options = options;
    // set the playground to position relative
    // init the connections
    for (const elem of elements) {
      this.elementConnectionsMap[elem.id] = [];
    }
    for (const con of connections) {
      const connectionInstance = new TYPE_MAP[options.type](playground, con.start, con.end, options);
      this.elementConnectionsMap[con.start.id].push(connectionInstance);
      this.elementConnectionsMap[con.end.id].push(connectionInstance);
      this.connections.push(connectionInstance);
    }
    for (const elem of elements) {
      this.connectableElements.push(
        new Connectable(
          playground,
          elem,
          {
            ...options,
            onDragging: () => {
              // all lines connected to this element should be reRendered
              this.elementConnectionsMap[elem.id].forEach(i => i.renderLine());
            },
          },
          {
            onCreatingLine: (targetElem: HTMLElement) => {
              this.addConnection({
                start: elem,
                end: targetElem,
              });
            },
          },
        ),
      );
    }
  }

  addElement(elem: HTMLElement): void {
    this.elementConnectionsMap[elem.id] = [];
    this.playground.appendChild(elem);
    this.connectableElements.push(
      new Connectable(
        this.playground,
        elem,
        {
          ...this.options,
          onDragging: () => {
            // all lines connected to this element should be reRendered
            this.elementConnectionsMap[elem.id].forEach(i => i.renderLine());
          },
        },
        {
          onCreatingLine: (targetElem: HTMLElement) => {
            this.addConnection({
              start: elem,
              end: targetElem,
            });
          },
        },
      ),
    );
  }
  addConnection(connection: DomConnection): void {
    const connectionInstance = new TYPE_MAP[this.options.type](
      this.playground,
      connection.start,
      connection.end,
      this.options,
    );
    this.elementConnectionsMap[connection.start.id].push(connectionInstance);
    this.elementConnectionsMap[connection.end.id].push(connectionInstance);
    this.connections.push(connectionInstance);
  }
}
