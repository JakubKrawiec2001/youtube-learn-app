import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Colors } from "@/constants/Colors";
import { YouTubeVideo } from "@/types";
import Video, { VideoRef } from "react-native-video";

const VideoCard = ({ data }: { data: YouTubeVideo }) => {
	const videoRef = useRef<VideoRef>(null);
	const background = require("@/assets/videos/broadchurch.mp4");
	return (
		<View
			style={{
				backgroundColor: "white",
				padding: 10,
				margin: 10,
				borderRadius: 10,
				elevation: 2,
			}}>
			<Video
				source={background}
				ref={videoRef}
				style={styles.backgroundVideo}
			/>
			<Text style={{ color: Colors.primaryDarkBlue }}>
				{data.snippet.title}
			</Text>
		</View>
	);
};

export default VideoCard;

var styles = StyleSheet.create({
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
