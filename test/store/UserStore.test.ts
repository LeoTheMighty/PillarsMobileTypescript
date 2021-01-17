// import { User } from '../src/types';
import UserStore from '../../src/store/UserStore';
// import LocalStorage from '../src/store/LocalStorage';
jest.mock('../src/store/LocalStorage');

// LocalStorage.loadUser = jest.fn().mockImplementationOnce(async () => {
//   throw new Error('Oh no! anyways...');
// });
describe('UserStore', () => {
  let store: UserStore | null;
  beforeEach(() => {
    store = new UserStore();
  });

  it('should load correctly', async () => {
    expect(await store!.load()).toBeTruthy();
  });
});

