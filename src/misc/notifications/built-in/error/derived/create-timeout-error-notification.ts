import { createErrorNotification } from '../create-error-notification.js';
import { IErrorNotification } from '../error-notification.type.js';

export function createTimeoutErrorNotification(): IErrorNotification<Error> {
  return createErrorNotification<Error>(new Error('Timeout'));
}
