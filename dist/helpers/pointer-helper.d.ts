import { StartPositionEnum } from '../connector.model';
declare function getConnectionPointCoordinate(startPosition: StartPositionEnum, startElement: HTMLElement, endElement: HTMLElement, pointerSize: number): {
    startLeft: string;
    startTop: string;
    endLeft: string;
    entTop: string;
};
export { getConnectionPointCoordinate };
