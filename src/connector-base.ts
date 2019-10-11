import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { prefixCls } from './constraints';
import { ConnectorPoint } from './connector-point';
import { addClassIfNotExist, createPolyline, removeClass, setStyle, straightPolyline } from './utils';
import { Connector } from './connector';

export class ConnectorBase extends Connector {
  startPosition: StartPositionEnum;

  // whether the user is moving the arrow
  isModifyingConnector = false;

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
    const path = createPolyline(this.options, {
      onmouseenter: this.onmouseenter,
      onmouseleave: this.onmouseleave,
      onmousedown: this.onmousedown,
    });
    straightPolyline(path, startCoordinate, endCoordinate);
    path.style.markerEnd = 'url(#markerEndArrow)';
    this.svgElement.appendChild(path);
  }
}
