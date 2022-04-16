import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { HeaderSearch, PrimaryButton, CategoryCard } from "../components";
import { categorySelection } from "../actions/categories";

const CategoryScreen = ({ categories, categorySelection }) => {
  const navigation = useNavigation();

  const Footer = () => <View style={{ height: 80 }} />;
  const Header = () => <View style={{ height: 10 }} />;

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <HeaderSearch title="CATEGORY" navigation={navigation} />
      <SafeAreaView />

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
                  <CategoryCard
                    image={item.image}
                    title={item.title}
                    isSelected={item.isSelected}
                  />
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
          onPress={() => navigation.navigate("Tab")}
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
  const { categories } = state;
  return {
    categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categorySelection: (categoryId) => dispatch(categorySelection(categoryId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
