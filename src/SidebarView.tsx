import React, {ReactNode, useState} from "react";
// @ts-ignore
import Sidebar from 'react-native-sidebar';
import SidebarDetailView from './SidebarDetailView';
import UserStore from './store/UserStore';

export default ({ children, store }: { children: ReactNode, store: UserStore }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sidebar
      open={open}
      leftSidebar={(<SidebarDetailView store={store} />)}
      style={{ flex: 1, backgroundColor: 'black' }}>
      { children }
    </Sidebar>
  );
};