import { IGenericSource } from '../../../type/source.type.js';
import { IReplayLastSource } from '../replay-last-source.type.js';

export function mutateReadonlyReplayLastSourceArray<GItem>(
  source: IReplayLastSource<readonly GItem[], IGenericSource>,
  callback: (items: GItem[]) => void,
): void {
  const items: readonly GItem[] = source.getValue();
  callback(items as GItem[]);
  source.emit(items);
}
