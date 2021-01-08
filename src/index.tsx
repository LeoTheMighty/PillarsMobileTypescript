import React from 'react';
import { StyleSheet, View } from 'react-native';
import PillarsView from './PillarsView';
import UserStore from "./store/UserStore";
import Sidebar from "./SidebarView";

/*



 */

export default ({ store }: { store: UserStore }) => {
  return (
    <Sidebar store={store}>
      <View style={styles.container}>
        <PillarsView store={store} />
      </View>
    </Sidebar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});

