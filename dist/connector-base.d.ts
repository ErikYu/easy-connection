import { ConnectorOptions, StartPositionEnum } from './connector.model';
import { Connector } from './connector';
export declare class ConnectorBase extends Connector {
    startPosition: StartPositionEnum;
    isModifyingConnector: boolean;
    constructor(playground: HTMLElement, startElement: HTMLElement, endElement: HTMLElement, options: ConnectorOptions);
    drawPath(): void;
}
