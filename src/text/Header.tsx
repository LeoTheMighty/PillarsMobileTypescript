import React from 'react';
import Text from './index';
import { StyleSheet } from 'react-native';

interface Props {
  style?: any
  children?: React.ReactNode;
}

export default (props: Props) => {
  return (
    <Text style={[getStyle(), props.style]}>
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
