import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Pillar } from './types';
import PillarDetailView from './PillarDetailView';
import { Overlay } from 'react-native-elements';
import UserStore from "./store/UserStore";
import AddPillarModalView from './AddPillarModalView';
import commonStyles from './styles';

export default ({ compKey, store } : { store: UserStore, compKey: number }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        onStartShouldSetResponder={() => {
          // setModalOpen(true);
          return true;
        }}
        style={styles.pillar}
        key={compKey}
      >
        <TouchableHighlight onPress={() => setModalOpen(true)} style={{flex: 1}}>
          <Text>
            +
          </Text>
        </TouchableHighlight>
      </View>
      <Overlay
          isVisible={modalOpen}
          onBackdropPress={() => {
              setModalOpen(false);
          }}
          overlayStyle={commonStyles.modalView}
      >
          <AddPillarModalView store={store} />
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  pillar: {
    // alignContent: 'flex-start',
    flex: 1,
    width: 50,
    height: '75%',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 1.5,
    marginTop: 10,
    alignContent: 'flex-start',
    justifyContent: 'center'
  },
});
