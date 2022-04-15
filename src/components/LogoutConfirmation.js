import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LogoutConfirmation = ({ cancel }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to logout?</Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={cancel}>
          <View>
            <Text style={[styles.confirm, { color: "red" }]}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("SigninWelcomeStack")}
        >
          <View>
            <Text style={[styles.confirm, { color: "green" }]}>Yes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  confirm: {
    fontSize: 20,
  },
});

export default LogoutConfirmation;
