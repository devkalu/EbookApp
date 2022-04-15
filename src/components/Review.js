import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Stars from "./Stars";
import { Colors } from "../constants";

const Review = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          borderBottomColor: Colors.accent200,
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <View style={styles.rating}>
          <Text style={styles.name}>Jane Doe</Text>
          <Stars ratingParam={4} starSize={15} />
        </View>
        <Text numberOfLines={3}>
          One of the best books i have read on the subject, I would say the
          author is very enlightened on the Subject
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  name: {
    fontSize: 16,

    fontWeight: "600",
    marginTop: 5,
  },
  rating: {
    flexDirection: "row",

    justifyContent: "space-between",
    flex: 1,
  },
});

export default Review;
