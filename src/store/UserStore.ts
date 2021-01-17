import { action, makeObservable, observable, } from "mobx";
import { Pillar, PillarSubmission, User } from '../types';
import PillarStore from "./PillarStore";
import LocalStorage from './LocalStorage';
import { ERR, LOG } from '../Constants';

export default class UserStore {
  @observable name: string;
  @observable pillars: PillarStore[];

  constructor() {
    this.name = '';
    this.pillars = [];
    makeObservable(this);
  }

  /**
   * Loads the data from storage, and then returns whether this
   * was successful.
   */
  async load(): Promise<boolean> {
    const user = await LocalStorage.loadUser();
    return user ? this.init(user) : false;
  }

  @action
  init(user: User) {
    this.name = user.name;
    this.pillars = [];
    for (let i = 0; i < user.pillars.length; i++) {
      this.addPillar(user.pillars[i]);
    }
    return true;
  }

  @action
  setName(name: string) {
    this.name = name;
    this.save();
  }

  @action
  addPillar(pillar: Pillar) {
    this.pillars.push(new PillarStore(pillar));
    this.save();
  }

  @action
  editPillar(index: number, newPillar: Pillar) {
    this.pillars[index].updateValues(newPillar);
    this.save();
  }

  @action
  addSubmission(pillarIndex: number, submission: PillarSubmission) {
    this.pillars[pillarIndex].addSubmission(submission);
    this.save();
  }

  @action
  deletePillar(index: number) {
    this.pillars = this.pillars.splice(index, 1);
    this.save();
  }

  toString(): string {
    return JSON.stringify(this.toUser());
  }

  toUser(): User {
    return {
      name: this.name,
      pillars: this.pillars.map((s: PillarStore) => s.toPillar()),
    }
  }

  private save() {
    LocalStorage.saveUser(this.toString()).then(() => {
      LOG && console.log("Save user succeeded!");
    }).catch((error) => {
      ERR && console.error(`Save user failed: ${error}`);
    });
  }

  private validateUser() {
    for (let i = 0; i < this.pillars.length; i++) {
      const pillar = this.pillars[i];
      if (i !== pillar.index || !pillar.validatePillar()) {
        return false;
      }
    }
    return true;
  }
}
