import React from 'react';
import { User } from '../src/types';
import UserStore from '../src/store/UserStore';
import LocalStorage from '../src/store/LocalStorage';
jest.mock('../src/store/LocalStorage');
const mockedLocalStorage = LocalStorage as jest.Mock<LocalStorage>;


jest.mock('../src/store/LocalStorage', () => {
  return class LocalStorage {
    static async loadUser(): Promise<User | null> {
      return {
        name: 'Leo',
        pillars: [{
          name: 'test pillar',
          description: 'test description',
          color: 'red',
          timeCreated: 'time!',
          submissions: []
        }]
      }
    }
  }
});

describe('UserStore', () => {
  let store: UserStore | null;
  beforeEach(() => {
    LocalStorage.mockImplementation(() => {

    });
    store = new UserStore();
  });

  it('should load correctly', async () => {
    expect(await store!.load()).toBeTruthy();
  });
});

