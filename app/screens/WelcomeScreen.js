import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/sep09.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/spec.png")} />
        <Text style={{ color: "white" }}>Tagline vul het maar in!</Text>
        <Button title="TEST KNOP" onPress={() => navigation.push("Viewer")} />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    widht: "100%",
    height: 70,
    backgroundColor: "#cf597e",
  },
  logo: {
    width: 428,
    height: 106,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    widht: "100%",
    height: 70,
    backgroundColor: "#bf194e",
  },
});

export default WelcomeScreen;
