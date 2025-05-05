import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { YouTubeVideo } from "@/types";
import VideoCard from "./VideoCard";
import { searchVideos } from "@/utils";
import { dummyDataByCategory } from "@/data";

const VideosCarousel = ({ label }: { label: string }) => {
  //   const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await searchVideos(label);
  //       setVideos(data.items);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <View style={styles.carouselContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: Colors.primaryDarkBlue,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {label}
        </Text>
        <Link
          href="/search"
          style={{
            color: Colors.primaryDarkBlue,
            textDecorationLine: "underline",
            marginRight: 30,
          }}
        >
          Show more
        </Link>
      </View>
      <FlatList
        data={dummyDataByCategory[label]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => <VideoCard data={item} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default VideosCarousel;

const styles = StyleSheet.create({
  carouselContainer: { paddingLeft: 30, marginBottom: 20, marginTop: 10 },
});
