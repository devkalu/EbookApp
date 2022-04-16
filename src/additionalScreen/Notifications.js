import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  HeaderSearch,
  Container,
  PrimaryButton,
  NotificationItem,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants";

const Notifications = () => {
  const [agree, setAgree] = useState(false);
  const navigation = useNavigation();

  const NavigationLeftIcon = () => {
    return (
      <Ionicons
        name="ios-arrow-back"
        size={32}
        color="white"
        style={{ marginLeft: 10 }}
      />
    );
  };

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <HeaderSearch
        title="Notifications"
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
        NavigationLeftIcon={NavigationLeftIcon}
      />
      <Container>
        <View>
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem isRead={true} />
          <NotificationItem isRead={true} />
          <NotificationItem isRead={true} />
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default Notifications;
