import { StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
          }}
        />
      </Tabs>
    </>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
