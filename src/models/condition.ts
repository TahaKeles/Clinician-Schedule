export type Logic = 'AND' | 'OR';

export interface Condition {
    attribute: string;
    operator: string;
    value: string | number | boolean;
}

export interface CompoundCondition {
    logic: Logic;
    conditions: Array<Condition | CompoundCondition>;
}
