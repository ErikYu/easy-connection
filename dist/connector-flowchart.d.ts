import { ConnectorOptions, DrawPath, DrawEndArrow } from './connector.model';
import { ConnectorBase } from './connector-base';
export declare class ConnectorFlowchart extends ConnectorBase implements DrawPath, DrawEndArrow {
    constructor(playground: HTMLElement, startPoint: HTMLElement, endPoint: HTMLElement, options: ConnectorOptions);
    drawEndArrow(): void;
    drawPath(): void;
}
