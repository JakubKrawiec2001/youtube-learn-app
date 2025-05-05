import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const SectionDivider = () => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: Colors.primaryDarkBlue,
      }}
    />
  );
};

export default SectionDivider;

const styles = StyleSheet.create({});
