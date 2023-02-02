import { Image, TouchableOpacity, View, Button, TextInput, StyleSheet,  ImageBackground } from "react-native";
import React, {  useState, useEffect  } from "react";
import { firebase } from '../../config';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

function Registration({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const Stack = createNativeStackNavigator();

  registerUser = async (email,password,firstName,lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=> {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://fire-auth-71996.firebaseapp.com',
      })
      .then(() => {
        alert('verification email sent')
      }).catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
      })
    })
    .catch((error) => {
      alert(error.message)
    })
  })
  .catch((error) => {
    alert(error.message)
  })

  }
  
  return (
  <ImageBackground
  style={styles.background}
  source={require("../assets/sep09.jpg")}>
        <TextInput
        clearButtonMode
        onChangeText={(firstName) => setFirstName(firstName)}
        placeholder=" First Name"
        style={styles.usernameBar}
        />
        <TextInput
        clearButtonMode
        onChangeText={(lastName) => setLastName(lastName)}
        placeholder=" Last Name"
        style={styles.usernameBar}
        />
        <TextInput
        clearButtonMode
        onChangeText={(email) => setEmail(email)}
        placeholder=" Email"
        style={styles.usernameBar}
        />
        <TextInput
        clearButtonMode
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
        placeholder=" Password"
        style={styles.passwordBar}
        />
        <View style={styles.container}>
          <View style={styles.helpButton}>
            <Button title=" ?  " onPress={() => alert(" shows alert for now instead of pop up")} />
          </View>
          <View style={styles.loginButton}>
            <Button title="Let's Register!" onPress = {()=> registerUser(email,password,firstName,lastName)} />
          </View>
          <View style={styles.forgotPassButton}>
            <Button title="Want to sign in?" onPress = {()=> navigation.push("Welcome")}/>
          </View>
        </View>
      </ImageBackground>
  )

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
    margin: 20,
    borderBottomColor: "#fff",
    backgroundColor: "lightgrey",
  },

  passwordBar: {
    height: 60,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 280,
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
    left: 90,
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
    left: 90,
  },
  title: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
});

export default Registration;
