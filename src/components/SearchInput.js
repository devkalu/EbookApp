import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SecondaryColor } from "../constants";

const SearchInput = ({ onPress }) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={24} color={SecondaryColor} />
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Search Books"
        />
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Ionicons name="ios-filter-sharp" size={24} color={SecondaryColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 50,
    width: "90%",
    borderRadius: 25,
    alignSelf: "center",
    marginVertical: 20,
    justifyContent: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,

    height: 45,
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default SearchInput;
