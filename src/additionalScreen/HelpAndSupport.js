import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HeaderSearch, Container, SupportItem } from "../components";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const HelpAndSupport = () => {
  const navigation = useNavigation();

  const NavigationLeftIcon = () => {
    return (
      <Ionicons
        name="ios-arrow-back"
        size={32}
        color="white"
        style={{ marginLeft: 10 }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderSearch
        title="Help & Support"
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
        NavigationLeftIcon={NavigationLeftIcon}
      />
      <Container>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.title}>
            Got a problem? Our team of operators are ready to help.
          </Text>
          <SupportItem
            Icon={FontAwesome}
            iconName="wechat"
            titletext="Chat"
            content="Start a chat with our operatives online."
          />
          <SupportItem
            Icon={MaterialCommunityIcons}
            iconName="frequently-asked-questions"
            titletext="FAQ"
            content="Get answers to common questions."
          />
          <SupportItem
            Icon={Ionicons}
            iconName="mail-sharp"
            titletext="Email"
            content="Get a solution beamed to your inbox."
          />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HelpAndSupport;
