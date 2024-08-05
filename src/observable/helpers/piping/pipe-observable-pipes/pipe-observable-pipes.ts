import { pipe } from '../../../../misc/functional/pipe/pipe.js';
import { IInferPipeReturn } from '../../../../misc/functional/pipe/types/infer-pipe-return.type.js';
import { IPipeNowConstraint } from '../../../../misc/functional/pipe/types/pipe-now-constraint.type.js';
import { IGenericObservablePipe } from '../../../pipes/type/observable-pipe.type.js';

export type IObservablePipePipeConstraint<
  // generics
  GFunctions,
  //
> =
  IPipeNowConstraint<any, GFunctions> extends readonly IGenericObservablePipe[]
    ? IPipeNowConstraint<any, GFunctions>
    : never;

export type IPipeObservablePipesReturn<
  // generics
  GFunctions extends readonly IGenericObservablePipe[],
  //
> = IInferPipeReturn<GFunctions>;

export function pipeObservablePipes<
  // generics
  GFunctions extends IObservablePipePipeConstraint<GFunctions>,
  //
>(fns: GFunctions): IPipeObservablePipesReturn<GFunctions> {
  return pipe<GFunctions>(fns);
}
