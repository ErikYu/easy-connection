import { ConnectorPointerPosition, StartPositionEnum } from '../connector.model';

function _horizontalHandler(xDistance: number, yDistance: number): StartPositionEnum {
  if (xDistance <= 0 && yDistance <= 0) {
    return StartPositionEnum.horizontalLeftTop;
  } else if (xDistance <= 0 && yDistance > 0) {
    return StartPositionEnum.horizontalLeftBottom;
  } else if (xDistance > 0 && yDistance <= 0) {
    return StartPositionEnum.horizontalRightTop;
  } else {
    return StartPositionEnum.horizontalRightBottom;
  }
}

function _verticalHandler(xDistance: number, yDistance: number): StartPositionEnum {
  if (xDistance <= 0 && yDistance <= 0) {
    return StartPositionEnum.verticalLeftTop;
  } else if (xDistance <= 0 && yDistance > 0) {
    return StartPositionEnum.verticalLeftBottom;
  } else if (xDistance > 0 && yDistance <= 0) {
    return StartPositionEnum.verticalRightTop;
  } else {
    return StartPositionEnum.verticalRightBottom;
  }
}

function getStartPosition(
  xDistance: number,
  yDistance: number,
  pointerPosition: ConnectorPointerPosition,
): StartPositionEnum {
  switch (pointerPosition) {
    case 'auto':
      return Math.abs(xDistance) >= Math.abs(yDistance)
        ? _horizontalHandler(xDistance, yDistance)
        : _verticalHandler(xDistance, yDistance);
    case 'horizontal':
      return _horizontalHandler(xDistance, yDistance);
    case 'vertical':
    default:
      return _verticalHandler(xDistance, yDistance);
  }
}

export { getStartPosition };
