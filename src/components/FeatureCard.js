import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { SecondaryColor } from "../constants";

const { width } = Dimensions.get("window");

const FeatureCard = () => {
  return (
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
            Book Name Book Name Book Name Book Name
          </Text>
        </View>
        <View>
          <Text style={styles.author}>Author Name</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Category</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text numberOfLines={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <View>
          <Text>Stars</Text>
          <Rating
            showRating
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
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
  },
  bookTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  categoryContainer: {
    backgroundColor: SecondaryColor,
    padding: 2,
    marginVertical: 5,

    borderRadius: 10,
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
  },
});
export default FeatureCard;
