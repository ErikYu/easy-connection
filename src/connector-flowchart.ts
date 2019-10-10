import { ConnectorOptions, StartPositionEnum, DrawPath, DrawEndArrow } from './connector.model';
import { ConnectorBase } from './connector-base';
import { createPolyline, stateMachinePolyLine, createSvgElement } from './utils';
import { Connector } from './connector';

export class ConnectorFlowchart extends Connector implements DrawPath {
  constructor(playground: HTMLElement, startPoint: HTMLElement, endPoint: HTMLElement, options: ConnectorOptions) {
    super(playground, startPoint, endPoint, options);
  }

  drawPath() {
    const svgWidth: number = this.svgElement.width.baseVal.valueInSpecifiedUnits;
    const svgHeight: number = this.svgElement.height.baseVal.valueInSpecifiedUnits;
    let startCoordinate;
    let middleACoordinate;
    let middleBCoordinate;
    let endCoordinate;
    switch (this.startPosition) {
      case StartPositionEnum.verticalLeftTop:
        startCoordinate = this.svgParameters.leftTop;
        middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.horizontalLeftTop:
        startCoordinate = this.svgParameters.leftTop;
        middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.verticalRightTop:
        startCoordinate = this.svgParameters.rightTop;
        middleACoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = this.svgParameters.leftBottom;
        break;
      case StartPositionEnum.horizontalRightTop:
        startCoordinate = this.svgParameters.rightTop;
        middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        endCoordinate = this.svgParameters.leftBottom;
        break;
      case StartPositionEnum.verticalLeftBottom:
        startCoordinate = this.svgParameters.leftBottom;
        middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = this.svgParameters.rightTop;
        break;
      case StartPositionEnum.horizontalLeftBottom:
        startCoordinate = this.svgParameters.leftBottom;
        middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        endCoordinate = this.svgParameters.rightTop;
        break;
      case StartPositionEnum.verticalRightBottom:
        startCoordinate = this.svgParameters.rightBottom;
        middleACoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = this.svgParameters.leftTop;
        break;
      case StartPositionEnum.horizontalRightBottom:
        startCoordinate = this.svgParameters.rightBottom;
        middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        endCoordinate = this.svgParameters.leftTop;
    }

    const path = createPolyline(this.options);
    stateMachinePolyLine(path, startCoordinate, middleACoordinate, middleBCoordinate, endCoordinate);
    path.style.markerEnd = 'url(#markerEndArrow)';
    this.svgElement.appendChild(path);
  }
}
