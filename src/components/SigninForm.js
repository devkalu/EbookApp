import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import React from "react";
import Input from "./Input";
import Container from "./Container";
import HeadingText from "./HeadingText";
import PrimaryButton from "./PrimaryButton";
import SocialButton from "./SocialButton";

const SigninForm = ({ onPress, homeNavigation }) => {
  return (
    <View style={styles.container}>
      <Container>
        <HeadingText heading="Login to Continue" />
        <Input title="Email" />
        <Input title="Password" secureEntry={true} />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            gradient={true}
            title="Login"
            textColor="#fff"
            width={100}
            onPress={homeNavigation}
          />
        </View>
        <Text style={styles.textStyle}>
          Don't have an account?
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.special}> Sign up</Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.orContainer}>
          <Text style={styles.or}>- or -</Text>
        </View>
        <View style={styles.socialButtons}>
          <SocialButton
            Icon={FontAwesome5}
            IconName="facebook"
            title="LOGIN WITH FACEBOOK"
            buttonColor="#517CC0"
          />
          <SocialButton
            Icon={FontAwesome5}
            IconName="apple"
            title="LOGIN WITH APPLE"
            buttonColor="black"
          />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
  },
  special: {
    textDecorationLine: "underline",
    fontSize: 18,
  },
  or: {
    fontSize: 18,
    textAlign: "center",
  },
  orContainer: {
    marginVertical: 20,
  },
  socialButtons: {
    height: 120,
    justifyContent: "space-between",
  },
});

export default SigninForm;
