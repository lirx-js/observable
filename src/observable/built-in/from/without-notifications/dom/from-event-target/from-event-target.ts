import { createEventListener } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

/**
 * Creates an Observable which emits events dispatched by 'target'
 */
export function fromEventTarget<GEvent extends Event>(
  target: Omit<EventTarget, 'dispatchEvent'>,
  type: string,
  options?: boolean | AddEventListenerOptions,
): IObservable<GEvent> {
  return (emit: IObserver<GEvent>): IUnsubscribeOfObservable => {
    return createEventListener<GEvent>(target, type, emit, options);
  };
}
