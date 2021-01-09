import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import PillarDetailView from './PillarDetailView';
import styles from './styles';
import { Overlay } from 'react-native-elements';
import { getCurrentPillarValue } from './logic/PillarHelper';

export default (props: { pillar: Pillar, compKey: number }) => {
  const { compKey, pillar } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {setModalOpen(true); return true}}
        style={getPillarStyle(pillar.color, getCurrentPillarValue(pillar))}
        key={compKey}
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
    backgroundColor: color,
  },
}).pillar;

