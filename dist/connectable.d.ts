import { Draggable } from './draggable';
import { DragOptions } from './connector.model';
export declare class Connectable extends Draggable {
    playground: HTMLElement;
    nativeElement: HTMLElement;
    helperPointer: HTMLElement;
    onCreatingLine: any;
    constructor(playground: HTMLElement, elem: HTMLElement, dragOptions: DragOptions, { onCreatingLine }: {
        onCreatingLine: any;
    });
    private createAnchor;
}
