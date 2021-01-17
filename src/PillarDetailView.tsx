import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import Text from './text';
import Header from './text/Header';
import { Pillar } from './types';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';

interface Props {
  pillar: Pillar;
}

export default ({ pillar }: Props) => {
  const [color, setColor] = useState<string>(pillar.color);
  return (
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
        onColorChange={(hsv: HsvColor) => console.log(`Color Selected: ${JSON.stringify(hsv)}`)}
        style={{ flex: 1 }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
});
