import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { YouTubeVideo } from "@/types";
import VideoCard from "./VideoCard";

type Props = {
	videos: YouTubeVideo[];
	label: string;
};

const VideosCarousel = ({ videos, label }: Props) => {
	return (
		<View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<Text
					style={{
						color: Colors.primaryDarkBlue,
						fontSize: 24,
						fontWeight: "bold",
					}}>
					{label}
				</Text>
				<Link
					href="/"
					style={{
						color: Colors.primaryDarkBlue,
						textDecorationLine: "underline",
						marginRight: 30,
					}}>
					Show more
				</Link>
			</View>
			<FlatList
				data={videos}
				horizontal={true}
				keyExtractor={(item) => item.id.videoId}
				renderItem={({ item }) => <VideoCard data={item} />}
				style={{ marginTop: 20 }}
			/>
		</View>
	);
};

export default VideosCarousel;

const styles = StyleSheet.create({});
