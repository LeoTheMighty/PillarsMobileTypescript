import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Text from './text';
import _ from 'lodash';
import { Pillar } from './types';
import PillarView from './PillarView';
import {makeMockUser, mockUser} from './MockValues';
import AddPillar from "./AddPillar";
import UserStore from './store/UserStore';
import { Observer } from 'mobx-react';
import { Button } from 'react-native-elements';

const user = makeMockUser(10);
export default ({ store }: { store: UserStore }) => {
  const pillars: Pillar[] = user.pillars;

  return (
    <Observer >
      {() => (
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <ScrollView horizontal style={styles.scrollView} contentContainerStyle={{ alignItems: 'flex-end' }}>
              {_.times(2 * pillars.length, (i) => {
                return (i % 2 == 0) ?
                  (<PillarView pillar={pillars[i / 2]} key={i}/>) :
                  (<View style={{flex: 1, minWidth: 50}} key={i}/>)
              })}
              <AddPillar key={2 * pillars.length} store={store} />
            </ScrollView>
          </SafeAreaView>
        </View>
      )}
    </Observer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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
