import { IObserverObservablePair } from '../../../../../../../observer-observable-pair/type/observer-observable-pair.type.js';
import { fromReadableStream } from '../from-readable-stream/from-readable-stream.js';
import { fromWritableStream } from '../from-writable-stream/from-writable-stream.js';
import { IFromReadableWritablePairOnError } from './from-readable-writable-pair-on-error.type.js';
import { IFromReadableWritablePairReadableValueNotifications } from './from-readable-writable-pair-readable-value-notifications.type.js';
import { IFromReadableWritablePairWritableValueNotifications } from './from-readable-writable-pair-writable-value-notifications.type.js';

export function fromReadableWritablePair<GReadableValue, GWritableValue>(
  { readable, writable }: ReadableWritablePair<GReadableValue, GWritableValue>,
  onError?: IFromReadableWritablePairOnError,
): IObserverObservablePair<
  IFromReadableWritablePairWritableValueNotifications<GWritableValue>,
  IFromReadableWritablePairReadableValueNotifications<GReadableValue>
> {
  return {
    emit: fromWritableStream(writable, onError),
    subscribe: fromReadableStream(readable),
  };
}
