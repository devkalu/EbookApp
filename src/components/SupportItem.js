import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { Colors } from "../constants";

const SupportItem = ({ Icon, iconName, titletext, content }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={40} color={Colors.primary100} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{titletext}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  iconContainer: {
    marginRight: 20,
    borderWidth: 2,
    borderColor: Colors.primary100,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
  },
});

export default SupportItem;
