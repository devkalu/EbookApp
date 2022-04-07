import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SecondaryColor } from "../constants";

const HeadingText = ({ heading = "" }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingStyle}>{heading.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    color: SecondaryColor,
  },
  headingContainer: {
    marginVertical: 40,
  },
});

export default HeadingText;
