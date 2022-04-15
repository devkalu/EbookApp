import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { connect } from "react-redux";

import { HeaderSearch, BookList } from "../components";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ books }) => {
  const navigation = useNavigation();

  return (
    <>
      <HeaderSearch title="HOME" search={true} navigation={navigation} />
      <ScrollView>
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Trending Now" })
          }
          defaultTitle="Trending Now"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Biology" })
          }
          defaultTitle="Biology"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Chemistry" })
          }
          defaultTitle="Chemistry"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Geometry" })
          }
          defaultTitle="Geometry"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Geography" })
          }
          defaultTitle="Geography"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Language" })
          }
          defaultTitle="Language"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Calculus" })
          }
          defaultTitle="Calculus"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", { title: "Engineering" })
          }
          defaultTitle="Engineering"
        />
        <View style={{ height: 30 }} />
      </ScrollView>
    </>
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
