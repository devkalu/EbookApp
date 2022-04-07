import { View, Text } from "react-native";
import React from "react";
import { Header, SigninForm } from "../components";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <SigninForm
        onPress={() => navigation.navigate("SignupWelcomeStack")}
        homeNavigation={() => navigation.navigate("Tab")}
      />
    </View>
  );
};

export default SigninScreen;
