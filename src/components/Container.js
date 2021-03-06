import { View, StyleSheet } from "react-native";
import React from "react";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { width: "90%", alignSelf: "center", flex: 3 },
});

export default Container;
