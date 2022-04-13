import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FeatureCard, HeaderSearch } from "../components";

const FeaturedBooksScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch title="Home" search={true} />
      <FeatureCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
});

export default FeaturedBooksScreen;
