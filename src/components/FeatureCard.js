import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Stars from "./Stars";

import { SecondaryColor } from "../constants";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const FeatureCard = ({ screen = "BookHomeStack", readScreen }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(screen, { screen: readScreen });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images-na.ssl-images-amazon.com/images/I/41sfej3EQdL._SX322_BO1,204,203,200_.jpg",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.bookInfo}>
          <View>
            <Text style={styles.bookTitle} numberOfLines={2}>
              Life on the Edge: The Coming of Age of Quantum Biology
            </Text>
          </View>
          <View>
            <Text style={styles.author}>Johnjoe McFadden</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>Biology</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text numberOfLines={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View>
            <Stars ratingParam={4} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    width: width / 3,
    height: (width / 3) * 1.5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  author: {
    color: "#576774",
    fontSize: 15,
    fontWeight: "300",
  },
  bookTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  categoryContainer: {
    backgroundColor: SecondaryColor,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 5,

    overflow: "hidden",
  },
  categoryText: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: SecondaryColor,
  },
  descriptionContainer: {},
  bookInfo: {
    marginLeft: 20,
    width: width / 2.25,
    alignItems: "flex-start",
  },
});
export default FeatureCard;
