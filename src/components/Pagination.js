import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
import { PrimaryColor } from "../constants";

const Pagination = ({ data, scrollX }) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    alignSelf: "center",
    marginVertical: 5,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: PrimaryColor,
    marginHorizontal: 5,
  },
});

export default Pagination;
