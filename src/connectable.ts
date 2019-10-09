import { Draggable } from './draggable';
import { DragOptions } from './connector.model';
import { prefixCls } from './constraints';
import { ConnectorBase } from './connector-base';
import { ConnectorFlowchart } from './connector-flowchart';
import { addClassIfNotExist, ifOverlapping, removeClass, setStyle } from './utils';

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
    setStyle(anchor, {
      width: '10px',
      height: '10px',
      backgroundColor: 'red',
      position: 'absolute',
      left: '15px',
      top: '15px',
    });

    // while anchor press down
    // a new connection will be created
    anchor.onmousedown = (event: MouseEvent) => {
      event.stopPropagation();
      this.isCreatingNewConnector = true;

      // create a overlay entPointer at the click position

      // if offset is 0, the pointer will always hover the helper point instead of the other element
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
      let _newConnection = new TYPE_MAP[this.dragOptions.type](this.playground, this.elem, this.helperPointer, this.dragOptions);

      // TODO: onmousemove and onmouseup's listener should be removed after onmouseup
      document.onmousemove = (_event: MouseEvent) => {
        if (this.isCreatingNewConnector) {
          this.helperPointer.style.left = `${_event.pageX - this.playground.offsetLeft - helperPointOffset}px`;
          this.helperPointer.style.top = `${_event.pageY - this.playground.offsetTop - helperPointOffset}px`;
          if (_newConnection) {
            _newConnection.renderLine();
          }
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
      document.onmouseup = (_upEvent: MouseEvent) => {
        this.isCreatingNewConnector = false;
        const elementMouseIsOver = document.elementsFromPoint(_upEvent.clientX, _upEvent.clientY);
        const targetElements = elementMouseIsOver.filter(i => i.classList.contains('cnt-element'));
        if (_newConnection) {
          _newConnection.dispose();
          _newConnection = null;
        }
        if (targetElements.length > 0) {
          this.onCreatingLine(targetElements[0]);
          removeClass(targetElements[0], `${prefixCls}-will`);
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
