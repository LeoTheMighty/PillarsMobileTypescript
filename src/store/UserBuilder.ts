import {User} from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class UserBuilder {
  static createUser(name: string): User {
    return {
      name,
      pillars: [],
    }
  }

  static async loadUser(): Promise<User | null> {
    const userString = await this.load();
    if (userString) {
      alert(`Found user! ${userString}`)
      return JSON.parse(userString);
    }
    else {
      alert('no user found')
      return null
    }
  }

  static async saveUser(user: User) {
    const userString = JSON.stringify(user);
    return this.save(userString)
  }

  // Local Storage
  static async save(userString: string) {
    return AsyncStorage.setItem('user', userString);
  }

  static async load(): Promise<string | null> {
    return AsyncStorage.getItem('user');
  }
}