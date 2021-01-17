import { action, observable } from "mobx";
import { Pillar, PillarSubmission } from "../types";
import PillarSubmissionStore from "./PillarSubmissionStore";
import { parseISOString } from '../logic/TimeHelper';

export default class PillarStore implements Pillar {
  @observable color: string;
  @observable description: string;
  @observable name: string;
  @observable timeCreated: string;
  @observable type: string | undefined;
  @observable index: number;
  @observable submissions: PillarSubmissionStore[];

  constructor(pillar: Pillar) {
    this.color = pillar.color;
    this.name = pillar.name;
    this.description = pillar.description;
    this.timeCreated = pillar.timeCreated;
    this.index = pillar.index;
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

  toPillar(): Pillar {
    return {
      name: this.name,
      description: this.description,
      color: this.color,
      timeCreated: this.timeCreated,
      type: this.type,
      index: this.index,
      submissions: this.submissions.map((s: PillarSubmissionStore) => s.toPillarSubmission()),
    };
  }

  validatePillar(): boolean {
    parseISOString(this.timeCreated);
    let previousTime = '';
    for (let i = 0; i < this.submissions.length; i++) {
      const submission = this.submissions[i];

    }
  }
}

