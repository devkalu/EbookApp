import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { connect } from "react-redux";

import { HeaderSearch, BookList } from "../components";

const HomeScreen = ({ navigation, books }) => {
  return (
    <ScrollView>
      <HeaderSearch title="HOME" search={true} navigation={navigation} />

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
