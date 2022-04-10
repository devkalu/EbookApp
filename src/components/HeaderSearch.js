import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { PrimaryColor } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const HeaderSearch = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/pexels-ricardo-esquivel-1926988.jpeg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(64,202,186,0.9)", "rgba(80,225,166,0.95)"]}
          style={styles.background}
          start={[0, 1]}
          end={[1, 0]}
        />
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    height: 180,
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

export default HeaderSearch;
