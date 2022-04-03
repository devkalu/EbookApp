import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PrimaryButton = ({
  gradient = false,
  title = "Button",
  color = "#fff",
  textColor = "#000",
  width = 100,
  onPress = () => {
    console.log("Presssed");
  },
}) => {
  return (
    <View>
      {gradient ? (
        <LinearGradient
          colors={["rgba(64,202,186,0.9)", "rgba(80,225,166,0.9)"]}
          style={styles.background}
          start={[0, 1]}
          end={[1, 0]}
        />
      ) : null}
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: gradient ? "transparent" : color, width },
          ]}
        >
          <Text style={styles.textStyle}>{title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 15,
  },
});

export default PrimaryButton;
