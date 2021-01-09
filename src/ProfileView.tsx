import React from 'react';
import { View } from 'react-native';
import Text from './text';
import UserStore from './store/UserStore';

interface Props {
  store: UserStore;
}

export default ({ store }: Props) => {
  return (
    <Text>
      Profile
    </Text>
  );
};