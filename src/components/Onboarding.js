import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React from "react";

import Container from "./Container";

const { width } = Dimensions.get("window");

const Onboarding = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyStyle}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,

    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 350,
    height: 400,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    marginVertical: 10,
  },
  bodyStyle: {
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    marginHorizontal: 20,
  },
  bodyContainer: {
    marginHorizontal: 18,
  },
});

export default Onboarding;
