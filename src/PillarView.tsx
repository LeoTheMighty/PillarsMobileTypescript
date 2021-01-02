import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import CheckBox from './CheckBox.js';
import PillarDetailView from './PillarDetailView';
import Example from './Example';
import { Overlay } from 'react-native-elements';

export default (props: { pillar: Pillar }) => {
  const { pillar } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {setModalOpen(true); return true}}
        style={getPillarStyle(pillar.color, 50)}
      >
        <TouchableHighlight onPress={() => setModalOpen(true)} style={{flex: 1}}>
          <Text>
            touch me
          </Text>
        </TouchableHighlight>
      </View>
      <Overlay
        isVisible={modalOpen}
        onBackdropPress={() => setModalOpen(false)}
        overlayStyle={styles.modalView}
      >
        <PillarDetailView pillar={pillar} />
      </Overlay>
    </>
  );
};

const getPillarStyle = (color: string, percent: number) => StyleSheet.create({
  pillar: {
    alignContent: 'flex-end',
    flex: 2,
    maxWidth: 50,
    height: `${percent}%`,
    backgroundColor: color,
  },
}).pillar;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: "75%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
});
