import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native";
import { dummyDataByCategory } from "@/data";
import VideoCard from "@/components/VideoCard";
import { formatDate } from "@/utils";
import SearchResultsHeader from "@/components/SearchResultsHeader";
import { Fonts } from "@/constants/Fonts";

const SearchScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 30,
        paddingTop: 20,
        backgroundColor: "white",
      }}
    >
      <View>
        <SearchResultsHeader />
      </View>
      <FlatList
        data={dummyDataByCategory["React"]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.videoId}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 20,
              width: "100%",
            }}
          />
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.snippet.thumbnails.medium.url }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.name}>{item.snippet.channelTitle}</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
              {item.snippet.title}
            </Text>
            <Text style={styles.date}>
              {formatDate(item.snippet.publishTime)}
            </Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  name: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: Fonts.bold,
    color: Colors.primaryDarkBlue,
  },
  title: {
    fontSize: 14,
    marginTop: 4,
    color: "#2e2e2e",
    fontWeight: "500",
    fontFamily: Fonts.regular,
  },
  date: {
    textAlign: "right",
    fontSize: 12,
    color: Colors.primaryDarkBlue,
    fontFamily: Fonts.regular,
  },
});
