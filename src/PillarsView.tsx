import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import { Pillar } from './types';
import PillarView from './PillarView';
import { mockUser } from './MockValues';

export default () => {
  const pillars: Pillar[] = mockUser.pillars;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
          {_.times((2 * pillars.length) - 1, (i) => {
            return (i % 2 == 0) ?
              (<PillarView pillar={pillars[i / 2]} key={i}/>) :
              (<View style={{flex: 1}} key={i}/>)
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    borderColor: 'grey',
    borderWidth: 1
  },
  scrollView: {
    flex: 1,
    height: '100%',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
