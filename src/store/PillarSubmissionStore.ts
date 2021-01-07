import {observable} from "mobx";
import {PillarSubmission} from "../types";

export default class PillarSubmissionStore implements PillarSubmission {
  @observable value: number;
  @observable time_submitted: string;

  constructor(submission: PillarSubmission) {
    this.value = submission.value;
    this.time_submitted = submission.time_submitted;
  }
}
