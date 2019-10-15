import { ConnectorPoint } from '../connector-point';
import { StartPositionEnum } from '../connector.model';
/**
 * Create a svg area used for the connection line between the start and end point
 * the area is rect
 */
declare function createSvgArea(startPosition: StartPositionEnum, startPointer: ConnectorPoint, endPointer: ConnectorPoint, options: any): SVGSVGElement;
export { createSvgArea };
