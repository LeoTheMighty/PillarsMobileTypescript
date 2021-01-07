import React from 'react';
import { StyleSheet, View } from 'react-native';
import PillarsView from './PillarsView';
import UserStore from "./store/UserStore";

/*



 */

export default ({ store }: { store: UserStore }) => {
  return (
    <View style={styles.container}>
      <PillarsView store={store} />
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

