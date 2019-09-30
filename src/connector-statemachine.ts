import { ConnectorOptions, StartPositionEnum, DrawPath, DrawEndArrow } from './connector.model';
import { ConnectorBase } from './connector-base';
import { createPolyline, stateMachinePolyLine, createSvgElement } from './utils';

export class ConnectorStateMachine extends ConnectorBase implements DrawPath, DrawEndArrow {
  constructor(playground: HTMLElement, startPoint: HTMLElement, endPoint: HTMLElement, options: ConnectorOptions) {
    super(playground, startPoint, endPoint, options);
  }

  drawEndArrow() {
    // half of the arrow's deg, described in radius value
    const arrowDeg = (45 / 360) * Math.PI;

    const { leftTop, leftBottom, rightTop, rightBottom } = this.svgParameters;
    const { arrowSize, color } = this.options;

    const arrowPath = createSvgElement('path', {
      fill: color,
    });
    const verticalHandler = (positionValue, factor: 1 | -1) => {
      arrowPath.setAttributeNS(
        null,
        'd',
        `
          M${positionValue[0]} ${positionValue[1]}
          L${positionValue[0] + factor * arrowSize * Math.sin(arrowDeg)}
           ${positionValue[1] - factor * arrowSize * Math.cos(arrowDeg)}
          L${positionValue[0]} ${positionValue[1] - factor * arrowSize * 0.6}
          L${positionValue[0] - factor * arrowSize * Math.sin(arrowDeg)}
           ${positionValue[1] - factor * arrowSize * Math.cos(arrowDeg)}
          Z
        `,
      );
    };
    const horizontalHandler = (positionValue, factor: 1 | -1) => {
      arrowPath.setAttributeNS(
        null,
        'd',
        `
          M${positionValue[0]} ${positionValue[1]}
          L${positionValue[0] - factor * arrowSize * Math.cos(arrowDeg)} ${positionValue[1] +
          factor * arrowSize * Math.sin(arrowDeg)}
          L${positionValue[0] - factor * arrowSize * 0.6} ${positionValue[1]}
          L${positionValue[0] - factor * arrowSize * Math.cos(arrowDeg)} ${positionValue[1] -
          factor * arrowSize * Math.sin(arrowDeg)}
          Z
        `,
      );
    };

    switch (this.startPosition) {
      case StartPositionEnum.verticalLeftTop:
        verticalHandler(rightBottom, 1);
        break;
      case StartPositionEnum.horizontalLeftTop:
        horizontalHandler(rightBottom, 1);
        break;
      case StartPositionEnum.verticalRightTop:
        verticalHandler(leftBottom, 1);
        break;
      case StartPositionEnum.horizontalRightTop:
        horizontalHandler(leftBottom, -1);
        break;
      case StartPositionEnum.verticalLeftBottom:
        verticalHandler(rightTop, -1);
        break;
      case StartPositionEnum.horizontalLeftBottom:
        horizontalHandler(rightTop, 1);
        break;
      case StartPositionEnum.verticalRightBottom:
        verticalHandler(leftTop, -1);
        break;
      case StartPositionEnum.horizontalRightBottom:
        horizontalHandler(leftTop, -1);
        break;
    }
    this.svgElement.appendChild(arrowPath);
  }

  drawPath() {
    const svgWidth: number = this.svgElement.width.baseVal.valueInSpecifiedUnits;
    const svgHeight: number = this.svgElement.height.baseVal.valueInSpecifiedUnits;
    let startCoordinate;
    let middleACoordinate;
    let middleBCoordinate;
    let endCoordinate;

    const _leftTop = [this.options.pointerSize / 2, this.options.pointerSize / 2];
    const _leftBottom = [this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2];
    const _rightTop = [svgWidth - this.options.pointerSize, this.options.pointerSize / 2];
    const _rightBottom = [svgWidth - this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2];

    switch (this.startPosition) {
      case StartPositionEnum.verticalLeftTop:
        startCoordinate = _leftTop;
        middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = _rightBottom;
        break;
      case StartPositionEnum.horizontalLeftTop:
        startCoordinate = _leftTop;
        middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        endCoordinate = _rightBottom;
        break;
      case StartPositionEnum.verticalRightTop:
        startCoordinate = _rightTop;
        middleACoordinate = [svgWidth - this.options.pointerSize, svgHeight / 2];
        middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = _leftBottom;
        break;
      case StartPositionEnum.horizontalRightTop:
        startCoordinate = _rightTop;
        middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        endCoordinate = _leftBottom;
        break;
      case StartPositionEnum.verticalLeftBottom:
        startCoordinate = _leftBottom;
        middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [svgWidth - this.options.pointerSize, svgHeight / 2];
        endCoordinate = _rightTop;
        break;
      case StartPositionEnum.horizontalLeftBottom:
        startCoordinate = _leftBottom;
        middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        endCoordinate = _rightTop;
        break;
      case StartPositionEnum.verticalRightBottom:
        startCoordinate = _rightBottom;
        middleACoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
        middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
        endCoordinate = _leftTop;
        break;
      case StartPositionEnum.horizontalRightBottom:
        startCoordinate = _rightBottom;
        middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
        middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
        endCoordinate = _leftTop;
    }

    const path = createPolyline(this.options);
    stateMachinePolyLine(path, startCoordinate, middleACoordinate, middleBCoordinate, endCoordinate);
    this.svgElement.appendChild(path);
  }
}
