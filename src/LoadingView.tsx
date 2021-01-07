import React from 'react';
import { View } from 'react-native';
import { Image } from "react-native-elements";
import Text from './text';

export default () => (
  <View>
    <Image style={{width: 200, height: 200}} source={{ uri: "https://i.pinimg.com/originals/56/5f/67/565f67a9185ff39611b3cb88ff458df0.png" }} />
    <Text> Loading... </Text>
  </View>
);
