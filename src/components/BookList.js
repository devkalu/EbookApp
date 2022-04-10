import { View, Text, ScrollView } from "react-native";
import React from "react";
import BookCard from "./BookCard";

const BookList = () => {
  return (
    <View style={{ width: "90%" }}>
      <Text>Trending Now</Text>
      <ScrollView horizontal>
        <BookCard />
        <BookCard />
        <BookCard />
      </ScrollView>
    </View>
  );
};

export default BookList;
