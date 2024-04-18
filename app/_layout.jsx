// LAYOUT, COMPONENTS INSIDE WILL BE VISIBLE ON EVERY PAGE
// USE THIS TO ADD NABVARS, THINGS LIKE THAT

import { Stack } from 'expo-router';

const RootLayout = () => {
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
