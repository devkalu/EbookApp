import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const SocialButton = ({
  Icon,
  IconName,
  title,
  buttonColor,
  onPress = () => console.log("Button Pressed"),
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: buttonColor }]}>
        <Icon name={IconName} color="#fff" size={18} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderRadius: 25,
    alignItems: "center",

    overflow: "hidden",

    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleStyle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  titleContainer: {
    marginLeft: 20,
  },
});

export default SocialButton;
