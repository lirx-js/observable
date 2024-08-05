import { INotification } from '../../../../../../../../misc/notifications/notification.type.js';
import { IDraggableElementObject } from '../../create-draggable-observable.js';

export type IDragStartNotification<GElement extends Element> = INotification<
  'drag-start',
  IDraggableElementObject<GElement>
>;
