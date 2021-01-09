import React, {useEffect, useState} from 'react';
import { Observer } from 'mobx-react';
import App from './src';
import StartView from "./src/StartView";
import LoadingView from "./src/LoadingView";
import UserStore from "./src/store/UserStore";
import UserBuilder from "./src/store/UserBuilder";
import ViewStore from './src/store/ViewStore';

const viewStore = new ViewStore();
const store = new UserStore();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      UserBuilder.loadUser().then((user) => {
        if (user) {
          viewStore.setIsStarting(false);
          store.init(user);
        } else {
          viewStore.setIsStarting(true);
        }
        viewStore.setIsLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <Observer>
      {() => {
        if (viewStore.isLoading) return (<LoadingView />);
        return (viewStore.isStarting ?
            (<StartView callback={() => viewStore.setIsStarting(false)} store={store} />) :
            (<App store={store} viewStore={viewStore} />)
        );
      }}
    </Observer>
  )
};
