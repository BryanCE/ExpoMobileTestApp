//HOME PAGE OF APP, SAME AS / ROUTE

import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const StyledText = styled(Text);
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center gap-4">
          <View className="mb-10">
            <Text className="text-5xl text-center font-pbold text-white max-w-full ">
              Welcome to{"\n"}Shooting Utah
            </Text>
          </View>
          <View className="w-80 h-80 rounded-full bg-white flex justify-center items-center">
            <Image
              source={images.bronzeboat}
              resizeMode="contain"
              className="w-80 h-80"
            />
          </View>
          <View className="relative mt-20 mb-10">
            <Text className="text-3xl text-white font-pbold">
              Create an account
            </Text>
          </View>
          <View className="justify-center align-center gap-4 w-full ">
            <CustomButton
              title={"Login"}
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
