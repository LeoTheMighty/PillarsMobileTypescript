import React from 'react';
import UserStore from "./store/UserStore";
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Image } from 'react-native-elements';
import Text from './text';
import ViewStore from './store/ViewStore';
import Header from './text/Header';
import { Screen } from './types';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

interface Props {
  store: UserStore;
  viewStore: ViewStore;
}

export default ({ store, viewStore }: Props) => {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Header style={styles.name}>{store.name}</Header>
      </View>
      <Divider/>
      <Header
        onPress={() => viewStore.setScreen(Screen.Main)}
        style={styles.item}
      >
        Home
      </Header>
      <Divider/>
      <Header
        onPress={() => viewStore.setScreen(Screen.Profile)}
        style={styles.item}
      >
        Profile
      </Header>
      <Divider/>
      <Header
        onPress={() => viewStore.setScreen(Screen.Settings)}
        style={styles.item}
      >
        Settings
      </Header>
      <Divider/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 30,
    fontWeight: '300',
    paddingTop: 5,
    // borderWidth: 2,
    // borderColor: 'black',
  },
});