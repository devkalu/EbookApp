import React from "react";
import { useNavigation } from "@react-navigation/native";

const withNavigation = (WrappedComponent) => {
  return (props) => {
    const navigation = useNavigation();
    return <WrappedComponent {...props} navigation={navigation} />;
  };
};

export default withNavigation;
