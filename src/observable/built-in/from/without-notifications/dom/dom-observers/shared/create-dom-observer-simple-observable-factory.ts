import { IObserver } from '../../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../../type/observable.type.js';
import { IDOMObserverObservableFactory } from './create-dom-observer-observable-factory.js';
import {
  IDOMObserverEntry,
  IDOMObserverSimple,
  IDOMObserverSimpleFactory,
} from './dom-observer.type.js';

export function createDOMObserverSimpleObservableFactory<
  GOptions,
  GEntry extends IDOMObserverEntry,
>(
  createObserver: IDOMObserverSimpleFactory<GOptions, GEntry>,
): IDOMObserverObservableFactory<GOptions, GEntry> {
  return (element: Element, options?: GOptions): IObservable<GEntry> => {
    return (emit: IObserver<GEntry>): IUnsubscribeOfObservable => {
      const observer: IDOMObserverSimple<GOptions> = createObserver(
        (entries: ReadonlyArray<GEntry>): void => {
          emit(entries[0]);
        },
      );

      observer.observe(element, options);

      return (): void => {
        observer.disconnect();
      };
    };
  };
}
