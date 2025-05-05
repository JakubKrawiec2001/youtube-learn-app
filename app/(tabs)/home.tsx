import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { searchVideos } from "@/utils";
import { YouTubeVideo } from "@/types";

import VideosCarousel from "@/components/VideosCarousel";

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
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				paddingTop: 40,
				paddingLeft: 30,
				backgroundColor: "white",
			}}>
			<VideosCarousel videos={videos} label="React Native" />
			<VideosCarousel videos={videos} label="React" />
			<VideosCarousel videos={videos} label="Typescript" />
			<VideosCarousel videos={videos} label="Javascript" />
		</ScrollView>
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
