import { createDOMObserverSimpleObservableFactory } from '../shared/create-dom-observer-simple-observable-factory.js';
import { IDOMObserverFactoryCallback } from '../shared/dom-observer.type.js';

export const fromMutationObserver = createDOMObserverSimpleObservableFactory(
  (callback: IDOMObserverFactoryCallback<MutationRecord>): MutationObserver => {
    return new MutationObserver(callback);
  },
);
