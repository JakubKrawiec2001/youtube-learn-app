import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Fonts } from "@/constants/Fonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		[Fonts.regular]: require("../assets/fonts/Poppins-Regular.ttf"),
		[Fonts.medium]: require("../assets/fonts/Poppins-Medium.ttf"),
		[Fonts.bold]: require("../assets/fonts/Poppins-Bold.ttf"),
		[Fonts.semiBold]: require("../assets/fonts/Poppins-SemiBold.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</>
	);
}
