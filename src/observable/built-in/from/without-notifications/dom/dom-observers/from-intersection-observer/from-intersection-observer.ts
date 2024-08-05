import { createDOMObserverObservableFactory } from '../shared/create-dom-observer-observable-factory.js';
import { IDOMObserverFactoryCallback } from '../shared/dom-observer.type.js';

export const fromIntersectionObserver = createDOMObserverObservableFactory(
  (callback: IDOMObserverFactoryCallback<IntersectionObserverEntry>): IntersectionObserver => {
    return new IntersectionObserver(callback);
  },
);
