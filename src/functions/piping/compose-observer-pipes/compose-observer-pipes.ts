import { compose } from '../../../misc/functional/compose/compose.js';
import { IComposeConstraint } from '../../../misc/functional/compose/types/compose-constraint.type.js';
import { IInferComposeReturn } from '../../../misc/functional/compose/types/infer-compose-return.type.js';
import { IGenericObserverPipe } from '../../../observer/pipes/type/observer-pipe.type.js';

export type IComposeObserverPipesConstraint<
  // generics
  GObservable extends IGenericObserverPipe,
  GFunctions extends readonly IGenericObserverPipe[],
  //
> = IComposeConstraint<GFunctions, GObservable, IGenericObserverPipe>;

export type IComposeObserverPipesReturn<
  // generics
  GFunctions extends readonly IGenericObserverPipe[],
  //
> = IInferComposeReturn<GFunctions, IGenericObserverPipe>;

export function composeObserverPipes<
  // generics
  GFunctions extends IComposeObserverPipesConstraint<any, GFunctions>,
  //
>(fns: GFunctions): IComposeObserverPipesReturn<GFunctions> {
  return compose<GFunctions, IGenericObserverPipe>(fns);
}

// /**
//  * @deprecated - EXPERIMENTAL - use at your own risks
//  */
// export function composeObserverPipesSpread<// generics
//   GFunctions extends IComposeObserverPipesConstraint<any, GFunctions>
//   //
//   >(
//   ...fns: GFunctions
// ): IComposeObserverPipesReturn<GFunctions> {
//   return composeObserverPipes<GFunctions>(fns);
// }
