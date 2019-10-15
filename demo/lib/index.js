
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.EasyConnection = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var StartPositionEnum;

  (function (StartPositionEnum) {
    StartPositionEnum[StartPositionEnum["horizontalLeftTop"] = 0] = "horizontalLeftTop";
    StartPositionEnum[StartPositionEnum["horizontalLeftBottom"] = 1] = "horizontalLeftBottom";
    StartPositionEnum[StartPositionEnum["horizontalRightTop"] = 2] = "horizontalRightTop";
    StartPositionEnum[StartPositionEnum["horizontalRightBottom"] = 3] = "horizontalRightBottom";
    StartPositionEnum[StartPositionEnum["verticalLeftTop"] = 4] = "verticalLeftTop";
    StartPositionEnum[StartPositionEnum["verticalLeftBottom"] = 5] = "verticalLeftBottom";
    StartPositionEnum[StartPositionEnum["verticalRightTop"] = 6] = "verticalRightTop";
    StartPositionEnum[StartPositionEnum["verticalRightBottom"] = 7] = "verticalRightBottom";
  })(StartPositionEnum || (StartPositionEnum = {}));

  function createPolyline(options, _ref) {
    var onmouseenter = _ref.onmouseenter,
        onmouseleave = _ref.onmouseleave,
        onmousedown = _ref.onmousedown;
    var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttributeNS(null, 'fill', 'none');
    polyline.setAttributeNS(null, 'stroke', "".concat(options.color));
    polyline.setAttributeNS(null, 'stroke-width', "".concat(options.strokeWidth));
    polyline.onmouseenter = onmouseenter;
    polyline.onmouseleave = onmouseleave;
    polyline.onmousedown = onmousedown;
    return polyline;
  }
  function createPath(options, _ref2) {
    var onmouseenter = _ref2.onmouseenter,
        onmouseleave = _ref2.onmouseleave,
        onmousedown = _ref2.onmousedown;
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'fill', 'none');
    path.setAttributeNS(null, 'stroke', "".concat(options.color));
    path.setAttributeNS(null, 'stroke-width', "".concat(options.strokeWidth));
    path.onmouseenter = onmouseenter;
    path.onmouseleave = onmouseleave;
    path.onmousedown = onmousedown;
    return path;
  }
  function bezierPath(path, start, mid, end) {
    path.setAttributeNS(null, 'd', "\n  M".concat(start[0], " ").concat(start[1], "\n  Q").concat(mid[0], " ").concat(mid[1], "\n  ").concat(end[0], " ").concat(end[1], "\n  "));
  }
  function straightPolyline(polyLine, start, end) {
    polyLine.setAttributeNS(null, 'points', "".concat(start.toString(), " ").concat(end.toString()));
  }
  function stateMachinePolyLine(polyLine, start, midA, midB, end) {
    polyLine.setAttributeNS(null, 'points', "".concat(start.toString(), " ").concat(midA.toString(), " ").concat(midB.toString(), " ").concat(end.toString()));
  }
  function px2num(pxVal) {
    return +pxVal.slice(0, pxVal.length - 2);
  }
  function num2px(numVal) {
    return "".concat(numVal, "px");
  }
  /**
   * add class names for a html element, when the element already has the className, skip
   * @param elem target html element
   * @param cls classNames or className
   */

  function addClassIfNotExist(elem, cls) {
    var classes = Array.isArray(cls) ? cls : [cls];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;

        if (!elem.classList.contains(c)) {
          elem.classList.add(c);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  function removeClass(elem, cls) {
    var classes = Array.isArray(cls) ? cls : [cls];
    var elements = Array.isArray(elem) ? elem : [elem];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = classes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var c = _step3.value;
            e.classList.remove(c);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
  function setStyle(elem, style) {
    Object.keys(style).forEach(function (key) {
      elem.style[key] = style[key];
    });
  }

  var prefixCls = 'cnt';

  /**
   * The root class of connection
   */
  var Connector =
  /*#__PURE__*/
  function () {
    // The container of the zone, every thing is on it
    // The start HTMLElement of the connection
    // The end HTMLElement of the connection
    // The element that attached on the start/end element
    // usually, there will be 4 most on each element, one at each side
    // describes where the start element is related to the end element
    // the svg container, each connector has one svg

    /**
     * @param playground start connector
     * @param startElement start connector
     * @param endElement end connector
     * @param options end connector
     */
    function Connector(playground, startElement, endElement, options) {
      var _this = this;

      _classCallCheck(this, Connector);

      this.isMoving = false;

      this.onmouseenter = function (event) {
        var polyline = event.target;
        var hoverColor = _this.options.hoverColor || _this.options.color;
        polyline.style.stroke = hoverColor;
        _this.svgElement.getElementById('markerEndArrow').getElementsByTagName('path')[0].style.fill = hoverColor; // tslint:disable-next-line: Unnecessary semicolon
      };

      this.onmouseleave = function (event) {
        event.target.style.stroke = _this.options.color;
        _this.svgElement.getElementById('markerEndArrow').getElementsByTagName('path')[0].style.fill = _this.options.color; // tslint:disable-next-line: Unnecessary semicolon
      };

      this.onmousedown = function (event) {
        var isOnArrow = _this.checkIfMouseEventOnArrow(event);

        console.log(isOnArrow);

        if (isOnArrow) {
          // this connection should be removed and temp lines should be created
          // build a helper pointer and connect it with the helper point
          _this.isMoving = true;
          var helperPointOffset = 3;
          var x = event.pageX - _this.playground.offsetLeft;
          var y = event.pageY - _this.playground.offsetTop;
          _this.helperPointer = document.createElement('div');
          setStyle(_this.helperPointer, {
            width: '0px',
            height: '0px',
            position: 'absolute',
            left: "".concat(x - helperPointOffset, "px"),
            top: "".concat(y - helperPointOffset, "px")
          });

          _this.playground.appendChild(_this.helperPointer);

          _this.endElement = _this.helperPointer;
          _this.endPointer = undefined; // reconnect

          document.onmousemove = function (_event) {
            if (_this.isMoving) {
              _this.helperPointer.style.left = "".concat(_event.pageX - _this.playground.offsetLeft - helperPointOffset, "px");
              _this.helperPointer.style.top = "".concat(_event.pageY - _this.playground.offsetTop - helperPointOffset, "px");

              _this.renderLine();

              var elementMouseIsOver = document.elementsFromPoint(_event.clientX, _event.clientY);
              var targetElements = elementMouseIsOver.filter(function (i) {
                return i.classList.contains('cnt-element');
              });

              var allElements = _this.playground.getElementsByClassName("".concat(prefixCls, "-element"));

              if (targetElements.length > 0) {
                addClassIfNotExist(targetElements[0], "".concat(prefixCls, "-will")); // others should be deleted

                removeClass(Array.from(allElements).filter(function (i) {
                  return i !== targetElements[0];
                }), "".concat(prefixCls, "-will"));
              } else {
                removeClass(Array.from(allElements), "".concat(prefixCls, "-will"));
              }
            }
          }; // TODO: many optimize


          document.onmouseup = function (_upEvent) {
            _this.isMoving = false;
            var elementMouseIsOver = document.elementsFromPoint(_upEvent.clientX, _upEvent.clientY);
            var targetElements = elementMouseIsOver.filter(function (i) {
              return i.classList.contains('cnt-element');
            });

            if (targetElements.length > 0) {
              _this.endElement = targetElements[0];
              _this.endPointer = undefined;

              _this.renderLine();

              removeClass(targetElements[0], "".concat(prefixCls, "-will"));
            } else {
              _this.dispose();
            }

            if (_this.helperPointer) {
              _this.playground.removeChild(_this.helperPointer);

              _this.helperPointer = undefined;
            }
          };
        } // tslint:disable-next-line: Unnecessary semicolon

      };

      this.options = _objectSpread2({
        pointerSize: 4,
        strokeWidth: 1,
        color: '#cccccc',
        arrowSize: 15
      }, options);
      this.startElement = startElement;
      this.endElement = endElement;
      addClassIfNotExist(startElement, "".concat(prefixCls, "-element"));
      addClassIfNotExist(endElement, "".concat(prefixCls, "-element"));
      this.playground = playground; // find the connect point that used in each element

      var res = this.createConnectPoint(this.startElement, this.endElement);
      this.startPointer = res.start;
      this.endPointer = res.end;
      addClassIfNotExist(this.startPointer, "".concat(prefixCls, "-pointer"));
      addClassIfNotExist(this.endPointer, "".concat(prefixCls, "-pointer")); // create a svg area between start and end

      this.svgElement = this.createSvgArea();
      this.drawPath();
      this.playground.appendChild(this.svgElement);
    }
    /**
     * Remove and render the svg part
     * TODO: more efficient way should be used here
     */


    _createClass(Connector, [{
      key: "renderLine",
      value: function renderLine() {
        var res = this.createConnectPoint(this.startElement, this.endElement);
        this.startPointer = res.start;
        this.endPointer = res.end;
        addClassIfNotExist(this.startPointer, "".concat(prefixCls, "-pointer"));
        addClassIfNotExist(this.endPointer, "".concat(prefixCls, "-pointer"));
        this.playground.removeChild(this.svgElement);
        this.svgElement = this.createSvgArea();
        this.drawPath();
        this.playground.appendChild(this.svgElement);
      }
      /**
       * remove the whole svg part and the connect pointer
       */

    }, {
      key: "dispose",
      value: function dispose() {
        if (this.startElement && this.startPointer) {
          this.startElement.removeChild(this.startPointer);
        }

        if (this.endElement && this.endPointer) {
          this.endElement.removeChild(this.endPointer);
        }

        this.playground.removeChild(this.svgElement);
      }
    }, {
      key: "createConnectPoint",
      value: function createConnectPoint(startElement, endElement) {
        if (!!this.startPointer) {
          startElement.removeChild(this.startPointer);
        }

        if (!!this.endPointer) {
          endElement.removeChild(this.endPointer);
        } // calc the absolute distance between two elements
        // should notice that the area depends on the endElement position related to the start element


        var startPointer = document.createElement('div');
        var endPointer = document.createElement('div');
        startPointer.style.position = 'absolute';
        endPointer.style.position = 'absolute';
        startPointer.style.backgroundColor = '#000000';
        endPointer.style.backgroundColor = '#000000';
        startPointer.style.width = "".concat(this.options.pointerSize, "px");
        endPointer.style.width = "".concat(this.options.pointerSize, "px");
        startPointer.style.height = "".concat(this.options.pointerSize, "px");
        endPointer.style.height = "".concat(this.options.pointerSize, "px");
        var xDistance = startElement.offsetLeft - endElement.offsetLeft;
        var yDistance = startElement.offsetTop - endElement.offsetTop;

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
            startPointer.position = 'right';
            endPointer.position = 'left';
            startPointer.style.left = "".concat(startElement.getBoundingClientRect().width, "px");
            startPointer.style.top = "".concat(startElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2, "px");
            endPointer.style.left = "".concat(-this.options.pointerSize, "px");
            endPointer.style.top = "".concat(endElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2, "px");
            break;

          case StartPositionEnum.horizontalRightBottom:
          case StartPositionEnum.horizontalRightTop:
            startPointer.position = 'left';
            endPointer.position = 'right';
            startPointer.style.left = "".concat(-this.options.pointerSize, "px");
            startPointer.style.top = "".concat(startElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2, "px");
            endPointer.style.left = "".concat(endElement.getBoundingClientRect().width, "px");
            endPointer.style.top = "".concat(endElement.getBoundingClientRect().height / 2 - this.options.pointerSize / 2, "px");
            break;

          case StartPositionEnum.verticalLeftTop:
          case StartPositionEnum.verticalRightTop:
            // startElem -> bottom
            // endElem   -> top
            startPointer.position = 'bottom';
            endPointer.position = 'top';
            startPointer.style.left = "".concat(startElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2, "px");
            startPointer.style.top = "".concat(startElement.getBoundingClientRect().height, "px");
            endPointer.style.left = "".concat(endElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2, "px");
            endPointer.style.top = "".concat(-this.options.pointerSize, "px");
            break;

          case StartPositionEnum.verticalLeftBottom:
          case StartPositionEnum.verticalRightBottom:
            // startElem -> top
            // endElem   -> bottom
            startPointer.position = 'top';
            endPointer.position = 'bottom';
            startPointer.style.left = "".concat(startElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2, "px");
            startPointer.style.top = "-".concat(this.options.pointerSize, "px");
            endPointer.style.left = "".concat(endElement.getBoundingClientRect().width / 2 - this.options.pointerSize / 2, "px");
            endPointer.style.top = "".concat(endElement.getBoundingClientRect().height, "px");
            break;
        }

        startElement.appendChild(startPointer);
        endElement.appendChild(endPointer);
        return {
          start: startPointer,
          end: endPointer
        };
      }
      /**
       * Create a svg area used for the connection line between the start and end point
       * the area is rect
       */

    }, {
      key: "createSvgArea",
      value: function createSvgArea() {
        var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.innerHTML = "\n    <defs>\n      <marker id=\"markerEndArrow\" viewBox=\"0 0 30 30\" refX=\"9\" refY=\"3\"  markerUnits=\"strokeWidth\" markerWidth=\"30\" markerHeight=\"30\" orient=\"auto\">\n        <path style=\"fill:".concat(this.options.color, ";opacity:1\" d=\"M0,0 0,6 9,3z\" />\n      </marker>\n    </defs>"); // set svg position
        // use position attribute to handle with ethe position

        svgElement.style.position = 'absolute';
        svgElement.style.zIndex = '999';
        svgElement.style.overflow = 'visible';

        var _this$getTotalOffset = this.getTotalOffset(this.startPointer),
            startOffsetLeft = _this$getTotalOffset.offsetLeft,
            startOffsetTop = _this$getTotalOffset.offsetTop;

        var _this$getTotalOffset2 = this.getTotalOffset(this.endPointer),
            endOffsetLeft = _this$getTotalOffset2.offsetLeft,
            endOffsetTop = _this$getTotalOffset2.offsetTop;

        switch (this.startPosition) {
          case StartPositionEnum.horizontalLeftTop:
          case StartPositionEnum.verticalLeftTop:
            svgElement.style.left = "".concat(startOffsetLeft, "px");
            svgElement.style.top = "".concat(startOffsetTop, "px");
            break;

          case StartPositionEnum.horizontalRightTop:
          case StartPositionEnum.verticalRightTop:
            svgElement.style.left = "".concat(endOffsetLeft, "px");
            svgElement.style.top = "".concat(startOffsetTop, "px");
            break;

          case StartPositionEnum.horizontalLeftBottom:
          case StartPositionEnum.verticalLeftBottom:
            svgElement.style.left = "".concat(startOffsetLeft, "px");
            svgElement.style.top = "".concat(endOffsetTop, "px");
            break;

          case StartPositionEnum.horizontalRightBottom:
          case StartPositionEnum.verticalRightBottom:
            svgElement.style.left = "".concat(endOffsetLeft, "px");
            svgElement.style.top = "".concat(endOffsetTop, "px");
            break;
        }

        var width = Math.abs(startOffsetLeft - endOffsetLeft) + this.options.pointerSize;
        var height = Math.abs(startOffsetTop - endOffsetTop) + this.options.pointerSize;
        svgElement.setAttribute('width', "".concat(width, "px"));
        svgElement.setAttribute('height', "".concat(height, "px"));
        var svgWidth = svgElement.width.baseVal.valueInSpecifiedUnits;
        var svgHeight = svgElement.height.baseVal.valueInSpecifiedUnits;
        this.svgParameters = {
          height: svgHeight,
          width: svgWidth,
          leftTop: [this.options.pointerSize / 2, this.options.pointerSize / 2],
          leftBottom: [this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2],
          rightTop: [svgWidth - this.options.pointerSize / 2, this.options.pointerSize / 2],
          rightBottom: [svgWidth - this.options.pointerSize / 2, svgHeight - this.options.pointerSize / 2]
        };
        return svgElement;
      }
    }, {
      key: "getTotalOffset",
      value: function getTotalOffset(pointer) {
        var offsetLeft = pointer.offsetLeft + pointer.offsetParent.offsetLeft;
        var offsetTop = pointer.offsetTop + pointer.offsetParent.offsetTop;
        return {
          offsetLeft: offsetLeft,
          offsetTop: offsetTop
        };
      }
    }, {
      key: "checkIfMouseEventOnArrow",
      value: function checkIfMouseEventOnArrow(event) {
        var _mapping;

        var isNear = function isNear(a, b) {
          return Math.abs(a - b) < 50;
        };

        var offsetX = event.offsetX,
            offsetY = event.offsetY;
        var mapping = (_mapping = {}, _defineProperty(_mapping, StartPositionEnum.horizontalLeftTop, 'rightBottom'), _defineProperty(_mapping, StartPositionEnum.verticalLeftTop, 'rightBottom'), _mapping);

        var _this$svgParameters$m = _slicedToArray(this.svgParameters[mapping[this.startPosition]], 2),
            arrowX = _this$svgParameters$m[0],
            arrowY = _this$svgParameters$m[1];

        return isNear(offsetX, arrowX) && isNear(offsetY, arrowY);
      } // Functions that can be inherited or override
      // Used for the children classes, ep: ConnectorBase, ConnectorFlowchart...

      /**
       * When mouse move into the connection, the hover color shall be changed
       * @param event: MouseEvent
       */

    }]);

    return Connector;
  }();

  var ConnectorBase =
  /*#__PURE__*/
  function (_Connector) {
    _inherits(ConnectorBase, _Connector);

    // whether the user is moving the arrow
    function ConnectorBase(playground, startElement, endElement, options) {
      var _this;

      _classCallCheck(this, ConnectorBase);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectorBase).call(this, playground, startElement, endElement, options));
      _this.isModifyingConnector = false;
      return _this;
    }

    _createClass(ConnectorBase, [{
      key: "drawPath",
      value: function drawPath() {
        var startCoordinate;
        var endCoordinate;

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

        var path = createPolyline(this.options, {
          onmouseenter: this.onmouseenter,
          onmouseleave: this.onmouseleave,
          onmousedown: this.onmousedown
        });
        straightPolyline(path, startCoordinate, endCoordinate);
        path.style.markerEnd = 'url(#markerEndArrow)';
        this.svgElement.appendChild(path);
      }
    }]);

    return ConnectorBase;
  }(Connector);

  var Draggable =
  /*#__PURE__*/
  function () {
    function Draggable(elem, dragOptions) {
      _classCallCheck(this, Draggable);

      this.isDragging = false;
      this.elem = elem;
      this.dragOptions = dragOptions || {
        type: 'straight'
      };
      this.makeItDraggable();
      this.elemStartCoordinate = {
        xPos: px2num(getComputedStyle(this.elem).left),
        yPos: px2num(getComputedStyle(this.elem).top)
      };
    }

    _createClass(Draggable, [{
      key: "makeItDraggable",
      value: function makeItDraggable() {
        var _this = this;

        this.elem.style.position = 'absolute';

        this.elem.onmousedown = function (event) {
          _this.startCoordinate = {
            xPos: event.clientX,
            yPos: event.clientY
          };
          _this.isDragging = true;

          document.onmousemove = function (_event) {
            if (_this.isDragging) {
              var _diffX = _event.clientX - _this.startCoordinate.xPos;

              var _diffY = _event.clientY - _this.startCoordinate.yPos;

              _this.elem.style.left = num2px(_this.elemStartCoordinate.xPos + _diffX);
              _this.elem.style.top = num2px(_this.elemStartCoordinate.yPos + _diffY);

              if (typeof _this.dragOptions.onDragging === 'function') {
                _this.dragOptions.onDragging();
              }
            }
          };

          document.onmouseup = function () {
            _this.isDragging = false;
            _this.startCoordinate = undefined; // new element position should be set

            _this.elemStartCoordinate = {
              xPos: px2num(getComputedStyle(_this.elem).left),
              yPos: px2num(getComputedStyle(_this.elem).top)
            };

            document.onmousemove = function () {};
          };
        };
      }
    }]);

    return Draggable;
  }();

  var ConnectorFlowchart =
  /*#__PURE__*/
  function (_Connector) {
    _inherits(ConnectorFlowchart, _Connector);

    function ConnectorFlowchart(playground, startPoint, endPoint, options) {
      _classCallCheck(this, ConnectorFlowchart);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorFlowchart).call(this, playground, startPoint, endPoint, options));
    }

    _createClass(ConnectorFlowchart, [{
      key: "drawPath",
      value: function drawPath() {
        var svgWidth = this.svgElement.width.baseVal.valueInSpecifiedUnits;
        var svgHeight = this.svgElement.height.baseVal.valueInSpecifiedUnits;
        var startCoordinate;
        var middleACoordinate;
        var middleBCoordinate;
        var endCoordinate;

        switch (this.startPosition) {
          case StartPositionEnum.verticalLeftTop:
            startCoordinate = this.svgParameters.leftTop;
            middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
            middleBCoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
            endCoordinate = this.svgParameters.rightBottom;
            break;

          case StartPositionEnum.horizontalLeftTop:
            startCoordinate = this.svgParameters.leftTop;
            middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
            middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
            endCoordinate = this.svgParameters.rightBottom;
            break;

          case StartPositionEnum.verticalRightTop:
            startCoordinate = this.svgParameters.rightTop;
            middleACoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
            middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
            endCoordinate = this.svgParameters.leftBottom;
            break;

          case StartPositionEnum.horizontalRightTop:
            startCoordinate = this.svgParameters.rightTop;
            middleACoordinate = [svgWidth / 2, this.options.pointerSize / 2];
            middleBCoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
            endCoordinate = this.svgParameters.leftBottom;
            break;

          case StartPositionEnum.verticalLeftBottom:
            startCoordinate = this.svgParameters.leftBottom;
            middleACoordinate = [this.options.pointerSize / 2, svgHeight / 2];
            middleBCoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
            endCoordinate = this.svgParameters.rightTop;
            break;

          case StartPositionEnum.horizontalLeftBottom:
            startCoordinate = this.svgParameters.leftBottom;
            middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
            middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
            endCoordinate = this.svgParameters.rightTop;
            break;

          case StartPositionEnum.verticalRightBottom:
            startCoordinate = this.svgParameters.rightBottom;
            middleACoordinate = [svgWidth - this.options.pointerSize / 2, svgHeight / 2];
            middleBCoordinate = [this.options.pointerSize / 2, svgHeight / 2];
            endCoordinate = this.svgParameters.leftTop;
            break;

          case StartPositionEnum.horizontalRightBottom:
            startCoordinate = this.svgParameters.rightBottom;
            middleACoordinate = [svgWidth / 2, svgHeight - this.options.pointerSize / 2];
            middleBCoordinate = [svgWidth / 2, this.options.pointerSize / 2];
            endCoordinate = this.svgParameters.leftTop;
        }

        var path = createPolyline(this.options, {
          onmouseenter: this.onmouseenter,
          onmouseleave: this.onmouseleave,
          onmousedown: this.onmousedown
        });
        stateMachinePolyLine(path, startCoordinate, middleACoordinate, middleBCoordinate, endCoordinate);
        path.style.markerEnd = 'url(#markerEndArrow)';
        this.svgElement.appendChild(path);
      }
    }]);

    return ConnectorFlowchart;
  }(Connector);

  var ConnectorBezier =
  /*#__PURE__*/
  function (_Connector) {
    _inherits(ConnectorBezier, _Connector);

    function ConnectorBezier() {
      _classCallCheck(this, ConnectorBezier);

      return _possibleConstructorReturn(this, _getPrototypeOf(ConnectorBezier).apply(this, arguments));
    }

    _createClass(ConnectorBezier, [{
      key: "drawPath",
      value: function drawPath() {
        var svgWidth = this.svgElement.width.baseVal.valueInSpecifiedUnits;
        var svgHeight = this.svgElement.height.baseVal.valueInSpecifiedUnits;
        var startCoordinate;
        var endCoordinate;
        var middleCoordinate;

        switch (this.startPosition) {
          case StartPositionEnum.horizontalLeftTop:
            middleCoordinate = [svgWidth / 2 + 10, svgHeight / 2 - 10];
            startCoordinate = this.svgParameters.leftTop;
            endCoordinate = this.svgParameters.rightBottom;
            break;

          case StartPositionEnum.verticalLeftTop:
            middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
            startCoordinate = this.svgParameters.leftTop;
            endCoordinate = this.svgParameters.rightBottom;
            break;

          case StartPositionEnum.horizontalLeftBottom:
          case StartPositionEnum.verticalLeftBottom:
            middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
            startCoordinate = this.svgParameters.leftBottom;
            endCoordinate = this.svgParameters.rightTop;
            break;

          case StartPositionEnum.horizontalRightTop:
          case StartPositionEnum.verticalRightTop:
            startCoordinate = this.svgParameters.rightTop;
            endCoordinate = this.svgParameters.leftBottom;
            middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
            break;

          case StartPositionEnum.horizontalRightBottom:
          case StartPositionEnum.verticalRightBottom:
          default:
            startCoordinate = this.svgParameters.rightBottom;
            endCoordinate = this.svgParameters.leftTop;
            middleCoordinate = [svgWidth / 2 - 10, svgHeight / 2 + 10];
            break;
        }

        var path = createPath(this.options, {
          onmouseenter: this.onmouseenter,
          onmouseleave: this.onmouseleave,
          onmousedown: this.onmousedown
        });
        bezierPath(path, startCoordinate, middleCoordinate, endCoordinate);
        console.log(startCoordinate, endCoordinate);
        path.style.markerEnd = 'url(#markerEndArrow)';
        this.svgElement.appendChild(path);
      }
    }]);

    return ConnectorBezier;
  }(Connector);

  var TYPE_MAP = {
    undefined: ConnectorBase,
    straight: ConnectorBase,
    flowchart: ConnectorFlowchart,
    bezier: ConnectorBezier
  };
  var Connectable =
  /*#__PURE__*/
  function (_Draggable) {
    _inherits(Connectable, _Draggable);

    function Connectable(playground, elem, dragOptions, _ref) {
      var _this;

      var onCreatingLine = _ref.onCreatingLine;

      _classCallCheck(this, Connectable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Connectable).call(this, elem, dragOptions));
      _this.isCreatingNewConnector = false;
      _this.nativeElement = elem;
      setStyle(elem, {
        zIndex: '2'
      });
      _this.playground = playground;
      _this.onCreatingLine = onCreatingLine;
      addClassIfNotExist(elem, "".concat(prefixCls, "-element"));

      _this.createAnchor();

      return _this;
    }

    _createClass(Connectable, [{
      key: "createAnchor",
      value: function createAnchor() {
        var _this2 = this;

        var anchor = document.createElement('div');
        anchor.classList.add("".concat(prefixCls, "-anchor"));
        setStyle(anchor, {
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          position: 'absolute',
          left: '15px',
          top: '15px'
        }); // while anchor press down
        // a new connection will be created

        anchor.onmousedown = function (event) {
          event.stopPropagation();
          _this2.isCreatingNewConnector = true; // create a overlay entPointer at the click position
          // if offset is 0, the pointer will always hover the helper point instead of the other element

          var helperPointOffset = 3;
          var x = event.pageX - _this2.playground.offsetLeft;
          var y = event.pageY - _this2.playground.offsetTop;
          _this2.helperPointer = document.createElement('div');
          setStyle(_this2.helperPointer, {
            width: '0px',
            height: '0px',
            position: 'absolute',
            left: "".concat(x - helperPointOffset, "px"),
            top: "".concat(y - helperPointOffset, "px")
          });

          _this2.playground.appendChild(_this2.helperPointer);

          var _newConnection = new TYPE_MAP[_this2.dragOptions.type](_this2.playground, _this2.elem, _this2.helperPointer, _this2.dragOptions); // TODO: onmousemove and onmouseup's listener should be removed after onmouseup


          document.onmousemove = function (_event) {
            if (_this2.isCreatingNewConnector) {
              _this2.helperPointer.style.left = "".concat(_event.pageX - _this2.playground.offsetLeft - helperPointOffset, "px");
              _this2.helperPointer.style.top = "".concat(_event.pageY - _this2.playground.offsetTop - helperPointOffset, "px");

              if (_newConnection) {
                _newConnection.renderLine();
              }

              var elementMouseIsOver = document.elementsFromPoint(_event.clientX, _event.clientY);
              var targetElements = elementMouseIsOver.filter(function (i) {
                return i.classList.contains('cnt-element');
              });

              var allElements = _this2.playground.getElementsByClassName("".concat(prefixCls, "-element"));

              if (targetElements.length > 0) {
                addClassIfNotExist(targetElements[0], "".concat(prefixCls, "-will")); // others should be deleted

                removeClass(Array.from(allElements).filter(function (i) {
                  return i !== targetElements[0];
                }), "".concat(prefixCls, "-will"));
              } else {
                removeClass(Array.from(allElements), "".concat(prefixCls, "-will"));
              }
            }
          };

          document.onmouseup = function (_upEvent) {
            _this2.isCreatingNewConnector = false;
            var elementMouseIsOver = document.elementsFromPoint(_upEvent.clientX, _upEvent.clientY);
            var targetElements = elementMouseIsOver.filter(function (i) {
              return i.classList.contains('cnt-element');
            });

            if (_newConnection) {
              _newConnection.dispose();

              _newConnection = null;
            }

            if (targetElements.length > 0) {
              _this2.onCreatingLine(targetElements[0]);

              removeClass(targetElements[0], "".concat(prefixCls, "-will"));
            }

            if (_this2.helperPointer) {
              _this2.playground.removeChild(_this2.helperPointer);

              _this2.helperPointer = undefined;
            }
          };
        };

        this.elem.appendChild(anchor);
      }
    }]);

    return Connectable;
  }(Draggable);

  var TYPE_MAP$1 = {
    undefined: ConnectorBase,
    straight: ConnectorBase,
    flowchart: ConnectorFlowchart,
    bezier: ConnectorBezier
  };
  var EasyConnection =
  /*#__PURE__*/
  function () {
    function EasyConnection(playground) {
      var _this = this;

      var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var connections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        type: 'straight'
      };

      _classCallCheck(this, EasyConnection);

      this.connectableElements = [];
      this.connections = [];
      this.elementConnectionsMap = {};
      this.playground = playground;
      this.options = _objectSpread2({
        color: '#cccccc',
        hoverColor: 'red'
      }, options); // set the playground to position relative
      // init the connections

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;
          this.elementConnectionsMap[elem.id] = [];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = connections[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var con = _step2.value;
          var connectionInstance = new TYPE_MAP$1[options.type](playground, con.start, con.end, options);
          this.elementConnectionsMap[con.start.id].push(connectionInstance);
          this.elementConnectionsMap[con.end.id].push(connectionInstance);
          this.connections.push(connectionInstance);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop = function _loop() {
          var elem = _step3.value;

          _this.connectableElements.push(new Connectable(playground, elem, _objectSpread2({}, options, {
            onDragging: function onDragging() {
              // all lines connected to this element should be reRendered
              _this.elementConnectionsMap[elem.id].forEach(function (i) {
                return i.renderLine();
              });
            }
          }), {
            onCreatingLine: function onCreatingLine(targetElem) {
              _this.addConnection({
                start: elem,
                end: targetElem
              });
            }
          }));
        };

        for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    _createClass(EasyConnection, [{
      key: "addElement",
      value: function addElement(elem) {
        var _this2 = this;

        this.elementConnectionsMap[elem.id] = [];
        this.playground.appendChild(elem);
        this.connectableElements.push(new Connectable(this.playground, elem, _objectSpread2({}, this.options, {
          onDragging: function onDragging() {
            // all lines connected to this element should be reRendered
            _this2.elementConnectionsMap[elem.id].forEach(function (i) {
              return i.renderLine();
            });
          }
        }), {
          onCreatingLine: function onCreatingLine(targetElem) {
            _this2.addConnection({
              start: elem,
              end: targetElem
            });
          }
        }));
      }
    }, {
      key: "addConnection",
      value: function addConnection(connection) {
        var connectionInstance = new TYPE_MAP$1[this.options.type](this.playground, connection.start, connection.end, this.options);
        this.elementConnectionsMap[connection.start.id].push(connectionInstance);
        this.elementConnectionsMap[connection.end.id].push(connectionInstance);
        this.connections.push(connectionInstance);
      }
    }]);

    return EasyConnection;
  }();

  exports.EasyConnection = EasyConnection;
  exports.Connector = Connector;
  exports.ConnectorBase = ConnectorBase;
  exports.ConnectorFlowchart = ConnectorFlowchart;
  exports.ConnectorBezier = ConnectorBezier;
  exports.Draggable = Draggable;
  exports.Connectable = Connectable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
