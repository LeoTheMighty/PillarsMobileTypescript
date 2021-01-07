import AsyncStorage from '@react-native-async-storage/async-storage';
import { observable,  } from "mobx";
import { Pillar, User } from '../types';
import PillarStore from "./PillarStore";

export default class UserStore {
  @observable name: string;
  @observable pillars: PillarStore[];

  constructor() {
    this.name = '';
    this.pillars = [];
  }

  init(user: User) {
    this.name = user.name;
    this.pillars = [];
    for (let i = 0; i < user.pillars.length; i++) {
      this.pillars.push(new PillarStore(user.pillars[i]));
    }
  }

  
}
