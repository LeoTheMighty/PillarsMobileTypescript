import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import UserStore from './store/UserStore';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import { Button, Input } from 'react-native-elements';
import { Pillar } from './types';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import { randomColor } from './logic/RandomHelper';
import { nowString } from './logic/TimeHelper';

interface Props {
  store: UserStore;
}

const savePillar = (pillar: Pillar | null, store: UserStore) => {
  if (pillar) {
    store.addPillar(pillar);
  } else {
    console.error("Failed validations!");
  }
}

export default ({ store }: Props) => {
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
      description: 'who cares',
      color,
      timeCreated: nowString(),
      submissions: [],
    };
  };

  return (
    <View style={[styles.container, { borderColor: color }]}>
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
      <TriangleColorPicker
        onColorChange={(hsv: HsvColor) => setColor(fromHsv(hsv))}
        hideSliders
        hideControls
        style={{ flex: 1 }}
      />
      <Button
        title="Save"
        onPress={() => savePillar(getPillar(), store)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    width: 200,
    height: 200,
    flex: 1
  }
});