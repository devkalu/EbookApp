import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";

const ModalContainer = ({ visibility, children }) => {
  const [modalVisible, setModalVisible] = useState(visibility);
  return (
    <Modal transparent visible={modalVisible}>
      <View style={styles.modalBackground}></View>
    </Modal>
  );
};

const styles = StyleSheet.create({});

export default ModalContainer;
