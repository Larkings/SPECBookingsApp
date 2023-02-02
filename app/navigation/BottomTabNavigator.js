import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArtistScreen from "../screens/ArtistScreen";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen>"Home" component={ArtistScreen}</Tab.Screen>
            <Tab.Screen>"Profile" component{Profile}</Tab.Screen>
        </Tab.Navigator>
    )
}