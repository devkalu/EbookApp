import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const BookCard = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images-na.ssl-images-amazon.com/images/I/41sfej3EQdL._SX322_BO1,204,203,200_.jpg",
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.bookTitle} numberOfLines={3}>
        Book Name Book Name Book Name Book Name
      </Text>
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
});
export default BookCard;
