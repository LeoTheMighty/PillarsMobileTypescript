import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import Text from './text';
import Header from './text/Header';
import { Pillar } from './types';

interface Props {
  pillar: Pillar;
}

export default ({ pillar }: Props) => {
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
        onColorSelected={(color) => alert(`Color Selected: ${color}`)}
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
