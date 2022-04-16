import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  HeaderSetting,
  Container,
  SettingItem,
  ModalContainer,
  LogoutConfirmation,
} from "../components";
import {
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 2 }}>
        <HeaderSetting />
      </View>
      <Container>
        <SettingItem
          title="Manage Subscription"
          Icon={FontAwesome}
          iconName="check-square-o"
          iconSize={30}
          onPress={() => navigation.navigate("ManageSubscription")}
        />
        <SettingItem
          title="Notifications"
          Icon={MaterialCommunityIcons}
          iconName="bell-alert-outline"
          iconSize={30}
          onPress={() => navigation.navigate("Notifications")}
        />
        <SettingItem
          title="Terms & Conditions"
          Icon={Ionicons}
          iconName="md-document-text-outline"
          iconSize={30}
          onPress={() => navigation.navigate("TermsAndConditions")}
        />
        <SettingItem
          title="Help & Support"
          Icon={FontAwesome}
          iconName="life-ring"
          iconSize={28}
          onPress={() => navigation.navigate("HelpAndSupport")}
        />
        {isVisible && (
          <ModalContainer visibility={isVisible} toggleModal={toggleModal}>
            <LogoutConfirmation cancel={toggleModal} />
          </ModalContainer>
        )}
        <SettingItem
          title="Logout"
          Icon={Entypo}
          iconName="log-out"
          hasNavigation={false}
          iconSize={30}
          onPress={toggleModal}
        />
      </Container>
    </ScrollView>
  );
};

export default SettingsScreen;
