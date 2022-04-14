import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { connect } from "react-redux";

import { HeaderSearch, BookList } from "../components";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ books }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <HeaderSearch title="HOME" search={true} navigation={navigation} />

      <BookList
        navigationViewAll={() =>
          navigation.navigate("FeaturedHomeStack", { title: "Trending Now" })
        }
        defaultTitle="Trending Now"
      />
      {/* <BookList />
      <BookList />
      <BookList /> */}
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
