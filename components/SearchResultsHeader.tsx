import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SearchResultsHeader = () => {
  return (
    <View>
      <Text style={[styles.text, { fontSize: 10 }]}>
        1157 results found for:{" "}
        <Text style={{ fontWeight: "bold" }}>React Native</Text>
      </Text>
      <Text
        style={[
          styles.text,
          { textAlign: "right", marginTop: 5, fontSize: 12 },
        ]}
      >
        Sort by: <Text style={{ fontWeight: "bold" }}>Most popular</Text>
      </Text>
    </View>
  );
};

export default SearchResultsHeader;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.regular,
    color: Colors.primaryDarkBlue,
  },
});
