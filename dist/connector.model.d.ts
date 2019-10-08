export declare type ConnectorPointPosition = 'top' | 'left' | 'right' | 'bottom';
export declare type ConnectionType = 'stateMachine' | 'straight';
declare type PromiseOr<T> = Promise<T> | T;
export interface ConnectorOptions {
    pointerSize?: number;
    strokeWidth?: number;
    color?: string;
    arrowSize?: number;
}
export interface EasyConnectionOptions extends ConnectorOptions {
    type: ConnectionType;
}
export declare enum StartPositionEnum {
    horizontalLeftTop = 0,
    horizontalLeftBottom = 1,
    horizontalRightTop = 2,
    horizontalRightBottom = 3,
    verticalLeftTop = 4,
    verticalLeftBottom = 5,
    verticalRightTop = 6,
    verticalRightBottom = 7
}
export interface SvgCanvasParameters {
    height: number;
    width: number;
    leftTop: number[];
    leftBottom: number[];
    rightTop: number[];
    rightBottom: number[];
}
export interface DrawPath {
    drawPath: () => void;
}
export interface DrawEndArrow {
    drawEndArrow: () => void;
}
export interface DragOptions extends ConnectorOptions {
    type: ConnectionType;
    onBeforeDrag?: () => PromiseOr<boolean>;
    onDragging?: () => void;
}
export interface DomConnection {
    start: HTMLElement;
    end: HTMLElement;
}
export {};
