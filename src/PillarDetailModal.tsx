import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { fromHsv, TriangleColorPicker } from 'react-native-color-picker';
import Text from './text';
import Header from './text/Header';
import { Pillar } from './types';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';
import { Button, Divider, Overlay } from 'react-native-elements';
import CommonStyles from './styles';

interface Props {
  pillar: Pillar;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default ({ open, pillar, setOpen }: Props) => {
  const [color, setColor] = useState<string>(pillar.color);

  return (
    <Overlay
      isVisible={open}
      onBackdropPress={() => setOpen(false)}
      overlayStyle={[CommonStyles.modalView, { borderColor: color, borderWidth: 10, height: '50%' }]}
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
        <TriangleColorPicker
          defaultColor={color}
          onColorChange={(hsv: HsvColor) => setColor(fromHsv(hsv))}
          hideControls
          style={{ flex: 1, width: '125%', height: '125%' }}
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
