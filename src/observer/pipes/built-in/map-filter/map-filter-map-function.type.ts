import { IMapFunction } from '../map/map-function.type.js';
import { IMapFilterDiscard } from './map-filter-discard.constant.js';

export type IMapFilterMapFunctionReturn<GOut> = GOut | IMapFilterDiscard;
export type IMapFilterMapFunction<GIn, GOut> = IMapFunction<GIn, IMapFilterMapFunctionReturn<GOut>>;
