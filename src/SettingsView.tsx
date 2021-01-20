import React from 'react';
import { View } from 'react-native';
import UserStore from './store/UserStore';
import Text from './text';
import { Button } from 'react-native-elements';

interface Props {
  store: UserStore;
}

export default ({ store }: Props) => {
  return (
    <View>
      <Text>
        Settings
      </Text>
      <Button title="Fuck it" onPress={() => {
        store.reset();
      }}/>
    </View>
  );
};

