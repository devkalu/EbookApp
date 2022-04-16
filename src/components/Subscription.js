import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { PrimaryColor, Colors } from "../constants";

const Subscription = ({ isActive = false, title, price, content }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isActive ? Colors.accent100 : null,
            borderColor: isActive ? "transparent" : Colors.accent200,
            borderWidth: isActive ? 0 : 2,
          },
          isActive ? styles.isActive : null,
        ]}
      >
        <View style={styles.plan}>
          <Text
            style={[
              styles.subscription,
              { color: isActive ? "white" : Colors.accent200 },
            ]}
          >
            {title.toUpperCase()}
          </Text>
          <Text
            style={[
              styles.price,
              { color: isActive ? "white" : Colors.accent200 },
            ]}
          >
            {price.toUpperCase()}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={[
              styles.description,
              { color: isActive ? "white" : Colors.accent200 },
            ]}
          >
            {content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  plan: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    marginTop: 10,
  },
  subscription: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
  },
  isActive: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Subscription;
