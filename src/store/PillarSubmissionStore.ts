import { action, observable } from 'mobx';
import { PillarSubmission } from '../types';

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
}
