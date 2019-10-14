import { ConnectorPoint } from '../connector-point';
import { StartPositionEnum } from '../connector.model';

/**
 * Create a svg area used for the connection line between the start and end point
 * the area is rect
 */
function createSvgArea(
  startPosition: StartPositionEnum,
  startPointer: ConnectorPoint,
  endPointer: ConnectorPoint,
  options,
) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.innerHTML = `
    <defs>
      <marker id="markerEndArrow" viewBox="0 0 30 30" refX="9" refY="3"  markerUnits="strokeWidth" markerWidth="30" markerHeight="30" orient="auto">
        <path style="fill:${options.color};opacity:1" d="M0,0 0,6 9,3z" />
      </marker>
    </defs>`;
  // set svg position
  // use position attribute to handle with ethe position
  svgElement.style.position = 'absolute';
  svgElement.style.zIndex = '1';
  svgElement.style.overflow = 'visible';
  svgElement.setAttribute('pointer-events', 'none');
  const { offsetLeft: startOffsetLeft, offsetTop: startOffsetTop } = _getTotalOffset(startPointer);
  const { offsetLeft: endOffsetLeft, offsetTop: endOffsetTop } = _getTotalOffset(endPointer);

  switch (startPosition) {
    case StartPositionEnum.horizontalLeftTop:
    case StartPositionEnum.verticalLeftTop:
      svgElement.style.left = `${startOffsetLeft}px`;
      svgElement.style.top = `${startOffsetTop}px`;
      break;
    case StartPositionEnum.horizontalRightTop:
    case StartPositionEnum.verticalRightTop:
      svgElement.style.left = `${endOffsetLeft}px`;
      svgElement.style.top = `${startOffsetTop}px`;
      break;
    case StartPositionEnum.horizontalLeftBottom:
    case StartPositionEnum.verticalLeftBottom:
      svgElement.style.left = `${startOffsetLeft}px`;
      svgElement.style.top = `${endOffsetTop}px`;
      break;
    case StartPositionEnum.horizontalRightBottom:
    case StartPositionEnum.verticalRightBottom:
      svgElement.style.left = `${endOffsetLeft}px`;
      svgElement.style.top = `${endOffsetTop}px`;
      break;
  }

  const width = Math.abs(startOffsetLeft - endOffsetLeft) + options.pointerSize;
  const height = Math.abs(startOffsetTop - endOffsetTop) + options.pointerSize;
  svgElement.setAttribute('width', `${width}px`);
  svgElement.setAttribute('height', `${height}px`);
  return svgElement;
}

function _getTotalOffset(pointer: ConnectorPoint) {
  const offsetLeft = pointer.offsetLeft + (pointer.offsetParent as HTMLElement).offsetLeft;
  const offsetTop = pointer.offsetTop + (pointer.offsetParent as HTMLElement).offsetTop;
  return {
    offsetLeft,
    offsetTop,
  };
}

export { createSvgArea };
