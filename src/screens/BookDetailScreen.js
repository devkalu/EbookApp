import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  HeaderSearch,
  Container,
  Stars,
  PrimaryButton,
  Review,
  ModalContainer,
  ReviewInput,
} from "../components";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors, SecondaryColor } from "../constants";

const { width } = Dimensions.get("window");

const BookDetailScreen = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();

  let screen = "BookReadHomeStack";

  if (route.params) {
    screen = route.params.screen;
  }

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

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
    <ScrollView>
      <HeaderSearch
        title="Book Details"
        NavigationLeftIcon={NavigationLeftIcon}
        onPressNavigationLeft={() => navigation.goBack()}
        navigationLeft={true}
      />
      <Container>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://images-na.ssl-images-amazon.com/images/I/41sfej3EQdL._SX322_BO1,204,203,200_.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.bookDetails}>
            <View style={styles.titleContainer}>
              <Text style={styles.bookTitle} numberOfLines={2}>
                Life on the Edge: The Coming of Age of Quantum Biology
              </Text>
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>Author Name</Text>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Biology</Text>
            </View>
            <Stars ratingParam={4} />
            <PrimaryButton
              title="Read Now"
              width={100}
              gradient={true}
              textColor="#fff"
              textSize={12}
              buttonHeight={40}
              onPress={() => navigation.navigate(screen)}
            />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </Text>
        </View>
        {isVisible && (
          <ModalContainer visibility={isVisible} toggleModal={toggleModal}>
            <ReviewInput />
          </ModalContainer>
        )}
        <View>
          <View style={styles.reviewContainer}>
            <Text style={styles.descriptionTitle}>REVIEWS</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsVisible(!isVisible)}
            >
              <MaterialIcons
                name="rate-review"
                size={30}
                color={Colors.primary100}
              />
            </TouchableOpacity>
          </View>
          <Review />
          <Review />
          <Review />
          <Review />
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {},
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: width / 3,
    height: (width / 3) * 1.5,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    width: "90%",
  },
  bookDetails: {
    marginLeft: 20,
  },
  bookTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  author: {
    fontWeight: "300",
  },
  bookDetails: {
    width: width / 2,
    marginLeft: 20,
    alignItems: "flex-start",
  },
  authorContainer: {
    marginVertical: 5,
  },
  descriptionTitle: {
    fontWeight: "600",
    fontSize: 16,
    textTransform: "uppercase",
    marginVertical: 10,
  },
  description: {
    fontWeight: "300",
    fontSize: 16,
  },
  categoryContainer: {
    backgroundColor: SecondaryColor,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 5,
  },
  categoryText: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: SecondaryColor,
  },
  descriptionContainer: {
    borderBottomColor: Colors.accent200,
    borderBottomWidth: 1.5,
    paddingBottom: 20,
  },
  reviewContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BookDetailScreen;
