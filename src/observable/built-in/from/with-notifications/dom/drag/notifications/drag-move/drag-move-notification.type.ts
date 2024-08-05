import { INotification } from '../../../../../../../../misc/notifications/notification.type.js';
import { IDraggableElementObject } from '../../create-draggable-observable.js';

export type IDragMoveNotification<GElement extends Element> = INotification<
  'drag-move',
  IDraggableElementObject<GElement>
>;
