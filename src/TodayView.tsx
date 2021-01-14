import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Rating, Slider } from 'react-native-elements';
import UserStore from './store/UserStore';
import Header from './text/Header';
import Text from './text';

interface Props {
  store: UserStore;
}

/**
 * Shows the information for what you've done today.
 *
 * @param store
 */
export default ({ store }: Props) => {
  const [checkedNumber, setCheckedNumber] = useState<number>(0);
  const [numberOfPillars, setNumberOfPillars] = useState<number>(0);

  useEffect(() => {
    setNumberOfPillars(store.pillars.length);
    let n = 0;
    for (let i = 0; i < store.pillars.length; i++) {
      if (store.pillars[i].isSubmitted()) {
        n++;
      }
    }
    setCheckedNumber(n);
  }, [store.pillars]);

  return (
    <View style={styles.container}>
      <Header>
        Today
      </Header>
      {numberOfPillars !== 0 ?
        (<Slider
          minimumValue={0}
          maximumValue={numberOfPillars}
          value={checkedNumber}
          thumbStyle={{ backgroundColor: 'transparent' }}
        />) :
        <Text> Create a Pillar to see your progress! </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  ratingView: {
    backfaceVisibility: 'hidden',
  }
});