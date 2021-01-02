import { observable } from "mobx";
import { User } from '../types';

export default class UserStore {
  @observable user: User;

  constructor() {
    this.user = {
      name: 'Leo',
      pillars: [],
    }
  }

  get userName(): string {
    return this.user.name;
  }

  get userPillars() {
    return this.user.pillars;
  }
}
