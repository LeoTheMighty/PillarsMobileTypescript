import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import Text from './text';
import PillarCheckbox from './PillarCheckbox';
import { getCurrentPillarValue, isSubmitted } from './logic/PillarHelper';
import UserStore from './store/UserStore';
import PillarDetailModal from './PillarDetailModal';
import { complementaryColor } from './logic/ColorHelper';

interface Props {
  pillar: Pillar;
  isChecking: boolean;
  compKey: number;
  store: UserStore;
}

export default ({ pillar, compKey: key, isChecking, store }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setChecked(isSubmitted(pillar));
  }, [pillar]);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {setModalOpen(true); return true}}
        style={[getPillarStyle(pillar.color, getCurrentPillarValue(pillar)), { minHeight: isChecking ? 50 : 20 }]}
        key={key}
      >
        <TouchableHighlight onPress={() => isChecking ? setChecked(v => !v) : setModalOpen(true)} style={{flex: 1, flexDirection: 'column-reverse'}}>
          <>
            <Text>
              {pillar.name}
            </Text>
            { isChecking && (
              <PillarCheckbox color={complementaryColor(pillar.color)} checked={checked} onPress={() => setChecked(v => !v)} />
            )}
          </>
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

