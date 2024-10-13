import { createIdle, UndoFunction } from '@lirx/utils';
import { IObserver } from '../../../../../../observer/type/observer.type.js';
import { IObservable, IUnsubscribeOfObservable } from '../../../../../type/observable.type.js';

/**
 * Creates an Observable that emits when idle time is available.
 */
export function idle(options?: IdleRequestOptions): IObservable<IdleDeadline> {
  return (emit: IObserver<IdleDeadline>): IUnsubscribeOfObservable => {
    let running: boolean = true;
    let abort: UndoFunction;
    const loop = (): void => {
      abort = createIdle((deadline: IdleDeadline): void => {
        emit(deadline);
        if (running) {
          loop();
        }
      }, options);
    };
    loop();
    return (): void => {
      if (running) {
        running = false;
        abort();
      }
    };
  };
}
