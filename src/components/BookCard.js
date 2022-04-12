import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const BookCard = () => {
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
      <View style={styles.titleContainer}>
        <Text style={styles.bookTitle} numberOfLines={2}>
          Book Name Book Name Book Name Book Name
        </Text>
      </View>

      <Text style={styles.author}>Author Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width / 2.5,
    height: (width / 2.5) * 1.5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  author: {
    color: "#9f9f9f",
    fontSize: 12,
  },
  bookTitle: {
    fontWeight: "600",
  },
  titleContainer: {
    width: width / 2.5,
  },
  container: {
    marginLeft: 20,
  },
});
export default BookCard;
