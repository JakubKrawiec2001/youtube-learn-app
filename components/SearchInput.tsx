import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import SearchIcon from "@/assets/icons/search-icon.svg";
import SettingsIcon from "@/assets/icons/settings-icon.svg";
import { useRouter } from "expo-router";

const SearchInput = () => {
	const router = useRouter();

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				gap: 10,
				backgroundColor: "white",
				paddingTop: 10,
				paddingHorizontal: 30,
			}}>
			<View style={styles.inputContainer}>
				<SearchIcon width={24} height={24} stroke={Colors.primaryDarkBlue} />
				<TextInput
					onFocus={() => {
						router.navigate("/search");
					}}
					placeholder="Search..."
					placeholderTextColor={Colors.primaryDarkBlue}
					style={{
						flex: 1,
					}}
				/>
			</View>
			<SettingsIcon width={36} height={36} stroke={Colors.primaryDarkBlue} />
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 18,
		borderColor: Colors.primaryDarkBlue,
		borderWidth: 2,
		color: Colors.primaryDarkBlue,
	},
});
