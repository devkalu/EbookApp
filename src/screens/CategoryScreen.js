import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { connect } from "react-redux";

import { categorySelection } from "../actions/categories";

import {
  HeaderSearch,
  PrimaryButton,
  CategoryCard,
  Container,
  Spacer,
} from "../components";
import { PrimaryColor } from "../constants";

const CATEGORIES = [
  {
    id: "1",
    title: "BIOLOGY",
    image: require("../../assets/images/biology.png"),
  },
  {
    id: "2",
    title: "CHEMISTRY",
    image: require("../../assets/images/chemisty.png"),
  },
  {
    id: "3",
    title: "GEOMETRY",
    image: require("../../assets/images/geometry.png"),
  },
  {
    id: "4",
    title: "GEOGRAPHY",
    image: require("../../assets/images/globe.png"),
  },
  {
    id: "5",
    title: "LANGUAGE",
    image: require("../../assets/images/languages.png"),
  },
  {
    id: "6",
    title: "CALCULUS",
    image: require("../../assets/images/maths.png"),
  },
  {
    id: "7",
    title: "ENGINEERING",
    image: require("../../assets/images/divider.png"),
  },
];

const CategoryScreen = ({ navigation, categories, categorySelection }) => {
  const Footer = () => <View style={{ height: 100 }} />;
  const Header = () => <View style={{ height: 10 }} />;

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <HeaderSearch>
        <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
          <Text style={styles.titleStyle}>CATEGORY</Text>
        </SafeAreaView>
      </HeaderSearch>

      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => categorySelection(item.id)}
              >
                <View
                  style={{
                    margin: 10,
                    borderColor: "#f5f5f5",
                    borderWidth: 1,
                  }}
                >
                  <CategoryCard {...item} />
                </View>
              </TouchableOpacity>
            );
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          gradient={true}
          title="SAVE"
          textColor="#fff"
          width={100}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    left: 16,
    right: 16,
    flex: 5,
    bottom: 25,
    zIndex: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categorySelection: (categoryId) => dispatch(categorySelection(categoryId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
