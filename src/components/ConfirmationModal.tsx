import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import CommonStyles from '../styles';
import Text from '../text';

interface Props {
  onChoose: (choice: boolean) => void;
}

export default ({ onChoose }: Props) => {
  return (
    <Overlay isVisible={true} style={CommonStyles.modalView} onRequestClose={() => onChoose(false)}>
      <View style={styles.container}>
        <Text> What is up lmao </Text>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});