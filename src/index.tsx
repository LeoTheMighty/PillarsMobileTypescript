import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import PillarsView from './PillarsView';
import UserStore from "./store/UserStore";

/*



 */

export default (props: { store: UserStore }) => {
  return (
    <View style={styles.container}>
      <PillarsView store={props.store} />
    </View>
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

