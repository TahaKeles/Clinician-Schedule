import { PolicyFlow } from './policyFlow';
import { Clinician } from './clinician';
import { ActionExecutor } from '../utils/actionExecutor';
import {  evaluateConditionOrCompound } from '../utils/conditionEvaluators';


export class PolicyEngine {
    private policyFlows: PolicyFlow[];
    private clinicians: Clinician[];

    constructor(policyFlows: PolicyFlow[], clinicians: Clinician[]) {
        this.policyFlows = policyFlows;
        this.clinicians = clinicians;
    }

    evaluateAndExecute() {
        for (const policyFlow of this.policyFlows) {
            for (const clinician of this.clinicians) {
                if (evaluateConditionOrCompound(policyFlow.conditions, clinician)) {
                    for (const action of policyFlow.actions) {
                        ActionExecutor.execute(action, clinician);
                    }
                }
            }
        }
    }
}
