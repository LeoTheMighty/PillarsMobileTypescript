import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { fromHsv, TriangleColorPicker } from 'react-native-color-picker';
import Text from './text';
import Header from './text/Header';
import { Pillar } from './types';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import { Button, Divider, Overlay } from 'react-native-elements';
import CommonStyles from './styles';
import ColorPicker from './ColorPicker';
import UserStore from './store/UserStore';

interface Props {
  pillar: Pillar;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const savePillar = (color: string, pillar: Pillar, store: UserStore) => {
  store.editPillar(pillar.index, {
    ...pillar,
    color,
  })
}

export default ({ open, pillar, setOpen }: Props) => {
  const [color, setColor] = useState<string>(pillar.color);

  return (
    <Overlay
      isVisible={open}
      onBackdropPress={() => setOpen(false)}
      overlayStyle={[CommonStyles.modalView, { borderColor: color, borderWidth: 10 }]}
    >
      <View style={styles.container}>
        <Header>
          {pillar.name}
        </Header>
        <Text>
          {"\n"}
          {pillar.color}
        </Text>
        <Text>
          {"\n"}
          {pillar.description}
        </Text>
        <ColorPicker
          defaultColor={color}
          onColorChange={(color: string) => setColor(color)}
        />
        <Divider/>
        <Button title="Save" onPress={() => alert('lmao')} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
  },
});
