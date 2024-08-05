import { IObservable } from '../../../../../type/observable.type.js';
import { IObservablePipe } from '../../../../type/observable-pipe.type.js';
import {
  autoUnsubscribeObservableWithNotifications,
  IAutoUnsubscribeObservableNotifications
} from './auto-unsubscribe-observable-with-notifications.js';

/**
 * @experimental
 */
export function autoUnsubscribeObservablePipeWithNotifications<
  GNotifications extends IAutoUnsubscribeObservableNotifications,
>(): IObservablePipe<GNotifications, GNotifications> {
  return (subscribe: IObservable<GNotifications>): IObservable<GNotifications> => {
    return autoUnsubscribeObservableWithNotifications<GNotifications>(subscribe);
  };
}
