import { View, Text } from "react-native";
import React from "react";

import { HeaderSearch, BookList } from "../components";

const HomeScreen = () => {
  return (
    <View>
      <HeaderSearch />

      <BookList />
    </View>
  );
};

export default HomeScreen;
