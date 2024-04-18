// LAYOUT, COMPONENTS INSIDE WILL BE VISIBLE ON EVERY PAGE
// USE THIS TO ADD NABVARS, THINGS LIKE THAT
import React, { useEffect, useState } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const [fontsLoaded, error] = useFonts({
		"Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
		"Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
		"Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
		"Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
		"Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
		"Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
	      });
	      
	      useEffect(() => {
		if (error) throw error;
	      
		if (fontsLoaded) {
		  SplashScreen.hideAsync();
		}
	      }, [fontsLoaded, error]);
	      
	      if (!fontsLoaded && !error) {
		return null;
	      }
	      return (
		<Stack>
			<Stack.Screen 
				  name="index" // This is the file/component name
				  options={{ title: 'Home', headerShown: false}} // Set the display name to "Home"
			 />
		</Stack>
	  ) 
}

export default RootLayout
