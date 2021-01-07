import React, {useEffect, useState} from 'react';
import App from './src';
import StartView from "./src/StartView";
import LoadingView from "./src/LoadingView";
import UserStore from "./src/store/UserStore";
import UserBuilder from "./src/store/UserBuilder";

const store = new UserStore();

export default () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isStarting, setIsStarting] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      UserBuilder.loadUser().then((user) => {
        if (user) {
          setIsStarting(false);
          store.init(user);
        } else {
          setIsStarting(true);
        }
        setIsLoading(false);
      });
    }, 1000);
  }, []);

  if (isLoading) return (<LoadingView />);
  return (isStarting ?
    (<StartView callback={() => setIsStarting(false)} store={store} />) :
    (<App store={store} />)
  );
};
