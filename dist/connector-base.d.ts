import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { ConnectorPoint } from './connector-point';
export declare class ConnectorBase {
    options: ConnectorOptions;
    playground: HTMLElement;
    startPointer: ConnectorPoint;
    endPointer: ConnectorPoint;
    svgElement: SVGSVGElement;
    startElement: HTMLElement;
    endElement: HTMLElement;
    startPosition: StartPositionEnum;
    svgParameters: SvgCanvasParameters;
    /**
     * Remove and render the svg part
     * TODO: more efficient way should be used here
     */
    renderLine(): void;
    /**
     * remove the whole svg part and the connect pointer
     */
    dispose(): void;
    /**
     * @param playground start connector
     * @param startElement start connector
     * @param endElement end connector
     * @param options end connector
     */
    constructor(playground: HTMLElement, startElement: HTMLElement, endElement: HTMLElement, options: ConnectorOptions);
    private createConnectPoint;
    getTotalOffset(pointer: ConnectorPoint): {
        offsetLeft: number;
        offsetTop: number;
    };
    /**
     * Create a svg area used for the connection line between the start and end point
     * the area is rect
     */
    private createSvgArea;
    /**
     * draw a arrow in the end point position
     */
    drawEndArrow(): void;
    drawPath(): void;
}
