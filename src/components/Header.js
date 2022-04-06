import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/pexels-ricardo-esquivel-1926988.jpeg")}
        style={styles.imageBackground}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(64,202,186,0.9)", "rgba(80,225,166,0.95)"]}
          style={styles.background}
          start={[0, 1]}
          end={[1, 0]}
        />
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/book.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text>READER</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  imageBackground: {
    flex: 1,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

export default Header;
