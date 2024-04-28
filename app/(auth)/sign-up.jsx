import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      // Set user in global state context

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", "Failed to create user", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="w-full items-center justify-center min-h-[85vh]  px-4, my-6">
          <Text className="text-white mb-10 font-pextrabold text-4xl ">
            Create an Account
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10 w-[300px]"
          />
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
            title="Sign Up"
            handlePress={submit}
            containerStyles={"mt-10 w-[300px]"}
            isLoading={isSubmitting}
          />
          <View className="justofy-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pmedium">
              Have an account Already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg text-secondary font-pmedium"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
