import { ConnectorOptions } from './connector.model';
interface IndexedObject {
    [a: string]: string;
}
declare type svgElement = 'path' | 'polyline';
export declare function createSvgElement(label: svgElement, styleMap: IndexedObject): SVGPathElement | SVGPolylineElement;
export declare function createPolyline(options: ConnectorOptions): SVGPolylineElement;
export declare function straightPolyline(polyLine: SVGPolylineElement, start: number[], end: number[]): void;
export declare function stateMachinePolyLine(polyLine: SVGPolylineElement, start: number[], midA: number[], midB: number[], end: number[]): void;
export declare function px2num(pxVal: string): number;
export declare function num2px(numVal: number): string;
/**
 * add class names for a html element, when the element already has the className, skip
 * @param elem target html element
 * @param cls classNames or className
 */
export declare function addClassIfNotExist(elem: HTMLElement, cls: string[] | string): void;
export declare function ifOverlapping(elemA: any, elemB: any): boolean;
export {};
