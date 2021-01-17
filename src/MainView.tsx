import React from 'react';
import { Observer } from 'mobx-react';
import UserStore from './store/UserStore';
import ViewStore from './store/ViewStore';
import PillarsView from './PillarsView';
import ProfileView from './ProfileView';
import SettingsView from './SettingsView';

interface Props {
  store: UserStore;
  viewStore: ViewStore;
}

export default ({ store, viewStore }: Props) => {
  return (
    <Observer>
      {() => [
        <PillarsView store={store} viewStore={viewStore} />,
        <ProfileView store={store} />,
        <SettingsView store={store} />,
      ][viewStore.screen]}
    </Observer>
  );
};