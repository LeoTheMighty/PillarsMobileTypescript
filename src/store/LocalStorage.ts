import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

/**
 * Basically my way of separating the AsyncStorage stuff from
 * everything else. Lord help me i know this is kinda like a
 * grab-bag class, but I'm okay with that
 */
export default class LocalStorage {
  static async saveUser(userString: string) {
    return this.save('user', userString);
  }

  static async loadUser(): Promise<User | null> {
    const userString = await this.load('user');
    return userString ? JSON.parse(userString) : null;
  }

  // Low Level Local Storage (kinda pointless but whatever)
  static async save(key: string, value: string) {
    return AsyncStorage.setItem(key, value);
  }

  static async load(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }
}