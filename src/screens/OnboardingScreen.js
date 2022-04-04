import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Button,
  Animated,
  Dimensions,
} from "react-native";

import { Onboarding, Container, Pagination } from "../components";

const ONBOARDING_DATA = [
  {
    id: "1",
    title: "Choose your Category",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and.",
    image: require("../../assets/onboarding_3.png"),
  },
  {
    id: "2",
    title: "Select a Book",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and.",
    image: require("../../assets/onboarding_1.png"),
  },
  {
    id: "3",
    title: "Start Reading",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry simply dummy text of the printing and.",
    image: require("../../assets/onboarding_2.png"),
  },
];
const { width } = Dimensions.get("window");
const OnboardingScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems, changed }) => {
    if (viewableItems.length) {
      const { index } = viewableItems[0];
      setIndex(index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = useCallback(() => {
    if (index < ONBOARDING_DATA.length - 1) {
      const newIndex = index + 1;
      slideRef.current.scrollToIndex({ index: newIndex, animated: true });
    }
  }, [index]);
  const getItemLayout = (data, index) => {
    return { length: width, offset: width * index, index };
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={ONBOARDING_DATA}
        renderItem={({ item }) => <Onboarding item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        initialScrollIndex={index}
        getItemLayout={getItemLayout}
        extraData={index}
      />
      <View style={styles.footer}>
        <Button
          title="Skip"
          color="#000"
          onPress={() => navigation.navigate("SigninWelcomeStack")}
        />
        <Pagination scrollX={scrollX} data={ONBOARDING_DATA} />
        <Button
          title={index === ONBOARDING_DATA.length - 1 ? "Finish" : "Next"}
          color="#50e1a6"
          onPress={
            index === ONBOARDING_DATA.length - 1
              ? () => {
                  navigation.navigate("SigninWelcomeStack");
                }
              : handleNext
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    flexDirection: "row",
    bottom: 30,
    width: "80%",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});

export default OnboardingScreen;
