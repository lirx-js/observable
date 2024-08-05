import { IInferFirstReturnedValueOfUnaryFunctionListOrValue } from '../../shared-types/infer-first-returned-value-of-unary-function-list.type.js';
import { IGenericUnaryFunction } from '../../shared-types/unary-function.type.js';

export type IInferComposeNowReturn<
  // generics
  GFunctions extends readonly IGenericUnaryFunction[],
  GValue,
  //
> = IInferFirstReturnedValueOfUnaryFunctionListOrValue<GFunctions, GValue>;
