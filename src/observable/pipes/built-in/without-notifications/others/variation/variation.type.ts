import { UninitializedToken } from '@lirx/utils';

export interface IVariation<GValue> {
  readonly previous: GValue | UninitializedToken;
  readonly current: GValue;
}
