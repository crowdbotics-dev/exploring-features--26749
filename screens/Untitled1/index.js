import { Slider } from "react-native-elements";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%",
    borderRadius: "50%"
  }}>
      <View style={{
      left: 30,
      top: 250,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#ff0000",
      borderRadius: 0,
      color: "#777777"
    }}></View><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={{
      left: 20,
      top: 66,
      position: "absolute",
      width: 150,
      height: 40
    }}></Slider></View>;
};

export default Untitled1;