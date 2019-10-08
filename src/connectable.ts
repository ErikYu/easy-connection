import { Draggable } from './draggable';
import { DragOptions } from './connector.model';
import { prefixCls } from './constraints';
import { ConnectorBase } from './connector-base';
import { ConnectorFlowchart } from './connector-flowchart';
import { addClassIfNotExist, ifOverlapping } from './utils';

const TYPE_MAP = {
  undefined: ConnectorBase,
  straight: ConnectorBase,
  flowchart: ConnectorFlowchart,
};

export class Connectable extends Draggable {
  playground: HTMLElement;
  nativeElement: HTMLElement;
  helperPointer: HTMLElement;
  onCreatingLine;
  constructor(playground: HTMLElement, elem: HTMLElement, dragOptions: DragOptions, { onCreatingLine }) {
    super(elem, dragOptions);
    this.nativeElement = elem;
    this.playground = playground;
    this.onCreatingLine = onCreatingLine;
    addClassIfNotExist(elem, `${prefixCls}-element`);
    this.createAnchor();
  }

  private createAnchor() {
    const anchor: HTMLElement = document.createElement('div');
    anchor.classList.add(`${prefixCls}-anchor`);
    anchor.style.width = '10px';
    anchor.style.height = '10px';
    anchor.style.backgroundColor = 'red';
    anchor.style.position = 'absolute';
    anchor.style.left = '15px';
    anchor.style.top = '15px';

    anchor.onmousedown = (event: MouseEvent) => {
      event.stopPropagation();
      this.isCreatingNewConnector = true;

      // create a overlay entPointer at the click position

      const x: number = event.pageX - this.playground.offsetLeft;
      const y: number = event.pageY - this.playground.offsetTop;
      this.helperPointer = document.createElement('div');
      this.helperPointer.style.width = '0px';
      this.helperPointer.style.height = '0px';
      this.helperPointer.style.backgroundColor = 'blue';
      this.helperPointer.style.position = 'absolute';
      this.helperPointer.style.left = `${x}px`;
      this.helperPointer.style.top = `${y}px`;
      this.playground.appendChild(this.helperPointer);
      const a = new TYPE_MAP[this.dragOptions.type](this.playground, this.elem, this.helperPointer, this.dragOptions);
      document.onmousemove = (_event: MouseEvent) => {
        if (this.isCreatingNewConnector) {
          this.helperPointer.style.left = `${_event.pageX - this.playground.offsetLeft}px`;
          this.helperPointer.style.top = `${_event.pageY - this.playground.offsetTop}px`;
          if (a) {
            a.renderLine();
          }
        }
      };
      document.onmouseup = (_upEvent: MouseEvent) => {
        this.isCreatingNewConnector = false;
        const elementMouseIsOver = document.elementsFromPoint(_upEvent.clientX, _upEvent.clientY);
        const targetElements = elementMouseIsOver.filter(i => i.classList.contains('cnt-element'));
        a.dispose();
        if (targetElements.length > 0) {
          this.onCreatingLine(targetElements[0]);
        }
        if (this.helperPointer) {
          this.playground.removeChild(this.helperPointer);
          this.helperPointer = undefined;
        }
      };
    };

    this.elem.appendChild(anchor);
  }
}
