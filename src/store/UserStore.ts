import { action, computed, makeObservable, observable, } from "mobx";
import { User } from '../types';
import PillarStore from "./PillarStore";
import UserBuilder from './UserBuilder';

export default class UserStore {
  @observable name: string;
  @observable pillars: PillarStore[];

  constructor() {
    this.name = '';
    this.pillars = [];
    makeObservable(this);
  }

  init(user: User) {
    this.name = user.name;
    this.pillars = [];
    for (let i = 0; i < user.pillars.length; i++) {
      this.pillars.push(new PillarStore(user.pillars[i]));
    }
  }

  @action
  setName(name: string) {
    this.name = name;
    this.save();
  }

  getUser(): User {
    return {
      name: this.name,
      pillars: this.pillars,
    }
  }

  private save() {
    UserBuilder.saveUser(this.getUser()).then(() => {
      console.log("Save user succeeded!");
    }).catch((error) => {
      console.error(`Save user failed: ${error}`);
    });
  }
}
