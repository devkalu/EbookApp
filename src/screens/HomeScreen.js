import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { connect } from "react-redux";

import { HeaderSearch, BookList, SearchInput } from "../components";

const HomeScreen = ({ navigation, books }) => {
  return (
    <ScrollView>
      <HeaderSearch>
        <SafeAreaView />

        <Text style={styles.titleText}>HOME</Text>
        <SearchInput onPress={() => navigation.navigate("Category")} />
      </HeaderSearch>

      <BookList />
      <BookList />
      <BookList />
      <BookList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(HomeScreen);
