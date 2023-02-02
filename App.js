import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ArtistScreen from "./app/screens/ArtistScreen";
import ArtistProfileScreen from "./app/screens/ArtistProfileScreen";
import { Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    // export default function App({pos}) {
  // const position = pos=='right'?'left':'right';
  

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
      <Drawer.Navigator initialRouteName="Welcome" drawerPosition="right"
      >
        <Drawer.Screen name="Login" component={StackNavigator} />
        <Drawer.Screen name='Image Screen' component={MyTabs} />
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

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Image" component={ViewImageScreen} />
      <Tab.Screen name="Artist" component={ArtistScreen} />
    </Tab.Navigator>
  );
}

