import React, { useContext } from "react";
import CartContext from "./context/cart/CartContext";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import SneakerDetailView from "./screens/SneakerDetailView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabBarNavigation() {
  const { cartItems } = useContext(CartContext);
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        ...screenOptions,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            if (focused) iconName = "home";
            else iconName = "home-outline";
            return (
              <View style>
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{
                    alignSelf: "center",
                  }}
                />
              </View>
            );
          } else if (route.name === "Cart") {
            if (focused) iconName = "cart";
            else iconName = "cart-outline";
            return (
              <View>
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  style={{
                    alignSelf: "center",
                  }}
                />
                {cartItems.length > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      backgroundColor: "lightgreen",
                      width: 18,
                      height: 18,
                      borderRadius: 25,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>{cartItems.length}</Text>
                  </View>
                )}
              </View>
            );
          }
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen
        name="SneakerDetailView"
        component={SneakerDetailView}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="BottomTabs" component={TabBarNavigation} />
    </Stack.Navigator>
  );
}
