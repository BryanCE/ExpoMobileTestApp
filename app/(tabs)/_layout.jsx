//holds all the Tabs for the app
import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router';
import { icons } from "../../constants";

const TabIcon = ({icon, color, name, focused}) => {
	return (
		<View>
			<Image
			source={icon} 
			resizeMode="contain"
			tintColor={color}
			className="w-6 h-6"
			/>
			<Text className={`${focused ? "text-blue-500 font-pbold" : "text-gray-500 font-pregular"}`}>{name}</Text>
		</View>
	)
}

const TabsLayout = () => {
  return (
	<>
		<Tabs
		screenOptions={{
			tabBarShowLabel: false,
		}}>
			<Tabs.Screen name="home" 
			options= {{
				title: "Home",
				headerShown: false,
				tabBarIcon: ({color, focused}) => (
					<TabIcon icon={icons.animalspiral} color={color} name={"Home"} focused={focused} />
				)
			}}
			/>
		</Tabs>
	</>
  )
}

export default TabsLayout