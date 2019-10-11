import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { addClassIfNotExist } from './utils';
import { prefixCls } from './constraints';
import { ConnectorPoint } from './connector-point';

/**
 * The root class of connection
 */
export abstract class Connector {
  options: ConnectorOptions;

  // The container of the zone, every thing is on it
  playground: HTMLElement;

  // The start HTMLElement of the connection
  startElement: HTMLElement;

  // The end HTMLElement of the connection
  endElement: HTMLElement;

  // The element that attached on the start/end element
  // usually, there will be 4 most on each element, one at each side
  startPointer: ConnectorPoint;
  endPointer: ConnectorPoint;

  // describes where the start element is related to the end element
  startPosition: StartPositionEnum;

  // the svg container, each connector has one svg
  svgElement: SVGSVGElement;
  svgParameters: SvgCanvasParameters;

  /**
   * @param playground start connector
   * @param startElement start connector
   * @param endElement end connector
   * @param options end connector
   */
  protected constructor(
    playground: HTMLElement,
    startElement: HTMLElement,
    endElement: HTMLElement,
    options: ConnectorOptions,
  ) {
    this.options = {
      pointerSize: 4,
      strokeWidth: 1,
      color: '#cccccc',
      arrowSize: 15,
      ...options,
    };
    this.startElement = startElement;
    this.endElement = endElement;
    addClassIfNotExist(startElement, `${prefixCls}-element`);
    addClassIfNotExist(endElement, `${prefixCls}-element`);
    this.playground = playground;

    // find the connect point that used in each element
    const res = this.createConnectPoint(this.startElement, this.endElement);
    this.startPointer = res.start;
    this.endPointer = res.end;
    addClassIfNotExist(this.startPointer, `${prefixCls}-pointer`);
    addClassIfNotExist(this.endPointer, `${prefixCls}-pointer`);

    // create a svg area between start and end
    this.svgElement = this.createSvgArea();
    this.drawPath();
    this.playground.appendChild(this.svgElement);
  }

  /**
   * Remove and render the svg part
   * TODO: more efficient way should be used here
   */
  public renderLine() {
    const res = this.createConnectPoint(this.startElement, this.endElement);
    this.startPointer = res.start;
    this.endPointer = res.end;
    addClassIfNotExist(this.startPointer, `${prefixCls}-pointer`);
    addClassIfNotExist(this.endPointer, `${prefixCls}-pointer`);
    this.playground.removeChild(this.svgElement);
    this.svgElement = this.createSvgArea();
    this.drawPath();
    this.playground.appendChild(this.svgElement);
  }

  /**
   * remove the whole svg part and the connect pointer
   */
  public dispose() {
    if (this.startElement && this.startPointer) {
      this.startElement.removeChild(this.startPointer);
    }
    if (this.endElement && this.endPointer) {
      this.endElement.removeChild(this.endPointer);
    }
    this.playground.removeChild(this.svgElement);
  }

  abstract drawPath(): void;

  private createConnectPoint(startElement: HTMLElement, endElement: HTMLElement) {
    if (!!this.startPointer) {
      startElement.removeChild(this.startPointer);
    }
    if (!!this.endPointer) {
      endElement.removeChild(this.endPointer);
    }
    // calc the absolute distance between two elements
    // should notice that the area depends on the endElement position related to the start element
    const startPointer = document.createElement('div');
    const endPointer = document.createElement('div');

    startPointer.style.position = 'absolute';
    endPointer.style.position = 'absolute';
    startPointer.style.backgroundColor = '#000000';
    endPointer.style.backgroundColor = '#000000';
    startPointer.style.width = `${this.options.pointerSize}px`;
    endPointer.style.width = `${this.options.pointerSize}px`;
    startPointer.style.height = `${this.options.pointerSize}px`;
    endPointer.style.height = `${this.options.pointerSize}px`;

    const xDistance = startElement.offsetLeft - endElement.offsetLeft;
    const yDistance = startElement.offsetTop - endElement.offsetTop;

    if (Math.abs(xDistance) >= Math.abs(yDistance)) {
      if (xDistance <= 0 && yDistance <= 0) {
        this.startPosition = StartPositionEnum.horizontalLeftTop;
      } else if (xDistance <= 0 && yDistance > 0) {
        this.startPosition = StartPositionEnum.horizontalLeftBottom;
      } else if (xDistance > 0 && yDistance <= 0) {
        this.startPosition = StartPositionEnum.horizontalRightTop;
      } else {
        this.startPosition = StartPositionEnum.horizontalRightBottom;
      }
    } else {
      if (xDistance <= 0 && yDistance <= 0) {
        this.startPosition = StartPositionEnum.verticalLeftTop;
      } else if (xDistance <= 0 && yDistance > 0) {
        this.startPosition = StartPositionEnum.verticalLeftBottom;
      } else if (xDistance > 0 && yDistance <= 0) {
        this.startPosition = StartPositionEnum.verticalRightTop;
      } else {
        this.startPosition = StartPositionEnum.verticalRightBottom;
      }
    }

    switch (this.startPosition) {
      case StartPositionEnum.horizontalLeftTop:
      case StartPositionEnum.horizontalLeftBottom:
        ((startPointer as unknown) as ConnectorPoint).position = 'right';
        ((endPointer as unknown) as ConnectorPoint).position = 'left';
        startPointer.style.left = `${startElement.getBoundingClientRect().width}px`;
        startPointer.style.top = `${startElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2}px`;
        endPointer.style.left = `${-this.options.pointerSize}px`;
        endPointer.style.top = `${endElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2}px`;
        break;
      case StartPositionEnum.horizontalRightBottom:
      case StartPositionEnum.horizontalRightTop:
        ((startPointer as unknown) as ConnectorPoint).position = 'left';
        ((endPointer as unknown) as ConnectorPoint).position = 'right';
        startPointer.style.left = `${-this.options.pointerSize}px`;
        startPointer.style.top = `${startElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2}px`;
        endPointer.style.left = `${endElement.getBoundingClientRect().width}px`;
        endPointer.style.top = `${endElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2}px`;
        break;
      case StartPositionEnum.verticalLeftTop:
      case StartPositionEnum.verticalRightTop:
        // startElem -> bottom
        // endElem   -> top
        ((startPointer as unknown) as ConnectorPoint).position = 'bottom';
        ((endPointer as unknown) as ConnectorPoint).position = 'top';
        startPointer.style.left = `${startElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2}px`;
        startPointer.style.top = `${startElement.getBoundingClientRect().height}px`;
        endPointer.style.left = `${endElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2}px`;
        endPointer.style.top = `${-this.options.pointerSize}px`;
        break;
      case StartPositionEnum.verticalLeftBottom:
      case StartPositionEnum.verticalRightBottom:
        // startElem -> top
        // endElem   -> bottom
        ((startPointer as unknown) as ConnectorPoint).position = 'top';
        ((endPointer as unknown) as ConnectorPoint).position = 'bottom';
        startPointer.style.left = `${startElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2}px`;
        startPointer.style.top = `-${this.options.pointerSize}px`;
        endPointer.style.left = `${endElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2}px`;
        endPointer.style.top = `${endElement.getBoundingClientRect().height}px`;
        break;
    }

    startElement.appendChild(startPointer);
    endElement.appendChild(endPointer);
    return {
      start: (startPointer as unknown) as ConnectorPoint,
      end: (endPointer as unknown) as ConnectorPoint,
    };
  }

  /**
   * Create a svg area used for the connection line between the start and end point
   * the area is rect
   */
  private createSvgArea() {
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.innerHTML = `
    <defs>
      <marker id="markerEndArrow" viewBox="0 0 30 30" refX="9" refY="3"  markerUnits="strokeWidth" markerWidth="30" markerHeight="30" orient="auto">
        <path style="fill:${this.options.color};opacity:1" d="M0,0 0,6 9,3z" />
      </marker>
    </defs>`;
    // set svg position
    // use position attribute to handle with ethe position
    svgElement.style.position = 'absolute';
    svgElement.style.zIndex = '999';
    svgElement.style.overflow = 'visible';

    const { offsetLeft: startOffsetLeft, offsetTop: startOffsetTop } = this.getTotalOffset(this.startPointer);
    const { offsetLeft: endOffsetLeft, offsetTop: endOffsetTop } = this.getTotalOffset(this.endPointer);

    switch (this.startPosition) {
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

    const width = Math.abs(startOffsetLeft - endOffsetLeft) + this.options.pointerSize;
    const height = Math.abs(startOffsetTop - endOffsetTop) + this.options.pointerSize;
    svgElement.setAttribute('width', `${width}px`);
    svgElement.setAttribute('height', `${height}px`);

    const svgWidth: number = svgElement.width.baseVal.valueInSpecifiedUnits;
    const svgHeight: number = svgElement.height.baseVal.valueInSpecifiedUnits;

    this.svgParameters = {
      height: svgHeight,
      width: svgWidth,
      leftTop: [this.options.pointerSize / 2, this.options.pointerSize / 2],
      leftBottom: [this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2],
      rightTop: [svgWidth - this.options.pointerSize / 2, this.options.pointerSize / 2],
      rightBottom: [svgWidth - this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2],
    };
    return svgElement;
  }

  getTotalOffset(pointer: ConnectorPoint) {
    const offsetLeft = pointer.offsetLeft + (pointer.offsetParent as HTMLElement).offsetLeft;
    const offsetTop = pointer.offsetTop + (pointer.offsetParent as HTMLElement).offsetTop;
    return {
      offsetLeft,
      offsetTop,
    };
  }
}
