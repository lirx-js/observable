import { IInferFirstArgumentOfUnaryFunctionList } from '../../shared-types/infer-first-argument-of-unary-function-list.type.js';
import { IInferLastReturnedValueOfUnaryFunctionList } from '../../shared-types/infer-last-returned-value-of-unary-function-list.type.js';
import { IGenericUnaryFunction } from '../../shared-types/unary-function.type.js';

export type IInferPipeReturnRaw<
  // generics
  GFunctions extends readonly IGenericUnaryFunction[],
  //
> = (
  value: IInferFirstArgumentOfUnaryFunctionList<GFunctions>,
) => IInferLastReturnedValueOfUnaryFunctionList<GFunctions>;

export type IInferPipeReturn<
  // generics
  GFunctions extends readonly IGenericUnaryFunction[],
  //
> = GFunctions extends [] ? <GValue>(value: GValue) => GValue : IInferPipeReturnRaw<GFunctions>;
