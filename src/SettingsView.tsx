import React from 'react';
import { View } from 'react-native';
import UserStore from './store/UserStore';
import Text from './text';

interface Props {
  store: UserStore;
}

export default ({ store }: Props) => {
  return (
    <Text>
      Settings
    </Text>
  );
};

