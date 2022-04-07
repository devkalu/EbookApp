import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const Input = ({ title = "", secureEntry = false }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleStyle}>{title.toUpperCase()}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={styles.input}
        secureTextEntry={secureEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: "#9f9f9f",
    fontSize: 14,
    letterSpacing: 2,
  },
  input: {
    borderBottomColor: "#9f9f9f",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
});

export default Input;
