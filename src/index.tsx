import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import UserStore from "./store/UserStore";
import Sidebar from "./SidebarView";
import ViewStore from './store/ViewStore';
import MainView from './MainView';

export default ({ store, viewStore }: { store: UserStore, viewStore: ViewStore }) => {
  return (
    <Sidebar store={store} viewStore={viewStore}>
      <View style={styles.container}>
        <SafeAreaView style={styles.floating}>
          <Button
            icon={<Icon name="menu" color="white" />}
            type="clear"
            onPress={() => {
              viewStore.setSidebarOpen(v => !v);
            }}
            style={styles.floatingButton}
          />
        </SafeAreaView>
        <MainView store={store} viewStore={viewStore} />
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
  floating: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 20,
    left: 30,
    zIndex: 5,
  },
  floatingButton: {
    // flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    // top: 40,
    // left: 40,
  }
});

