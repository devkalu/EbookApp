import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { HeaderSearch, Container } from "../components";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BookReadScreen = ({}) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  let icon = <FontAwesome name="heart-o" size={24} color="#fff" />;

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

  if (isFavorite) {
    icon = <FontAwesome name="heart" size={24} color="#fff" />;
  }
  const NavigationRightIcon = () => {
    return <View>{icon}</View>;
  };
  return (
    <ScrollView>
      <HeaderSearch
        title="Life on the Edge: The Coming of Age of Quantum Biology The Coming of Age of Quantum Biology"
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
        NavigationLeftIcon={NavigationLeftIcon}
        navigationRight={true}
        NavigationRightIcon={NavigationRightIcon}
        onPressNavigationRight={() => setIsFavorite(!isFavorite)}
      />
      <Container>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.chapter}>CHAPTER ONE</Text>
          <Text style={styles.content}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Text>
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chapter: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default BookReadScreen;
