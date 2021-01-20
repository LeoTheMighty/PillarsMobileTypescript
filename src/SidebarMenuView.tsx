import React from 'react';
import UserStore from "./store/UserStore";
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, ListItem } from 'react-native-elements';
import ViewStore from './store/ViewStore';
import Header from './text/Header';
import { Screen } from './types';
import TodayView from './TodayView';
import Avatar from './Avatar';

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

interface Props {
  store: UserStore;
  viewStore: ViewStore;
}

export default ({ store, viewStore }: Props) => {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Avatar
          uri={uri}
          size={60}
          badgeStatus="success"
          // badgeStatus="error"
          // badgeValue="99+"
          onPress={() => viewStore.setScreen(Screen.Profile)}
          store={store}
        />
        <Header onPress={() => viewStore.setScreen(Screen.Profile)} style={{ marginLeft: 15, flex: 1 }}>
          {store.name}
        </Header>
      </View>
      <ListItem onPress={() => viewStore.setScreen(Screen.Main)} containerStyle={{ backgroundColor: 'transparent' }}>
        <Header
          style={styles.item}
        >
          Home
        </Header>
      </ListItem>
      <ListItem onPress={() => viewStore.setScreen(Screen.Settings)} containerStyle={{ backgroundColor: 'transparent' }}>
        <Header
          onPress={() => viewStore.setScreen(Screen.Settings)}
          style={styles.item}
        >
          Settings
        </Header>
      </ListItem>
      <Divider style={{ marginTop: 10 }} />
      <TodayView store={store} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    // width: window.width,
    // height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    // alignContent: 'flex-start',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 5,
    marginTop: 25,
    marginLeft: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  // name: {
  //   position: 'absolute',
  //   left: 70,
  //   top: 20,
  // },
  item: {
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 5,
    backgroundColor: 'transparent',
    // borderWidth: 2,
    // borderColor: 'black',
  },
});