import { IGenericNotification } from '../../../../../../../../misc/notifications/notification.type.js';
import { IDragMoveNotification } from './drag-move-notification.type.js';

export function isDragMoveNotification<GElement extends Element>(
  notification: IGenericNotification,
): notification is IDragMoveNotification<GElement> {
  return notification.name === 'drag-move';
}
