import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import PillarDetailView from './PillarDetailView';
import styles from './styles';
import { Overlay } from 'react-native-elements';
import { getCurrentPillarValue } from './logic/PillarHelper';
import UserStore from './store/UserStore';

interface Props {
  pillar: Pillar;
  compKey: number;
  store: UserStore;
}

export default ({ pillar, compKey: key, store }: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {setModalOpen(true); return true}}
        style={getPillarStyle(pillar.color, getCurrentPillarValue(pillar))}
        key={key}
      >
        <TouchableHighlight onPress={() => setModalOpen(true)} style={{flex: 1}}>
          <Text>
            {pillar.name}
          </Text>
        </TouchableHighlight>
      </View>
      <Overlay
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        overlayStyle={styles.modalView}
      >
        <PillarDetailView pillar={pillar} />
      </Overlay>
    </>
  );
};

const getPillarStyle = (color: string, percent: number) => StyleSheet.create({
  pillar: {
    alignContent: 'flex-start',
    flex: 1,
    width: 50,
    height: `${percent * 100}%`,
    minHeight: 20,
    backgroundColor: color,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
}).pillar;

