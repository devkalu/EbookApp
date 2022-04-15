import { View, Text, ScrollView } from "react-native";
import React from "react";
import { HeaderSearch, FeatureCard } from "../components";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <HeaderSearch title="Favourites" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <FeatureCard screen="BookFavoritesStack" />
      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default FavoritesScreen;
