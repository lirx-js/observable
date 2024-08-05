import { IGenericUnaryFunction, IUnaryFunction } from '../../shared-types/unary-function.type.js';
import { IInferComposeReturn } from './infer-compose-return.type.js';

export type IComposeNowValueConstraint<
  // generics
  GFunctions extends readonly GUnaryFunction[],
  GUnaryFunction extends IGenericUnaryFunction,
  //
> =
  IInferComposeReturn<GFunctions, GUnaryFunction> extends IUnaryFunction<infer GIn, any>
    ? GIn
    : never;
