import {
  View,
  Animated,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";

const ModalContainer = ({ visibility, children, toggleModal }) => {
  const [modalVisible, setModalVisible] = useState(visibility);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleVisibility();
  }, [visibility, modalVisible, toggleModal]);

  const toggleVisibility = () => {
    if (visibility) {
      setModalVisible(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setModalVisible(false);
    }
  };

  return (
    <Modal transparent visible={modalVisible}>
      <BlurView style={styles.modalBackground} intensity={50}>
        <Animated.View
          style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}
        >
          <View style={styles.close}>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleModal}>
              <AntDesign name="closecircle" size={35} color="black" />
            </TouchableOpacity>
          </View>
          {children}
        </Animated.View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  close: {
    position: "absolute",
    top: -10,
    alignSelf: "flex-end",
    right: -10,
  },
});

export default ModalContainer;
