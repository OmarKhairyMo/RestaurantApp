import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Menu from "../screens/Menu";

const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
