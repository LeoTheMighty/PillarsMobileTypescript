import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import { getCurrentPillarValue } from './logic/PillarHelper';
import UserStore from './store/UserStore';
import PillarDetailModal from './PillarDetailModal';

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
      <PillarDetailModal pillar={pillar} open={modalOpen} setOpen={setModalOpen} />
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

