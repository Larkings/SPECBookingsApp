import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ArtistScreen from "./app/screens/ArtistScreen";
import ArtistProfileScreen from "./app/screens/ArtistProfileScreen";
import Registration from "./app/screens/Registration";
import UserScreen from "./app/screens/UserScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from './config';
import 'react-native-gesture-handler';
import CalendarScreen from "./app/screens/CalendarScreen";
import FavouriteScreen from "./app/screens/FavouriteScreen";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome" drawerPosition="right">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Signees of SPEC" component={ArtistScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
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
      options={{ headerShown: false }}
        name="ArtistDetails"
        component={ArtistProfileScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Registration}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="User"
        component={UserScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Calendar"
        component={CalendarScreen}
      />
            <Stack.Screen
        options={{ headerShown: false }}
        name="Favourite"
        component={FavouriteScreen}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Image" component={ViewImageScreen} />
      <Tab.Screen name="Artist" component={ArtistScreen} />
    </Tab.Navigator>
  );
}

