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
            navigation.navigate("FeaturedHomeStack", {
              title: "Trending Now",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Trending Now"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Biology",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Biology"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Chemistry",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Chemistry"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Geometry",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Geometry"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Geography",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Geography"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Language",
              screen: "BookHomeStack",
              readScreen: "BookReadHomeStack",
            })
          }
          defaultTitle="Language"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Calculus",
              screen: "BookHomeStack",
            })
          }
          defaultTitle="Calculus"
        />
        <BookList
          navigationViewAll={() =>
            navigation.navigate("FeaturedHomeStack", {
              title: "Engineering",
              screen: "BookHomeStack",
            })
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
