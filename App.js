import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ArtistScreen from "./app/screens/ArtistScreen";
import ArtistProfileScreen from "./app/screens/ArtistProfileScreen";
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

// TODO Alert Button for sign out > naar Welcome?  
// export default function App({ navigation }) {
//   const showAlert = () => {
//     Alert.alert(
//     "Are you sure?",
//     "U want to Sign Out?",
//     [
//       {
//         text: 'Cancel',
//         onPress: () => {},
//         style: 'cancel',
//       },
//       {
//         text: 'OK',
//         onPress: () => {
//           navigation.navigate('Artist Screen');
//       },
//     },
//   ],
//   { cancelable: false },
//   );
// };
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="View Image Screen" component={ViewImageScreen} />
        <Drawer.Screen name="Artist Screen" component={ArtistScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
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
        name="ArtistDetails"
        component={ArtistProfileScreen}
      />
    </Stack.Navigator>
  );
}
