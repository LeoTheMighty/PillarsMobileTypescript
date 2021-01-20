import { StyleSheet } from 'react-native';
import { ios } from './Constants';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: "75%",
    minHeight: "50%",
    maxHeight: "80%",
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
  safeAreaView: {
    paddingTop: ios ? 25 : 25,
  }
});