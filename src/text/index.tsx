import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  style?: any
  children?: React.ReactNode;
  onPress?: () => void;
}

export default (props: Props) => {
  return (
    <Text style={[getStyle(), props.style]} {...props}>
      {props.children}
    </Text>
  )
};

const getStyle = () => StyleSheet.create({
  text: {
    fontWeight: 'normal',
    fontSize: 20,
  }
}).text;
