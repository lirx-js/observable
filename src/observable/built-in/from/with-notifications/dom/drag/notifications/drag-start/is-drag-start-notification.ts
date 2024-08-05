import { IGenericNotification } from '../../../../../../../../misc/notifications/notification.type.js';
import { IDragStartNotification } from './drag-start-notification.type.js';

export function isDragStartNotification<GElement extends Element>(
  notification: IGenericNotification,
): notification is IDragStartNotification<GElement> {
  return notification.name === 'drag-start';
}
