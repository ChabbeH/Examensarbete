import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CartState from "./context/cart/CartState";
import Navigation from "./navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Neuro: require("./assets/fonts/neuropolitical rg.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartState>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </CartState>
    </SafeAreaView>
  );
}
