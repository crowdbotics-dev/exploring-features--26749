import { CheckBox } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 57,
      top: 231,
      position: "absolute",
      width: 80,
      height: 80,
      backgroundColor: "#00f0ff",
      borderRadius: "50%"
    }}></View><CheckBox title="Test" style={{
      left: 2,
      top: 86,
      position: "absolute"
    }}></CheckBox></View>;
};

export default Untitled2;