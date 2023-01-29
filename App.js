import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ArtistScreen from "./app/screens/ArtistScreen";
import ArtistProfileScreen from "./app/screens/ArtistProfileScreen";
import BookingScreen from "./app/screens/BookingScreen";
import SigneeScreen from "./app/screens/SigneeScreen";

import AppText from "./app/components/AppText/AppText";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName='Navigatiebar'>
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Drawer.Screen name="ArtistScreen" component={ArtistScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

{/* Dit is voor navigatie */}
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen options={{
        }} name="Root" component={Root} /> 
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen name="Viewer" component={ViewImageScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Artists"
          component={ArtistScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Artist Details"
          component={ArtistProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Booking"
          component={BookingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signees"
          component={SigneeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
