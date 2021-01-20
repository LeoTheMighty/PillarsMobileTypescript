import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import UserStore from './store/UserStore';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { Button, Divider, Input, Overlay } from 'react-native-elements';
import { Pillar } from './types';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import { randomColor } from './logic/RandomHelper';
import { nowString } from './logic/TimeHelper';
import CommonStyles from './styles';
import ColorPicker from './ColorPicker';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  store: UserStore;
}

const savePillar = (pillar: Pillar | null, store: UserStore) => {
  if (pillar) {
    pillar.index = store.pillars.length;
    store.addPillar(pillar);
  } else {
    console.error("Failed validations!");
  }
}

export default ({ open, setOpen, store }: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [color, setColor] = useState<string>(randomColor());

  const validateValues = (): boolean => {
    if (name === "") return false;
    if (description === "") return false;
    return true;
  };

  const getPillar = (): Pillar | null => {
    if (!validateValues()) return null;
    return {
      name,
      description,
      color,
      index: -1,
      timeCreated: nowString(),
      submissions: [],
    };
  };

  return (
    <Overlay
      isVisible={open}
      onBackdropPress={() => setOpen(false)}
      overlayStyle={[CommonStyles.modalView, { borderColor: color, borderWidth: 10, height: '75%' }]}
    >
      <View style={styles.container}>
        <Input
          onChangeText={(name) => setName(name)}
          label="Put in the Pillar name!"
          style={{ flex: 1 }}
        />
        <Input
          multiline
          onChangeText={(description) => setDescription(description)}
          label="How do you complete it?"
          style={{ flex: 1 }}
        />
        <ColorPicker
          defaultColor={color}
          onColorChange={(color: string) => setColor(color)}
        />
        <Divider/>
        <Button
          title="Save"
          onPress={() => savePillar(getPillar(), store)}
          containerStyle={{ width: '100%' }}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 3,
    // borderRadius: 10,
    // flexDirection: 'column',
    width: 200,
    // height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});