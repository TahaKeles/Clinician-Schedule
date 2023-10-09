import { Action } from '../models/action';
import { Clinician } from '../models/clinician';

export class ActionExecutor {
    static execute(action: Action, clinician: Clinician): void {
      console.log(`Clinician ID: ${clinician.id}`);
      if (action.type === 'allocate_points') {
        console.log(`Action: ${action.type}`);
        console.log(`Value: ${action.value}\n`);
      } else if (action.type === 'send_email') {
        console.log(`Action: ${action.type}`);
        console.log(`Message: ${action.message}\n`);
      }
    }
  }
