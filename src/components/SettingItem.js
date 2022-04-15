import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { Colors } from "../constants";

const SettingItem = ({
  title,
  Icon,
  iconName,
  iconSize = 20,
  hasNavigation = true,
}) => {
  return (
    <View style={{ borderBottomColor: Colors.accent200, borderBottomWidth: 1 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          marginTop: 10,
        }}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View>
              <Icon name={iconName} size={iconSize} color={Colors.primary100} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          {hasNavigation && (
            <Feather name="chevron-right" size={30} color="black" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SettingItem;
