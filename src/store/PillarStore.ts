import { action, observable } from "mobx";
import { Pillar, PillarSubmission } from "../types";
import PillarSubmissionStore from "./PillarSubmissionStore";
import { isSubmitted } from '../logic/PillarHelper';

export default class PillarStore implements Pillar {
  @observable color: string;
  @observable description: string;
  @observable name: string;
  @observable timeCreated: string;
  @observable type: string | undefined;
  @observable submissions: PillarSubmissionStore[];

  constructor(pillar: Pillar) {
    this.color = pillar.color;
    this.name = pillar.name;
    this.description = pillar.description;
    this.timeCreated = pillar.timeCreated;
    this.submissions = []
    for (let i = 0; i < pillar.submissions.length; i++) {
      this.addSubmission(pillar.submissions[i]);
    }
  }

  @action
  updateValues(pillar: Pillar) {
    this.color = pillar.color;
    this.name = pillar.name;
    this.description = pillar.description;
    // Probably don't want to change this
    // this.timeCreated = pillar.timeCreated;
  }

  @action
  addSubmission(submission: PillarSubmission) {
    this.submissions.push(new PillarSubmissionStore(submission));
  }

  isSubmitted() {
    return isSubmitted(this.toPillar());
  }

  toPillar(): Pillar {
    return {
      name: this.name,
      description: this.description,
      color: this.color,
      timeCreated: this.timeCreated,
      type: this.type,
      submissions: this.submissions.map((s: PillarSubmissionStore) => s.toPillarSubmission()),
    };
  }
}

