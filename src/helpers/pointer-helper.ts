import { StartPositionEnum } from '../connector.model';

function getConnectionPointCoordinate(
  startPosition: StartPositionEnum,
  startElement: HTMLElement,
  endElement: HTMLElement,
  pointerSize: number,
) {
  switch (startPosition) {
    case StartPositionEnum.horizontalLeftTop:
    case StartPositionEnum.horizontalLeftBottom:
      return {
        startLeft: `${startElement.getBoundingClientRect().width}px`,
        startTop: `${startElement.getBoundingClientRect().height / 2 - pointerSize / 2}px`,
        endLeft: `${-pointerSize}px`,
        entTop: `${endElement.getBoundingClientRect().height / 2 - pointerSize / 2}px`,
      };
    case StartPositionEnum.horizontalRightBottom:
    case StartPositionEnum.horizontalRightTop:
      return {
        startLeft: `${-pointerSize}px`,
        startTop: `${startElement.getBoundingClientRect().height / 2 - pointerSize / 2}px`,
        endLeft: `${endElement.getBoundingClientRect().width}px`,
        entTop: `${endElement.getBoundingClientRect().height / 2 - pointerSize / 2}px`,
      };
    case StartPositionEnum.verticalLeftTop:
    case StartPositionEnum.verticalRightTop:
      // startElem -> bottom
      // endElem   -> top
      return {
        startLeft: `${startElement.getBoundingClientRect().width / 2 - pointerSize / 2}px`,
        startTop: `${startElement.getBoundingClientRect().height}px`,
        endLeft: `${endElement.getBoundingClientRect().width / 2 - pointerSize / 2}px`,
        entTop: `${-pointerSize}px`,
      };
    case StartPositionEnum.verticalLeftBottom:
    case StartPositionEnum.verticalRightBottom:
      // startElem -> top
      // endElem   -> bottom
      return {
        startLeft: `${startElement.getBoundingClientRect().width / 2 - pointerSize / 2}px`,
        startTop: `-${pointerSize}px`,
        endLeft: `${endElement.getBoundingClientRect().width / 2 - pointerSize / 2}px`,
        entTop: `${endElement.getBoundingClientRect().height}px`,
      };
  }
}

export { getConnectionPointCoordinate };
