import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import PillarDetailView from './PillarDetailView';
import { Overlay } from 'react-native-elements';
import UserStore from "./store/UserStore";

export default (props: { store: UserStore, key: number }) => {
  const {key, store} = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {
          // setModalOpen(true);
          return true;
        }}
        style={getPillarStyle('white', 75)}
        key={key}
      >
        <TouchableHighlight onPress={() => setModalOpen(true)} style={{flex: 1}}>
          <Text>
            +
          </Text>
        </TouchableHighlight>
      </View>
      {/*<Overlay*/}
      {/*    isVisible={modalOpen}*/}
      {/*    onBackdropPress={() => {*/}
      {/*        setModalOpen(false);*/}
      {/*    }}*/}
      {/*    overlayStyle={styles.modalView}*/}
      {/*>*/}
      {/*    <PillarDetailView pillar={pillar} />*/}
      {/*</Overlay>*/}
    </>
  );
};

const getPillarStyle = (color: string, percent: number) => StyleSheet.create({
  pillar: {
    // alignContent: 'flex-start',
    flex: 1,
    width: 50,
    height: `${percent}%`,
    backgroundColor: color,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
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
