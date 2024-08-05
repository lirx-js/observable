import { createDOMObserverObservableFactory } from '../shared/create-dom-observer-observable-factory.js';
import { IDOMObserverFactoryCallback } from '../shared/dom-observer.type.js';

export const fromResizeObserver = createDOMObserverObservableFactory(
  (callback: IDOMObserverFactoryCallback<ResizeObserverEntry>): ResizeObserver => {
    return new ResizeObserver(callback);
  },
);
