import { DragOptions } from './connector.model';
interface Coordinate {
    xPos: number;
    yPos: number;
}
export declare class Draggable {
    elem: HTMLElement;
    isDragging: boolean;
    isCreatingNewConnector: boolean;
    dragOptions: DragOptions;
    startCoordinate: Coordinate;
    elemStartCoordinate: Coordinate;
    constructor(elem: HTMLElement, dragOptions: DragOptions);
    private makeItDraggable;
}
export {};
