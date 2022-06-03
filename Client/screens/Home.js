import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Products from "../components/Products";
import { Divider } from "react-native-elements";
import HeaderTabs from "../components/HeaderTabs";
import { useState } from "react";
import Appearel from "../components/Appearel";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Sneakers");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === "Sneakers" && (
          <>
            <Products />
          </>
        )}
        {activeTab === "Appearel" && (
          <>
            <View>
              <Appearel />
            </View>
          </>
        )}
      </ScrollView>
      <Divider width={1} />
    </SafeAreaView>
  );
}
