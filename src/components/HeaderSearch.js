import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { PrimaryColor } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import SearchInput from "./SearchInput";
import { useNavigation } from "@react-navigation/native";

const HeaderSearch = ({
  title = "",
  search = false,

  onPressNavigationLeft,
  onPressNavigationRight,
  NavigationLeftIcon,
  NavigationRightIcon,
  navigationLeft,
  navigationRight,
}) => {
  const navigation = useNavigation();

  let TabBar = (
    <View>
      <Text style={styles.titleText}>{title.toUpperCase()}</Text>
    </View>
  );
  if (NavigationLeftIcon || NavigationRightIcon) {
    TabBar = (
      <View style={styles.tabNavigation}>
        {navigationLeft ? (
          <TouchableOpacity activeOpacity={0.7} onPress={onPressNavigationLeft}>
            <NavigationLeftIcon />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 32 }} />
        )}
        <Text style={styles.titleText}>{title.toUpperCase()}</Text>
        {navigationRight ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressNavigationRight}
          >
            <NavigationRightIcon />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 32 }} />
        )}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/pexels-ricardo-esquivel-1926988.jpeg")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(64,202,186,0.9)", "rgba(80,225,166,0.95)"]}
          style={styles.background}
          start={[0, 1]}
          end={[1, 0]}
        />
        <SafeAreaView />
        {search ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: "90%",
              }}
            >
              {TabBar}
            </View>
            <SearchInput onPress={() => navigation.navigate("Category")} />
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>{TabBar}</View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    height: 180,
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
  },
  tabNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HeaderSearch;
