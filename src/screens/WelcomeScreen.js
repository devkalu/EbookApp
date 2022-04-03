import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
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
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/book.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.welcomeText}>READER</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            color="#fff"
            title="Short Tour"
            width={320}
            textColor={"#222f3d"}
            onPress={() => navigation.navigate("Onboarding")}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              width: "80%",
            }}
          >
            <SecondaryButton color={"#fff"} width={140} title="Login" />
            <SecondaryButton color={"#fff"} width={140} title="Register" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#4DE1A7",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    top: "65%",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  welcome: {
    alignItems: "center",
    top: "40%",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 5,
  },
});

export default WelcomeScreen;
