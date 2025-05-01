import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={{ color: Colors.primaryDarkBlue }}>SearchScreen</Text>
		</SafeAreaView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
