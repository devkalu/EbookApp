import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SecondaryColor } from "../constants";

const PrimaryButton = ({
  gradient = false,
  title = "Button",
  color = "#fff",
  textColor = "#000",
  width = 100,
  textSize = 14,
  buttonHeight = 50,
  onPress = () => {
    console.log("Presssed");
  },
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View
        style={[
          styles.container,
          { height: buttonHeight, borderRadius: buttonHeight / 2 },
        ]}
      >
        {gradient ? (
          <LinearGradient
            colors={["rgba(64,202,186,0.95)", "rgba(80,225,166,0.95)"]}
            style={styles.background}
            start={[0, 1]}
            end={[1, 0]}
          />
        ) : null}

        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: gradient ? "transparent" : color,
              width,
            },
          ]}
        >
          <Text
            style={[styles.textStyle, { color: textColor, fontSize: textSize }]}
          >
            {title.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 25,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },
});

export default PrimaryButton;
