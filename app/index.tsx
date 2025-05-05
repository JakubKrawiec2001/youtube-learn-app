import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link, router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <Image source={require("../assets/icons/app-icon.png")} />
      <View style={styles.mainContent}>
        <Text
          style={{
            fontSize: 22,
            color: "white",
            fontFamily: Fonts.semiBold,
            width: "98%",
          }}
        >
          Welcome to the best YouTube-based learning application.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text
            style={{
              color: "white",
              fontFamily: Fonts.semiBold,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Log in as guest
          </Text>
        </Pressable>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            paddingHorizontal: 30,
          }}
        >
          By continuing you agree with{" "}
          <Link href="/" style={styles.link}>
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/" style={styles.link}>
            Privacy Policy
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
    backgroundColor: Colors.primary,
    fontFamily: Fonts.bold,
  },
  mainContent: {
    width: "100%",
    gap: 30,
  },
  button: {
    width: "100%",
    padding: 12,
    backgroundColor: Colors.primaryDarkBlue,
    borderRadius: 14,
  },
  link: {
    textDecorationLine: "underline",
    color: Colors.primaryDarkBlue,
  },
});
