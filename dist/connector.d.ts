import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { ConnectorPoint } from './connector-point';
/**
 * The root class of connection
 */
export declare abstract class Connector {
    options: ConnectorOptions;
    playground: HTMLElement;
    startElement: HTMLElement;
    endElement: HTMLElement;
    startPointer: ConnectorPoint;
    endPointer: ConnectorPoint;
    startPosition: StartPositionEnum;
    svgElement: SVGSVGElement;
    svgParameters: SvgCanvasParameters;
    isMoving: boolean;
    helperPointer: HTMLElement;
    /**
     * @param playground start connector
     * @param startElement start connector
     * @param endElement end connector
     * @param options end connector
     */
    protected constructor(playground: HTMLElement, startElement: HTMLElement, endElement: HTMLElement, options: ConnectorOptions);
    /**
     * Remove and render the svg part
     * TODO: more efficient way should be used here
     */
    renderLine(): void;
    /**
     * remove the whole svg part and the connect pointer
     */
    dispose(): void;
    abstract drawPath(): void;
    private createConnectPoint;
    /**
     * Create a svg area used for the connection line between the start and end point
     * the area is rect
     */
    private createSvgArea;
    getTotalOffset(pointer: ConnectorPoint): {
        offsetLeft: number;
        offsetTop: number;
    };
    private checkIfMouseEventOnArrow;
    /**
     * When mouse move into the connection, the hover color shall be changed
     * @param event: MouseEvent
     */
    onmouseenter: (event: MouseEvent) => void;
    /**
     * When mouse move leave the connection, the hover color shall be changed
     * @param event: MouseEvent
     */
    onmouseleave: (event: MouseEvent) => void;
    /**
     * While mousedown on then endArrow, the connection should start moving
     * We can modify the connection to other elements or just destroy the element
     * @param event: MouseEvent
     */
    onmousedown: (event: MouseEvent) => void;
}
