import { Condition, CompoundCondition } from '../models/condition';
import { Clinician } from '../models/clinician';

export function evaluateCompoundCondition(compoundCondition: CompoundCondition, clinician: Clinician): boolean {
    if (compoundCondition.logic === 'AND') {
        return compoundCondition.conditions.every((cond: any) => evaluateConditionOrCompound(cond, clinician));
    } else if (compoundCondition.logic === 'OR') {
        return compoundCondition.conditions.some((cond: any) => evaluateConditionOrCompound(cond, clinician));
    }
    return false;
}

export function evaluateConditionOrCompound(condition: Condition | CompoundCondition, clinician: Clinician): boolean {
    if ('logic' in condition) {
        return evaluateCompoundCondition(condition, clinician);
    } else {
        return evaluate(condition, clinician);
    }
}

export function evaluate(condition: Condition, clinician: Clinician): boolean {
    if (condition.attribute in clinician) {
        const clinicianValue = (clinician as any)[condition.attribute];
        switch (condition.operator) {
        case '==':
            return clinicianValue === condition.value;
        case '>=':
            return clinicianValue >= condition.value;
        case '<=':
            return clinicianValue <= condition.value;
        case '>':
            return clinicianValue > condition.value;
        case '<':
            return clinicianValue < condition.value;
        default:
            return false;
        }
    }
    return false;
}