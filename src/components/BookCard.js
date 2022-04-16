import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
import { Colors } from "../constants";

const BookCard = ({screen=""}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("BookHomeStack")}
    >
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
            Life on the Edge: The Coming of Age of Quantum Biology
          </Text>
        </View>

        <Text style={styles.author}>Johnjoe McFadden</Text>
      </View>
    </TouchableOpacity>
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
    color: Colors.accent200,
    fontSize: 12,
    fontWeight: "300",
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
