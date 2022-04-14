import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FeatureCard, HeaderSearch } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const FeaturedBooksScreen = ({ route }) => {
  const navigation = useNavigation();
  const routeTitle = route.params.title;

  console.log(route);

  return (
    <View style={styles.container}>
      <HeaderSearch title={routeTitle} search={true} />
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
