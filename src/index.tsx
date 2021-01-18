import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Observer } from 'mobx-react';
import { Button, Icon } from 'react-native-elements';
import UserStore from "./store/UserStore";
import Sidebar from "./SidebarView";
import ViewStore from './store/ViewStore';
import MainView from './MainView';
import CommonStyles from './styles';
import { Screen } from './types';

export default ({ store, viewStore }: { store: UserStore, viewStore: ViewStore }) => {
  return (
    <Observer>
      {() => (
        <Sidebar store={store} viewStore={viewStore}>
          <View style={styles.container}>
            <SafeAreaView style={[CommonStyles.safeAreaView, styles.floatingLeft]}>
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
            {(viewStore.screen === Screen.Main) && (<SafeAreaView style={[CommonStyles.safeAreaView, styles.floatingRight]}>
              <Button
                icon={<Icon name="check" color="white" />}
                type="clear"
                onPress={() => alert('lmaooo')}
                style={styles.floatingButton}
              />
            </SafeAreaView>)}
          </View>
        </Sidebar>
      )}
    </Observer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: window.innerWidth,
    height: window.innerHeight,
    padding: 15,
  },
  floatingLeft: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 20,
    left: 30,
    zIndex: 5,
  },
  floatingRight: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 20,
    right: 30,
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

