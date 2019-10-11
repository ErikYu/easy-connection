import { ConnectorOptions, DrawPath } from './connector.model';
import { Connector } from './connector';
export declare class ConnectorFlowchart extends Connector implements DrawPath {
    constructor(playground: HTMLElement, startPoint: HTMLElement, endPoint: HTMLElement, options: ConnectorOptions);
    drawPath(): void;
}
