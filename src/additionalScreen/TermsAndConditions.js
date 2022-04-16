import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { HeaderSearch, Container, PrimaryButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../constants";

const TermsAndConditions = () => {
  const [agree, setAgree] = useState(false);
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
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <HeaderSearch
        title="Terms & Conditions"
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
        NavigationLeftIcon={NavigationLeftIcon}
      />
      <Container>
        <View style={{ marginVertical: 10 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Terms and Conditions</Text>
          </View>
          <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Privacy Policy</Text>
          </View>
          <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={{ marginVertical: 10 }}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.primary100}
              unfillColor="#FFFFFF"
              text="Agree to Terms and Conditions"
              iconStyle={{ borderColor: Colors.primary100 }}
              onPress={(isChecked) => {
                setAgree(isChecked);
              }}
              textStyle={{
                textDecorationLine: "none",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <PrimaryButton
              title="Decline"
              width={100}
              textColor="#fff"
              textSize={12}
              buttonHeight={40}
              color={Colors.accent100}
              onPress={() => navigation.goBack()}
            />
            <PrimaryButton
              title="Accept"
              width={100}
              gradient={true}
              textColor="#fff"
              textSize={12}
              buttonHeight={40}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{ height: 20 }} />
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleContainer: {
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default TermsAndConditions;
