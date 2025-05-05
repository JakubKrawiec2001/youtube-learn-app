import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import HomeIcon from "../../assets/icons/home-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import SearchInput from "@/components/SearchInput";
import { SafeAreaView } from "react-native";

const HomeLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <SafeAreaView style={{ marginTop: 40 }}>
        <SearchInput />
      </SafeAreaView>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primaryDarkBlue,
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.primary,
            paddingTop: 15,
            height: 90,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            marginTop: 2,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <HomeIcon
                width={32}
                height={32}
                fill={focused ? Colors.primaryDarkBlue : "white"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ focused }) => (
              <SearchIcon
                width={32}
                height={32}
                stroke={focused ? Colors.primaryDarkBlue : "white"}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
