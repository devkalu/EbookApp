import { View, Text, ScrollView } from "react-native";
import React from "react";

import { Header, SignupForm } from "../components";

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Header />
      <SignupForm onPress={() => navigation.navigate("SigninWelcomeStack")} />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default SignupScreen;
