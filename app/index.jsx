//HOME PAGE OF APP, SAME AS / ROUTE

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router'; 
import { styled } from 'nativewind';
const StyledText = styled(Text);
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red" >
      <Text className="text-3xl" >Bryan's First Mobile</Text>
      <StyledText className="text-white">Hello, NativeWind!</StyledText>
      <StatusBar style="auto" />
      <Link 
      href="/profile"
      style={{color: 'blue', marginTop: 20}}
      >
        Example
      </Link>
    </View>
  );
}
