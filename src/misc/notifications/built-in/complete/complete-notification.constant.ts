import { freeze } from '../../../helpers/freeze.js';
import { ICompleteNotification } from './complete-notification.type.js';
import { createCompleteNotification } from './create-complete-notification.js';

export const STATIC_COMPLETE_NOTIFICATION: ICompleteNotification = freeze(
  createCompleteNotification(),
);
