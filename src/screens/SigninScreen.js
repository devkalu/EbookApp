import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Header, SigninForm } from "../components";

const SigninScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <SigninForm
        onPress={() => navigation.navigate("SignupWelcomeStack")}
        homeNavigation={() => navigation.navigate("Tab")}
      />
    </ScrollView>
  );
};

export default SigninScreen;
