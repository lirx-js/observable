import { AbortError, IAbortError, IAbortErrorOptions } from '@lirx/utils';
import { createErrorNotification } from '../create-error-notification.js';
import { IErrorNotification } from '../error-notification.type.js';

export function createAbortErrorNotification(
  options?: IAbortErrorOptions,
): IErrorNotification<IAbortError> {
  return createErrorNotification<IAbortError>(new AbortError(options));
}
