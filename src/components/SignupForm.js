import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import Container from "./Container";
import HeadingText from "./HeadingText";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import SocialButton from "./SocialButton";
import Spacer from "./Spacer";

const SignupForm = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Container>
        <HeadingText heading="Sign to Continue" />
        <Input title="Name" />
        <Input title="Email" />
        <Input title="Password" secureEntry={true} />
        <Input title="CONFIRM Password" secureEntry={true} />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            gradient={true}
            title="Register"
            textColor="#fff"
            width={100}
          />
        </View>
        <Text style={styles.textStyle}>
          Already have an account?
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.special}> Sign in</Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.orContainer}>
          <Text style={styles.or}>- or -</Text>
        </View>
        <View style={styles.socialButtons}>
          <SocialButton
            Icon={FontAwesome5}
            IconName="facebook"
            title="SIGNUP WITH FACEBOOK"
            buttonColor="#517CC0"
          />
          <SocialButton
            Icon={FontAwesome5}
            IconName="apple"
            title="SIGNUP WITH APPLE"
            buttonColor="black"
          />
        </View>
        <Spacer />
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

export default SignupForm;
