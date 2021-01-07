import React, {useState} from 'react';
import Text from './text';
import {Button, Input} from "react-native-elements";
import UserStore from "./store/UserStore";

interface Props {
  callback: () => void;
  store: UserStore;
}

export default ({ callback, store }: Props) => {
  const [name, setName] = useState<string | null>(null);

  return (
    <Text>
      What's your name fam
      <Input onChangeText={text => setName(text)}/>
      <Button title="What's my name?" onPress={() => {
        if (name) {
          store.setName(name);
          callback();
        }
      }}/>
    </Text>
  );
};