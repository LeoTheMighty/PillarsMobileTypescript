import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={style.centeredView}>
      <Text>
        What's your name fam
      </Text>
      <Input placeholder="Hello" onChangeText={text => setName(text)} style={{ flex: 1 }}/>
      <Button title="What's my name?" onPress={() => {
        if (name) {
          store.setName(name);
          callback();
        }
      }} style={{ flex: 1 }}/>
    </View>
  );
};

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    flexDirection: 'column',
  },
});