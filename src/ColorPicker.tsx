import React from 'react';
import { StyleSheet } from 'react-native';
import { fromHsv, TriangleColorPicker } from 'react-native-color-picker';
import { HsvColor } from 'react-native-color-picker/dist/typeHelpers';

interface Props {
  defaultColor: string;
  onColorChange: (color: string) => void;
}

export default ({ defaultColor, onColorChange }: Props) => {
  return (
    <TriangleColorPicker
      defaultColor={defaultColor}
      onColorChange={(hsv: HsvColor) => onColorChange(fromHsv(hsv))}
      hideControls
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
  }
});