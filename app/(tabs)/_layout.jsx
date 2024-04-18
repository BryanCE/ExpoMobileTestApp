//holds all the Tabs for the app
import { View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({icon, color, name, focused}) => {
	return (
		<View>
			<Image
			source={icon} 
			>
				Icon
			</Image>
		</View>
	)
}

const TabsLayout = () => {
  return (
	<>
		<Tabs>
			<Tabs.Screen name="home" 
			options={{
				title: 'Home',
				headerShown: false,
				tabBarIcon: ({color, focused}) => (
					<TabIcon icon={icons.BlackBronzeAgeBoatLogo} color={color} name="Home" size={24} focused={focused} />
				)
			}}/>
		</Tabs>
	</>
  )
}

export default TabsLayout