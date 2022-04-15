import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BookCard from "./BookCard";
import { SecondaryColor } from "../constants";
import { useNavigation } from "@react-navigation/native";

const BookList = ({ defaultTitle = "", navigationViewAll }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.listTitle}>{defaultTitle}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={navigationViewAll}>
          <View style={styles.viewAll}>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BookCard />
        <BookCard />
        <BookCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 25,
    fontWeight: "500",
  },
  titleContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  viewAll: {
    backgroundColor: SecondaryColor,
    width: 80,
    alignItems: "center",
    height: 25,
    borderRadius: 12,
    justifyContent: "center",
  },
  viewAllText: {
    color: "#fff",
    fontSize: 12,
  },
  container: {
    marginBottom: 10,
  },
});

export default BookList;
