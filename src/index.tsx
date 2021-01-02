import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import PillarsView from './PillarsView';

/*



 */

export default () => {
  return (
    <View style={styles.container}>
      <PillarsView />
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

