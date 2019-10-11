import { ConnectorOptions } from './connector.model';

interface IndexedObject {
  [a: string]: string;
}

interface PolylineEvents {
  onmouseenter?: (event: MouseEvent) => void;
  onmouseleave?: (event: MouseEvent) => void;
  onmousedown?: (event: MouseEvent) => void;
}

type svgElement = 'path' | 'polyline';

export function createSvgElement(label: svgElement, styleMap: IndexedObject) {
  const elem = document.createElementNS('http://www.w3.org/2000/svg', label);
  Object.keys(styleMap).forEach(key => {
    elem.setAttributeNS(null, key, styleMap[key]);
  });
  return elem;
}

export function createPolyline(
  options: ConnectorOptions,
  { onmouseenter, onmouseleave, onmousedown }: PolylineEvents,
): SVGPolylineElement {
  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttributeNS(null, 'fill', 'none');
  polyline.setAttributeNS(null, 'stroke', `${options.color}`);
  polyline.setAttributeNS(null, 'stroke-width', `${options.strokeWidth}`);
  polyline.onmouseenter = onmouseenter;
  polyline.onmouseleave = onmouseleave;
  polyline.onmousedown = onmousedown;
  return polyline;
}

export function straightPolyline(polyLine: SVGPolylineElement, start: number[], end: number[]) {
  polyLine.setAttributeNS(null, 'points', `${start.toString()} ${end.toString()}`);
}

export function stateMachinePolyLine(
  polyLine: SVGPolylineElement,
  start: number[],
  midA: number[],
  midB: number[],
  end: number[],
) {
  polyLine.setAttributeNS(
    null,
    'points',
    `${start.toString()} ${midA.toString()} ${midB.toString()} ${end.toString()}`,
  );
}

export function px2num(pxVal: string): number {
  return +pxVal.slice(0, pxVal.length - 2);
}

export function num2px(numVal: number): string {
  return `${numVal}px`;
}

/**
 * add class names for a html element, when the element already has the className, skip
 * @param elem target html element
 * @param cls classNames or className
 */
export function addClassIfNotExist(elem: Element, cls: string[] | string): void {
  const classes = Array.isArray(cls) ? cls : [cls];
  for (const c of classes) {
    if (!elem.classList.contains(c)) {
      elem.classList.add(c);
    }
  }
}

export function removeClass(elem: Element | Element[], cls: string[] | string): void {
  const classes = Array.isArray(cls) ? cls : [cls];
  const elements = Array.isArray(elem) ? elem : [elem];
  for (const e of elements) {
    for (const c of classes) {
      e.classList.remove(c);
    }
  }
}

/**
 * Check if two HTML elements is Overlapping one by one
 * @param elemA first element
 * @param elemB second element
 */
export function ifOverlapping(elemA, elemB): boolean {
  const rect1 = elemA.getBoundingClientRect();
  const rect2 = elemB.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

export function setStyle(elem: HTMLElement, style: Partial<CSSStyleDeclaration>) {
  Object.keys(style).forEach(key => {
    elem.style[key] = style[key];
  });
}
