import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <HeaderButton
          text="Appearel"
          btnColor="#000000"
          textColor="#FFFFFF"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <HeaderButton
          text="Sneakers"
          btnColor="#FFFFFF"
          textColor="#000000"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    </SafeAreaView>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "#000000" : "#FFFFFF",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "#FFFFFF" : "#000000",
          fontSize: 14,
          fontWeight: "900",
          fontFamily: "Neuro",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
