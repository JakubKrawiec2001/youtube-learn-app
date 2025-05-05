import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Colors } from "@/constants/Colors";
import { YouTubeVideo } from "@/types";
import { formatDate } from "@/utils";
import { Link } from "expo-router";

const VideoCard = ({ data }: { data: YouTubeVideo }) => {
  return (
    <Link
      href={{
        pathname: "/video/[videoId]",
        params: { videoId: data.id.videoId },
      }}
      asChild
    >
      <Pressable style={styles.card}>
        <Image
          source={{ uri: data.snippet.thumbnails.medium.url }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {data.snippet.title}
        </Text>
        <Text style={styles.date}>{formatDate(data.snippet.publishTime)}</Text>
      </Pressable>
    </Link>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 8,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    marginTop: 6,
    color: "#2e2e2e",
    fontWeight: "500",
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});
