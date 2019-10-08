import { DomConnection, EasyConnectionOptions } from './connector.model';
import { ConnectorBase } from './connector-base';
import { Connectable } from './connectable';
interface ElementConnectionsMap {
    [a: string]: Array<ConnectorBase>;
}
export declare class EasyConnection {
    playground: HTMLElement;
    options: EasyConnectionOptions;
    connectableElements: Connectable[];
    connections: ConnectorBase[];
    elementConnectionsMap: ElementConnectionsMap;
    constructor(playground: HTMLElement, elements?: HTMLElement[], connections?: DomConnection[], options?: EasyConnectionOptions);
    addElement(elem: HTMLElement): void;
    addConnection(connection: DomConnection): void;
}
export {};
