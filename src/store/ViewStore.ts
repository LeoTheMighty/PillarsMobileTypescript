import { action, makeObservable, observable } from 'mobx';
import { Screen, SetStateFunctionParameter, SidebarRef } from '../types';

export default class ViewStore {
  @observable isLoading: boolean;
  @observable isStarting: boolean;
  @observable isChecking: boolean;
  @observable sidebarOpen: boolean;
  @observable screen: Screen;
  sidebarRef: SidebarRef | null;

  constructor() {
    this.isLoading = true;
    this.isStarting = false;
    this.isChecking = false;
    this.sidebarOpen = false;
    this.sidebarRef = null;
    this.screen = Screen.Main;
    makeObservable(this);
  }

  @action
  setIsLoading(isLoading: SetStateFunctionParameter<boolean>) {
    this.isLoading = (typeof isLoading === 'boolean') ? isLoading : isLoading(this.isLoading);
  }

  @action
  setIsStarting(isStarting: SetStateFunctionParameter<boolean>) {
    this.isStarting = (typeof isStarting === 'boolean') ? isStarting : isStarting(this.isStarting);
  }

  @action
  setIsChecking(isChecking: SetStateFunctionParameter<boolean>) {
    this.isChecking = (typeof isChecking === 'boolean') ? isChecking : isChecking(this.isChecking);
  }

  @action
  setSidebarOpen(open: SetStateFunctionParameter<boolean>) {
    this.sidebarOpen = (typeof open === 'boolean') ? open : open(this.sidebarOpen);
  }

  @action
  setScreen(screen: SetStateFunctionParameter<Screen>) {
    this.setSidebarOpen(false);
    this.screen = (typeof screen === 'number') ? screen : screen(this.screen);
  }
}