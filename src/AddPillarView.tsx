import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import UserStore from "./store/UserStore";
import AddPillarModalView from './AddPillarModalView';

export default ({ compKey: key, store } : { store: UserStore, compKey: number }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <View
        style={styles.pillar}
        key={key}
      >
        <TouchableHighlight onPress={() => setModalOpen(true)} style={{flex: 1}}>
          <Text>
            +
          </Text>
        </TouchableHighlight>
      </View>
      <AddPillarModalView open={modalOpen} setOpen={setModalOpen} store={store} />
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
