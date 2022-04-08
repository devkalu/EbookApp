import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SecondaryColor } from "../constants";

const { width } = Dimensions.get("window");

const CategoryCard = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    height: width / 2 - 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
    paddingVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: width / 4.5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: SecondaryColor,
  },
});

export default CategoryCard;
