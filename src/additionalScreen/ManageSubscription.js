import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  HeaderSearch,
  Container,
  PrimaryButton,
  Subscription,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants";

const ManageSubscription = () => {
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
    <View style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <HeaderSearch
        title="Manage Subscription"
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
        NavigationLeftIcon={NavigationLeftIcon}
      />
      <Container>
        <Subscription
          isActive={true}
          title="starter"
          content="Access to 5 books monthly"
          price="free"
        />
        <Subscription
          isActive={false}
          title="reader"
          content="Access to 10 books monthly"
          price="$5.00"
        />
        <Subscription
          isActive={false}
          title="scholar"
          content="Access to 20 books monthly"
          price="$10.00"
        />
      </Container>
    </View>
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

export default ManageSubscription;
