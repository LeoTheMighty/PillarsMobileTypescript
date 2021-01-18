import { action, observable } from 'mobx';
import { PillarSubmission } from '../types';
import { parseISOString } from '../logic/TimeHelper';

export default class PillarSubmissionStore implements PillarSubmission {
  @observable value: number;
  @observable timeSubmitted: string;

  constructor(submission: PillarSubmission) {
    this.value = submission.value;
    this.timeSubmitted = submission.timeSubmitted;
  }

  @action
  updateValue(value: number) {
    this.value = value;
  }

  toPillarSubmission(): PillarSubmission {
    return {
      value: this.value,
      timeSubmitted: this.timeSubmitted,
    };
  }

  validateSubmission(): boolean {
    parseISOString(this.timeSubmitted);
    return this.value >= 0 && this.value <= 1;
  }
}
