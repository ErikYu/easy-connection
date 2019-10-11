import { ConnectorOptions } from './connector.model';
interface IndexedObject {
    [a: string]: string;
}
interface PolylineEvents {
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;
    onmousedown?: (event: MouseEvent) => void;
}
declare type svgElement = 'path' | 'polyline';
export declare function createSvgElement(label: svgElement, styleMap: IndexedObject): SVGPathElement | SVGPolylineElement;
export declare function createPolyline(options: ConnectorOptions, { onmouseenter, onmouseleave, onmousedown }: PolylineEvents): SVGPolylineElement;
export declare function straightPolyline(polyLine: SVGPolylineElement, start: number[], end: number[]): void;
export declare function stateMachinePolyLine(polyLine: SVGPolylineElement, start: number[], midA: number[], midB: number[], end: number[]): void;
export declare function px2num(pxVal: string): number;
export declare function num2px(numVal: number): string;
/**
 * add class names for a html element, when the element already has the className, skip
 * @param elem target html element
 * @param cls classNames or className
 */
export declare function addClassIfNotExist(elem: Element, cls: string[] | string): void;
export declare function removeClass(elem: Element | Element[], cls: string[] | string): void;
/**
 * Check if two HTML elements is Overlapping one by one
 * @param elemA first element
 * @param elemB second element
 */
export declare function ifOverlapping(elemA: any, elemB: any): boolean;
export declare function setStyle(elem: HTMLElement, style: Partial<CSSStyleDeclaration>): void;
export {};
