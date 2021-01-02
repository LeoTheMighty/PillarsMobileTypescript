import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './text';
import Header from './text/Header';
import { Pillar } from './types';

interface Props {
  pillar: Pillar;
}

export default (props: Props) => {
  return (
    <View style={styles.container}>
      <Header>
        {props.pillar.name}
      </Header>
      <Text>
        {"\n"}
        {props.pillar.color}
      </Text>
      <Text>
        {"\n"}
        {props.pillar.description}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
});
