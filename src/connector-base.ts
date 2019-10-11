import { ConnectorOptions, StartPositionEnum, SvgCanvasParameters } from './connector.model';
import { prefixCls } from './constraints';
import { ConnectorPoint } from './connector-point';
import { addClassIfNotExist, createPolyline, removeClass, setStyle, straightPolyline } from './utils';
import { Connector } from './connector';

export class ConnectorBase extends Connector {
  startPosition: StartPositionEnum;

  // whether the user is moving the arrow
  isModifyingConnector = false;
  helperPointer: HTMLElement;

  isMoving = false;

  constructor(playground: HTMLElement, startElement: HTMLElement, endElement: HTMLElement, options: ConnectorOptions) {
    super(playground, startElement, endElement, options);
  }

  drawPath() {
    let startCoordinate;
    let endCoordinate;
    switch (this.startPosition) {
      case StartPositionEnum.verticalLeftTop:
      case StartPositionEnum.horizontalLeftTop:
        // draw a line from leftTop to rightBottom
        startCoordinate = this.svgParameters.leftTop;
        endCoordinate = this.svgParameters.rightBottom;
        break;
      case StartPositionEnum.verticalLeftBottom:
      case StartPositionEnum.horizontalLeftBottom:
        startCoordinate = this.svgParameters.leftBottom;
        endCoordinate = this.svgParameters.rightTop;
        break;
      case StartPositionEnum.verticalRightTop:
      case StartPositionEnum.horizontalRightTop:
        startCoordinate = this.svgParameters.rightTop;
        endCoordinate = this.svgParameters.leftBottom;
        break;
      case StartPositionEnum.verticalRightBottom:
      case StartPositionEnum.horizontalRightBottom:
        startCoordinate = this.svgParameters.rightBottom;
        endCoordinate = this.svgParameters.leftTop;
        break;
    }
    const path = createPolyline(this.options, {
      onmousedown: (event: MouseEvent) => {
        const isOnArrow = this.checkIfMouseEventOnArrow(event);
        if (isOnArrow) {
          // this connection should be removed and temp lines should be created
          // build a helper pointer and connect it with the helper point
          this.isMoving = true;
          const helperPointOffset = 3;
          const x: number = event.pageX - this.playground.offsetLeft;
          const y: number = event.pageY - this.playground.offsetTop;
          this.helperPointer = document.createElement('div');
          setStyle(this.helperPointer, {
            width: '0px',
            height: '0px',
            position: 'absolute',
            left: `${x - helperPointOffset}px`,
            top: `${y - helperPointOffset}px`,
          });
          this.playground.appendChild(this.helperPointer);
          this.endElement = this.helperPointer;
          this.endPointer = undefined;
          // reconnect
          document.onmousemove = (_event: MouseEvent) => {
            if (this.isMoving) {
              this.helperPointer.style.left = `${_event.pageX - this.playground.offsetLeft - helperPointOffset}px`;
              this.helperPointer.style.top = `${_event.pageY - this.playground.offsetTop - helperPointOffset}px`;
              this.renderLine();
              const elementMouseIsOver = document.elementsFromPoint(_event.clientX, _event.clientY);
              const targetElements = elementMouseIsOver.filter(i => i.classList.contains('cnt-element'));

              const allElements = this.playground.getElementsByClassName(`${prefixCls}-element`);
              if (targetElements.length > 0) {
                addClassIfNotExist(targetElements[0], `${prefixCls}-will`);
                // others should be deleted
                removeClass(Array.from(allElements).filter(i => i !== targetElements[0]), `${prefixCls}-will`);
              } else {
                removeClass(Array.from(allElements), `${prefixCls}-will`);
              }
            }
          };

          // TODO: many optimize
          document.onmouseup = (_upEvent: MouseEvent) => {
            this.isMoving = false;
            const elementMouseIsOver = document.elementsFromPoint(_upEvent.clientX, _upEvent.clientY);
            const targetElements = elementMouseIsOver.filter(i => i.classList.contains('cnt-element'));
            if (targetElements.length > 0) {
              this.endElement = targetElements[0] as HTMLElement;
              this.endPointer = undefined;
              this.renderLine();
              removeClass(targetElements[0], `${prefixCls}-will`);
            } else {
              this.dispose();
            }
            if (this.helperPointer) {
              this.playground.removeChild(this.helperPointer);
              this.helperPointer = undefined;
            }
          };
        }
      },
      onmouseenter: this.onmouseenter,
      onmouseleave: this.onmouseleave,
    });
    straightPolyline(path, startCoordinate, endCoordinate);
    path.style.markerEnd = 'url(#markerEndArrow)';
    this.svgElement.appendChild(path);
  }

  // onMouseDownPolyline = ;

  private checkIfMouseEventOnArrow(event: MouseEvent): boolean {
    const isNear = (a, b) => Math.abs(a - b) < 50;
    const { offsetX, offsetY } = event;
    const mapping = {
      [StartPositionEnum.horizontalLeftTop]: 'rightBottom',
      [StartPositionEnum.verticalLeftTop]: 'rightBottom',
    };
    const [arrowX, arrowY] = this.svgParameters[mapping[this.startPosition]];
    return isNear(offsetX, arrowX) && isNear(offsetY, arrowY);
  }
}
