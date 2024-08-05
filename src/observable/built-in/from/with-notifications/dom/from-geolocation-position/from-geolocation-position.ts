import { createErrorNotification } from '../../../../../../misc/notifications/built-in/error/create-error-notification.js';
import { createNextNotification } from '../../../../../../misc/notifications/built-in/next/create-next-notification.js';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';
import { IFromGeolocationPositionObservableNotifications } from './from-geolocation-position-observable-notifications.type.js';

export function fromGeolocationPosition(
  options?: PositionOptions,
): IObservable<IFromGeolocationPositionObservableNotifications> {
  return (
    emit: IObserver<IFromGeolocationPositionObservableNotifications>,
  ): IUnsubscribeOfObservable => {
    let running: boolean = true;

    const watchId: number = navigator.geolocation.watchPosition(
      (position: GeolocationPosition): void => {
        emit(createNextNotification<GeolocationPosition>(position));
      },
      (positionError: GeolocationPositionError): void => {
        emit(createErrorNotification<GeolocationPositionError>(positionError));
      },
      options,
    );

    return (): void => {
      if (running) {
        running = false;
        navigator.geolocation.clearWatch(watchId);
      }
    };
  };
}
