import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const FormField = ({
  title,
  value,
  placeHolder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassWord, setShowPassWord] = useState(true);
  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-gray-500 items-center flex-row">
        <TextInput
          className="flex-1 w-full h-full text-white font-psemibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor={"#8D8D8D"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassWord}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassWord(!showPassWord)}
            className="p-2"
          >
            <Image
              source={showPassWord ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
