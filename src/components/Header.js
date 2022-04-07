import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryColor } from "../constants";
import { MotiView, MotiText } from "moti";

const Header = () => {
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
        <View style={styles.welcome}>
          <MotiView
            style={styles.imageContainer}
            from={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "timing",
              duration: 1500,
            }}
          >
            <Image
              source={require("../../assets/book.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </MotiView>
          <MotiText
            style={styles.welcomeText}
            delay={200}
            from={{ translateY: -10 }}
            animate={{ translateY: 0 }}
            transition={{
              type: "timing",
              duration: 1500,
            }}
          >
            READER
          </MotiText>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    height: 200,
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  welcome: {
    alignItems: "center",
    marginTop: 70,
  },
  imageContainer: {
    height: 60,
    width: 60,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 5,
  },
});

export default Header;
