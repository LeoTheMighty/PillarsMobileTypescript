import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { Pillar, PillarSubmission } from './types';
import Text from './text';
import PillarCheckbox from './PillarCheckbox';
import { getCurrentPillarValue, isSubmitted } from './logic/PillarHelper';
import UserStore from './store/UserStore';
import PillarDetailModal from './PillarDetailModal';
import { complementaryColor } from './logic/ColorHelper';
import { mountConfirmationModal } from './components/Modal';
import ViewStore from './store/ViewStore';
import { LOG } from './Constants';

interface Props {
  pillar: Pillar;
  isChecking: boolean;
  compKey: number;
  viewStore: ViewStore;
}

export default ({ pillar, compKey: key, isChecking, viewStore }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setChecked(isSubmitted(pillar));
  }, [pillar]);

  const check = () => {
    // You either check it with a new submission.
    // Or if it is already checked, you open up a new confirmation modal
    if (checked) {
      LOG && console.log('Got into it');
      mountConfirmationModal(viewStore).then((choice) => {
        if (choice) {
          setChecked(false);
        }
      });
      LOG && console.log('Got out of it at least..?');
    }
    else {
      setChecked(true);
    }
  };

  return (
    <>
      <View
        style={[getPillarStyle(pillar.color, getCurrentPillarValue(pillar)), { minHeight: isChecking ? 50 : 20 }]}
        key={key}
      >
        <TouchableHighlight
          onPress={() => {
            return isChecking ?
              setChecked(v => !v) :
              setDetailModalOpen(true);
          }}
          style={{flex: 1, flexDirection: 'column-reverse'}}
        >
          <>
            <Text>
              {pillar.name}
            </Text>
            { isChecking && (
              <PillarCheckbox
                color={complementaryColor(pillar.color)}
                checked={checked}
                onPress={check}
              />
            )}
          </>
        </TouchableHighlight>
      </View>
      <PillarDetailModal pillar={pillar} open={detailModalOpen} setOpen={setDetailModalOpen} />
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

