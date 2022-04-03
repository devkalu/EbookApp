import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const SecondaryButton = ({
  color,
  title = "Button",
  width,
  onPress = () => {
    console.log("Presssed");
  },
}) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <View style={[styles.buttonConatainer, { borderColor: color, width }]}>
        <Text style={[styles.textStyle, { color }]}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonConatainer: {
    borderWidth: 2,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "800",
  },
});

export default SecondaryButton;
