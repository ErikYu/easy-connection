import { Connector } from './connector';
import { DrawPath, StartPositionEnum } from './connector.model';
import { bezierPath, createPath } from './utils';

export class ConnectorBezier extends Connector implements DrawPath {
  drawPath(): void {
    const svgWidth: number = this.svgElement.width.baseVal.valueInSpecifiedUnits;
    const svgHeight: number = this.svgElement.height.baseVal.valueInSpecifiedUnits;
    let startCoordinate;
    let endCoordinate;
    let middleCoordinate;
    switch (this.startPosition) {
      case StartPositionEnum.horizontalLeftTop:
        middleCoordinate = [svgWidth / 2 + 10, svgHeight / 2 - 10];
        startCoordinate = this.svgParameters.leftTop;
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.verticalLeftTop:
        middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
        startCoordinate = this.svgParameters.leftTop;
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.horizontalLeftBottom:
      case StartPositionEnum.verticalLeftBottom:
        middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
        startCoordinate = this.svgParameters.leftBottom;
        endCoordinate = this.svgParameters.rightTop;
        break;
      case StartPositionEnum.horizontalRightTop:
      case StartPositionEnum.verticalRightTop:
        startCoordinate = this.svgParameters.rightTop;
        endCoordinate = this.svgParameters.leftBottom;
        middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
        break;
      case StartPositionEnum.horizontalRightBottom:
      case StartPositionEnum.verticalRightBottom:
      default:
        startCoordinate = this.svgParameters.rightBottom;
        endCoordinate = this.svgParameters.leftTop;
        middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
        break;
    }
    const path = createPath(this.options, {
      onmouseenter: this.onmouseenter,
      onmouseleave: this.onmouseleave,
      onmousedown: this.onmousedown,
    });
    bezierPath(path, startCoordinate, middleCoordinate, endCoordinate);
    console.log(startCoordinate, endCoordinate);
    path.style.markerEnd = 'url(#markerEndArrow)';
    this.svgElement.appendChild(path);
  }
}
