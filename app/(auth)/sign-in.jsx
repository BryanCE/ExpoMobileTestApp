import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="w-full items-center justify-center min-h-[80vh]  px-4, my-6">
          <Text className="text-white mb-10 font-pextrabold text-5xl ">
            Log In
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-10 w-[300px]"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-10 w-[300px]"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={"mt-10 w-[300px]"}
            isLoading={isSubmitting}
          />
          <View className="justofy-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pmedium">
              Don't have an Account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg text-secondary font-pmedium"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
