import { IInferLastReturnedValueOfUnaryFunctionListOrValue } from '../../../shared-types/infer-last-returned-value-of-unary-function-list.type.js';
import { IGenericUnaryFunction } from '../../../shared-types/unary-function.type.js';

export type IInferPipeNowReturn<
  // generics
  GValue,
  GFunctions extends readonly IGenericUnaryFunction[],
  //
> = IInferLastReturnedValueOfUnaryFunctionListOrValue<GFunctions, GValue>;
