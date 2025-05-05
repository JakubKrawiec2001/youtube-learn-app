import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import VideosCarousel from "@/components/VideosCarousel";
import SectionDivider from "@/components/SectionDivider";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        paddingTop: 20,
      }}
    >
      <VideosCarousel label="React Native" />
      <SectionDivider />
      <VideosCarousel label="React" />
      <SectionDivider />
      <VideosCarousel label="Typescript" />
      <SectionDivider />
      <VideosCarousel label="Javascript" />
    </ScrollView>
  );
};

export default HomeScreen;
