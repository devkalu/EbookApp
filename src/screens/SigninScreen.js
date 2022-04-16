import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Header, SigninForm } from "../components";

const SigninScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <SigninForm
        onPress={() => navigation.navigate("SignupWelcomeStack")}
        homeNavigation={() => navigation.navigate("Category")}
      />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default SigninScreen;
