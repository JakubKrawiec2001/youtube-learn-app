import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { searchVideos } from "@/utils";
import { YouTubeVideo } from "@/types";

const HomeScreen = () => {
	const [videos, setVideos] = useState<YouTubeVideo[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await searchVideos("React Native");
			setVideos(data.items);
		};
		fetchData();
	}, []);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
			}}>
			<Text
				style={{
					color: Colors.primaryDarkBlue,
					fontSize: 24,
					fontWeight: "bold",
					marginTop: 20,
				}}>
				Welcome to the Home
			</Text>
			<FlatList
				data={videos}
				horizontal={true}
				keyExtractor={(item) => item.id.videoId}
				renderItem={({ item }) => (
					<View
						style={{
							backgroundColor: "white",
							padding: 10,
							margin: 10,
							borderRadius: 10,
							elevation: 2,
						}}>
						<Text style={{ color: Colors.primaryDarkBlue }}>
							{item.snippet.title}
						</Text>
					</View>
				)}
				style={{ marginTop: 20 }}
			/>
		</View>
	);
};

export default HomeScreen;

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
		margin: 10,
		color: Colors.primaryDarkBlue,
	},
});
