import React from 'react';
import Text from './index';
import { StyleSheet } from 'react-native';

interface Props {
  style?: any
  children?: React.ReactNode;
  onPress?: () => void;
}

export default (props: Props) => {
  return (
    <Text style={[getStyle(), props.style]} onPress={props.onPress}>
      {props.children}
    </Text>
  )
};

const getStyle = () => StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }
}).text;
