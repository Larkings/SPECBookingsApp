import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
} from "react-native";

function WelcomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/sep09.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/spec.png")} />
        <Button
          title="ARTIST SCREEN"
          onPress={() => navigation.push("Artists")}
        />
      </View>
      <TextInput
        clearButtonMode
        onChangeText={(text) => setUsername(text)}
        placeholder=" Username"
        style={styles.usernameBar}
      />

      <TextInput
        clearButtonMode
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        placeholder=" Password"
        style={styles.passwordBar}
      />

      <View style={styles.container}>
        <View style={styles.helpButton}>
          <Button
            title=" ?  "
            onPress={() => alert(" shows alert for now instead of pop up")}
          />
        </View>
        <View style={styles.userNameStyle}></View>
        <View style={styles.passWordStyle}></View>
        <View style={styles.loginButton}>
          <Button title="Sign In" onPress={() => navigation.push("Artists")} />
        </View>
        <View style={styles.forgotPassButton}>
          <Button
            title="Wachtwoord vergeten?"
            onPress={() =>
              alert("You are navigated to the password recovery page")
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logo: {
    width: 420,
    height: 105,
  },

  logoContainer: {
    position: "absolute",
    top: 150,
    left: 80,
    alignItems: "center",
    padding: 8,
    margin: 10,
    width: 200,
  },

  helpButton: {
    widht: 40,
    height: 40,
    left: 250,
    bottom: 580,
    backgroundColor: "lightgrey",
    borderRadius: 300,
    justifyContent: "center",
  },

  usernameBar: {
    height: 60,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    margin: 20,
    borderBottomColor: "#fff",
    backgroundColor: "lightgrey",
  },

  passwordBar: {
    height: 60,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 320,
    margin: 20,
    borderBottomColor: "#fff",
    backgroundColor: "lightgrey",
  },

  userNameStyle: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgrey",
  },

  passWordStyle: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgrey",
  },

  loginButton: {
    left: 100,
    bottom: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 60,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },

  forgotPassButton: {
    bottom: 20,
    left: 100,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
