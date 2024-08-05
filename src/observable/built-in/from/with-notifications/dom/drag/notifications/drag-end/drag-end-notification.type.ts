import { INotification } from '../../../../../../../../misc/notifications/notification.type.js';
import { IDraggableElementObject } from '../../create-draggable-observable.js';

export type IDragEndNotification<GElement extends Element> = INotification<
  'drag-end',
  IDraggableElementObject<GElement>
>;
