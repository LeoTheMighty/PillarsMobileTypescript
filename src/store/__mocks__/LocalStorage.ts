// MOCK
import { User } from '../../types';

/**
 * Mock implementation of LocalStorage!
 */
export default class LocalStorage {
  static async loadUser(): Promise<User | null> {
    return {
      name: 'Leo',
      pillars: [{
        name: 'test pillar',
        description: 'test description',
        color: 'red',
        timeCreated: 'time!',
        submissions: []
      }],
    };
  }
  static async saveUser() {

  }
}
