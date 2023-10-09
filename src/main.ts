import * as fs from 'fs';
import { PolicyEngine } from './models/policyEngine';
import { PolicyFlow } from './models/policyFlow';
import { Clinician } from './models/clinician';
import * as path from 'path';

function main(): void {
    // Load PolicyFlow JSON
    const policyFlowData = fs.readFileSync(path.join(__dirname, '../data/policyFlowExample.json'), 'utf-8');
    const policyFlows: PolicyFlow[] = JSON.parse(policyFlowData).policyFlows;

    // Load Clinician JSON
    const clinicianData = fs.readFileSync(path.join(__dirname, '../data/clinicianExample.json'), 'utf-8');
    const clinicians: Clinician[] = JSON.parse(clinicianData).clinicians;

    // Create a PolicyEngine object and execute it
    const policyEngine = new PolicyEngine(policyFlows, clinicians);
    policyEngine.evaluateAndExecute();
}

main();