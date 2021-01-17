import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import _ from 'lodash';
import { Pillar } from './types';
import PillarView from './PillarView';
import AddPillar from "./AddPillarView";
import UserStore from './store/UserStore';
import { Observer } from 'mobx-react';
import { _randomPillars } from './logic/PillarHelper';
import { Button, Icon } from 'react-native-elements';
import ViewStore from './store/ViewStore';

// const user = makeMockUser(10);
// const pillars: Pillar[] = _randomPillars(5, 20);
export default ({ store, viewStore }: { store: UserStore, viewStore: ViewStore }) => {
  const { pillars } = store;
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <ScrollView horizontal style={styles.scrollView} contentContainerStyle={{ alignItems: 'flex-end' }}>
              {_.times(2 * pillars.length, (i) => {
                return (i % 2 == 0) ?
                  (<PillarView pillar={pillars[i / 2]} key={i} compKey={i} store={store} isChecking={viewStore.isChecking} />) :
                  (<View style={{flex: 1, minWidth: 50}} key={i}/>)
              })}
              <AddPillar key={2 * pillars.length} compKey={2 * pillars.length} store={store} />
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
