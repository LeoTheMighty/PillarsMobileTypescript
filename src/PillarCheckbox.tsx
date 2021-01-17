import React from 'react';
import { CheckBox, Icon } from 'react-native-elements';

interface Props {
  color: string;
  onPress: () => void;
  checked: boolean;
}

export default ({ color, checked, onPress }: Props) => (
  <CheckBox
    checked={checked}
    // checkedIcon="check-circle"
    checkedColor={color}
    checkedIcon={(
      <Icon
        name="check-circle"
        type="font-awesome-5"
        color={color}
        solid
      />
    )}
    // uncheckedIcon="check-circle"
    uncheckedIcon={(
      <Icon
        name="check-circle"
        type="font-awesome-5"
        color="gray"
      />
    )}
    onPress={onPress}
  />
);