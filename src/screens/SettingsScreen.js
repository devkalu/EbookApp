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

const SettingsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

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
        />
        <SettingItem
          title="Notification"
          Icon={MaterialCommunityIcons}
          iconName="bell-alert-outline"
          iconSize={30}
        />
        <SettingItem
          title="Terms & Conditions"
          Icon={Ionicons}
          iconName="md-document-text-outline"
          iconSize={30}
        />
        <SettingItem
          title="Help & Support"
          Icon={FontAwesome}
          iconName="life-ring"
          iconSize={28}
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
