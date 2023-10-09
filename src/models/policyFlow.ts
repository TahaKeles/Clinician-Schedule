import { CompoundCondition } from './condition';
import { Action } from './action';

export interface PolicyFlow {
    type: string;
    conditions: CompoundCondition;
    actions: Action[];
}
