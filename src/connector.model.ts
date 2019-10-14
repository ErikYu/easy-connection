// The preset position of the ConnectorPointer
// `vertical` contains `bottom` & `top`
// `horizontal` contains `left` & `right`
// When `auto`, the position will change according to the relative position
// The default value is `auto`
export type ConnectorPointerPosition = 'vertical' | 'horizontal' | 'auto';
export type ConnectionType = 'stateMachine' | 'straight';

type PromiseOr<T> = Promise<T> | T;

export interface ConnectorOptions {
  pointerSize?: number;
  strokeWidth?: number;
  color?: string;

  // When mouseover the connection, the line's color changes into `hoverColor`
  hoverColor?: string;
  arrowSize?: number;

  // The connect-pointer's position
  pointerPosition?: ConnectorPointerPosition;
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
