import { px2num, num2px } from './utils';
import { prefixCls } from './constraints';
import { DragOptions } from './connector.model';

interface Coordinate {
  xPos: number;
  yPos: number;
}

export class Draggable {
  elem: HTMLElement;
  isDragging = false;
  isCreatingNewConnector = false;
  dragOptions: DragOptions;

  startCoordinate: Coordinate;
  elemStartCoordinate: Coordinate;

  constructor(elem: HTMLElement, dragOptions: DragOptions) {
    this.elem = elem;
    this.dragOptions = dragOptions || { type: 'straight' };
    this.makeItDraggable();
    this.elemStartCoordinate = {
      xPos: px2num(getComputedStyle(this.elem).left),
      yPos: px2num(getComputedStyle(this.elem).top),
    };
  }

  private makeItDraggable() {
    this.elem.style.position = 'absolute';
    this.elem.onmousedown = (event: MouseEvent) => {
      this.startCoordinate = {
        xPos: event.clientX,
        yPos: event.clientY,
      };
      this.isDragging = true;

      document.onmousemove = (_event: MouseEvent) => {
        if (this.isDragging) {
          const _diffX = _event.clientX - this.startCoordinate.xPos;
          const _diffY = _event.clientY - this.startCoordinate.yPos;
          this.elem.style.left = num2px(this.elemStartCoordinate.xPos + _diffX);
          this.elem.style.top = num2px(this.elemStartCoordinate.yPos + _diffY);
          if (typeof this.dragOptions.onDragging === 'function') {
            this.dragOptions.onDragging();
          }
        }
      };

      document.onmouseup = () => {
        this.isDragging = false;
        this.startCoordinate = undefined;
        // new element position should be set
        this.elemStartCoordinate = {
          xPos: px2num(getComputedStyle(this.elem).left),
          yPos: px2num(getComputedStyle(this.elem).top),
        };

        document.onmousemove = () => {};
      };
    };
  }
}
