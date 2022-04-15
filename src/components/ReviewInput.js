import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Stars from "./Stars";
import PrimaryButton from "./PrimaryButton";

const ReviewInput = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a review</Text>
      <Stars
        rating={rating}
        setRating={setRating}
        starSize={30}
        isEditable={true}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline={true} />
      </View>
      <PrimaryButton
        title="Submit"
        width={100}
        gradient={true}
        textColor="#fff"
        textSize={12}
        buttonHeight={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#e9ecef",
    width: "90%",
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    height: "100%",
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ReviewInput;
