import {observable} from "mobx";
import {Pillar} from "../types";
import PillarSubmissionStore from "./PillarSubmissionStore";

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
      this.submissions.push(new PillarSubmissionStore(pillar.submissions[i]));
    }
  }
}

