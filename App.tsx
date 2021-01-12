import React, { useEffect } from 'react';
import { Observer } from 'mobx-react';
import App from './src';
import StartView from './src/StartView';
import LoadingView from './src/LoadingView';
import UserStore from './src/store/UserStore';
import ViewStore from './src/store/ViewStore';
import { lmao } from './src/Constants';

const viewStore = new ViewStore();
const store = new UserStore();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      store.load().then((success) => {
        viewStore.setIsStarting(!success);
        viewStore.setIsLoading(false);
      }).catch((error) => {
        console.error(`Error in loading user info: ${error}`);
        viewStore.setIsStarting(true);
        viewStore.setIsLoading(false);
      });
    }, lmao);
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
