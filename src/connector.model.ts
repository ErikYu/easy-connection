export type ConnectorPointPosition = 'top' | 'left' | 'right' | 'bottom';
export type ConnectionType = 'stateMachine' | 'straight';

type PromiseOr<T> = Promise<T> | T;

export interface ConnectorOptions {
  pointerSize?: number;
  strokeWidth?: number;
  color?: string;
  hoverColor?: string;
  arrowSize?: number;
}

export interface EasyConnectionOptions extends ConnectorOptions {
  type: ConnectionType;
}

export enum StartPositionEnum {
  horizontalLeftTop,
  horizontalLeftBottom,
  horizontalRightTop,
  horizontalRightBottom,
  verticalLeftTop,
  verticalLeftBottom,
  verticalRightTop,
  verticalRightBottom,
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
  // TODO
  onBeforeDrag?: () => PromiseOr<boolean>;

  onDragging?: () => void;
}

export interface DomConnection {
  start: HTMLElement;
  end: HTMLElement;
}
