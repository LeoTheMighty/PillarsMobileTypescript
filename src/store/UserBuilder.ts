import {User} from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Basically my way of separating the AsyncStorage stuff from
 * everything else. Lord help me i know this is kinda like a
 * grab-bag class, but I'm okay with that
 */
export default class UserBuilder {
  static createUser(name: string): User {
    return {
      name,
      pillars: [],
    }
  }

  static async loadUser(): Promise<User | null> {
    const userString = await this.load();
    if (userString) return JSON.parse(userString);
    return null;
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