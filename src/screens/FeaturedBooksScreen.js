import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FeatureCard, HeaderSearch } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const FeaturedBooksScreen = ({ route }) => {
  const navigation = useNavigation();
  const routeTitle = route.params.title;

  const NavigationLeftIcon = () => {
    return (
      <Ionicons
        name="ios-arrow-back"
        size={32}
        color="white"
        style={{ marginLeft: 10 }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderSearch
        title={routeTitle}
        search={true}
        NavigationLeftIcon={NavigationLeftIcon}
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
      />
      <ScrollView>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </ScrollView>
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
