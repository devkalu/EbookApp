import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { PrimaryColor } from "../constants";

const Stars = ({ ratingParam = 0, isEditable = false, starSize = 20 }) => {
  const [rating, setRating] = useState(ratingParam);
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    setRating(ratingParam);
  }, [ratingParam, isEditable, starSize]);

  const fillStars = (
    <Ionicons name="ios-star-sharp" size={starSize} color={PrimaryColor} />
  );
  const emptyStars = (
    <Ionicons name="ios-star-outline" size={starSize} color={PrimaryColor} />
  );

  const handleStarPress = (index) => {
    if (isEditable) {
      setRating(index + 1);
    }
  };

  const CustomRatingStars = () => {
    return (
      <View style={styles.stars}>
        {stars.map((star, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleStarPress(index)}
              activeOpacity={isEditable ? 0.7 : 1}
              key={star}
            >
              {star <= rating ? fillStars : emptyStars}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <CustomRatingStars />
    </View>
  );
};

const styles = StyleSheet.create({
  stars: {
    flexDirection: "row",
    marginVertical: 5,
  },
});

export default Stars;
