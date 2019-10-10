import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { prefixCls } from './constraints';
import { ConnectorPoint } from './connector-point';
import { addClassIfNotExist, createPolyline, setStyle, straightPolyline } from './utils';
import { Connector } from './connector';

export class ConnectorBase extends Connector {
  startPosition: StartPositionEnum;

  // whether the user is moving the arrow
  isModifyingConnector = false;
  helperPointer: HTMLElement;

  constructor(playground: HTMLElement, startElement: HTMLElement, endElement: HTMLElement, options: ConnectorOptions) {
    super(playground, startElement, endElement, options);
  }

  drawPath() {
    let startCoordinate;
    let endCoordinate;
    switch (this.startPosition) {
      case StartPositionEnum.verticalLeftTop:
      case StartPositionEnum.horizontalLeftTop:
        // draw a line from leftTop to rightBottom
        startCoordinate = this.svgParameters.leftTop;
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.verticalLeftBottom:
      case StartPositionEnum.horizontalLeftBottom:
        startCoordinate = this.svgParameters.leftBottom;
        endCoordinate = this.svgParameters.rightTop;
        break;
      case StartPositionEnum.verticalRightTop:
      case StartPositionEnum.horizontalRightTop:
        startCoordinate = this.svgParameters.rightTop;
        endCoordinate = this.svgParameters.leftBottom;
        break;
      case StartPositionEnum.verticalRightBottom:
      case StartPositionEnum.horizontalRightBottom:
        startCoordinate = this.svgParameters.rightBottom;
        endCoordinate = this.svgParameters.leftTop;
        break;
    }
    const path = createPolyline(this.options, this.onClickPolyline, {
      onmousedown: this.onMouseDownPolyline,
    });
    straightPolyline(path, startCoordinate, endCoordinate);
    path.style.markerEnd = 'url(#markerEndArrow)';
    this.svgElement.appendChild(path);
  }

  onMouseDownPolyline = (event: MouseEvent) => {
    const isOnArrow = this.checkIfMouseEventOnArrow(event);
    console.log(isOnArrow, '0o-o0o0o0');
    if (isOnArrow) {
      // this connection should be removed and temp lines should be created
      this.dispose();
      this.isModifyingConnector = true;
    }

    // tslint:disable-next-line: Unnecessary semicolon
  };

  // TODO
  onClickPolyline = (event: MouseEvent) => {
    const isOnArrow = this.checkIfMouseEventOnArrow(event);
    if (isOnArrow) {
      // for events on arrow
    } else {
      // for events on line/polyline
    }

    // tslint:disable-next-line: Unnecessary semicolon
  };

  private checkIfMouseEventOnArrow(event: MouseEvent): boolean {
    const isNear = (a, b) => Math.abs(a - b) < 30;
    const { offsetX, offsetY } = event;
    const mapping = {
      [StartPositionEnum.horizontalLeftTop]: 'rightBottom',
      [StartPositionEnum.verticalLeftTop]: 'rightBottom',
    };
    const [arrowX, arrowY] = this.svgParameters[mapping[this.startPosition]];
    return isNear(offsetX, arrowX) && isNear(offsetY, arrowY);
  }
}
