import React from 'react';
import { View } from 'react-native';
import Text from './text';
import UserStore from './store/UserStore';
import { TriangleColorPicker } from 'react-native-color-picker';

interface Props {
  store: UserStore;
}
export default ({ store }: Props) => {
  return (
    <View style={{ width: 200, height: 200, flex: 1 }}>
      <TriangleColorPicker
        onColorSelected={(color) => alert(`Color Selected: ${color}`)}
        hideSliders
        hideControls
        style={{ flex: 1 }}
      />
    </View>
  );
};