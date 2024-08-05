import { ISourceObservableOnSubscribeFunction } from './source-observable-on-subscribe-function.type.js';
import { ISourceObservableOnUnsubscribeFunction } from './source-observable-on-unsubscribe-function.type.js';
import { ISourceObservablePipeCreateSource } from './source-observable-pipe-create-source.type.js';

export interface ISourceObservableOptions<GValue> {
  createSource: ISourceObservablePipeCreateSource<GValue>;
  onSubscribe: ISourceObservableOnSubscribeFunction<GValue>;
  onUnsubscribe: ISourceObservableOnUnsubscribeFunction<GValue>;
}
