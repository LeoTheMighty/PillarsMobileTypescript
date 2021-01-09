import React, { ReactNode } from "react";
import { Observer } from 'mobx-react';
import SideMenu from 'react-native-side-menu';
import SidebarMenuView from './SidebarMenuView';
import UserStore from './store/UserStore';
import ViewStore from './store/ViewStore';
import { SidebarRef } from './types';
import { Animated } from 'react-native';

interface Props {
  children: ReactNode;
  store: UserStore;
  viewStore: ViewStore;
}

// let sidebarRef: SidebarRef = {
//   open: () => alert('opening!'),
//   close: () => alert('closing!'),
//   state: {
//     open: null
//   }
// };

export default ({ children, store, viewStore }: Props) => {
  // useEffect(() => {
    // if (sidebarRef) {
    //   alert(`update! ${JSON.stringify(sidebarRef.state)}`);
    //   viewStore.setSidebarOpen(sidebarRef.state.open === 'left');
    // }
  // }, [sidebarRef.state.open]);

  return (
    <Observer>
      {() => (
        <SideMenu
          isOpen={viewStore.sidebarOpen}
          onChange={isOpen => viewStore.setSidebarOpen(isOpen)}
          disableGestures
          menu={(<SidebarMenuView store={store} viewStore={viewStore} />)}
          menuPosition="left"
          // TODO: Necessary because of existing problem in the repo not fixed yet
          animationFunction={(prop, value) =>
            Animated.spring(prop, {
              toValue: value,
              friction: 20,
              useNativeDriver: true,
            })
          }
        >
          { children }
        </SideMenu>
      )}
    </Observer>
  );
};