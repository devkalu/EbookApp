import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          overflow: "hidden",
          marginVertical: 10,
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <Text style={styles.name}>JOHN DOE</Text>
      <Text style={styles.email}>john.doe@mail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  email: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 20,
  },
});

export default Profile;
