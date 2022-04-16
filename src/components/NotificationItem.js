import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants";

const NotificationItem = ({ isRead = false }) => {
  let mail = (
    <Ionicons
      name="mail-sharp"
      size={35}
      color={isRead ? Colors.accent200 : Colors.accent100}
    />
  );

  if (isRead) {
    mail = (
      <Ionicons
        name="mail-open-sharp"
        size={35}
        color={isRead ? Colors.accent200 : Colors.accent100}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View>{mail}</View>
      <View style={{ width: "85%", marginLeft: 10 }}>
        <Text
          style={[
            {
              fontWeight: "bold",
              fontSize: 18,
              color: isRead ? Colors.accent200 : Colors.accent100,
            },
          ]}
          numberOfLines={1}
        >
          Easter Discount
        </Text>
        <Text
          style={[
            {
              fontSize: 16,
              color: isRead ? Colors.accent200 : Colors.accent100,
            },
          ]}
          numberOfLines={1}
        >
          Get a 50% discount on all subscriptions between 15th April and 30th
          April. Happy Easter from the READER team.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default NotificationItem;
