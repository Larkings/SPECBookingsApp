import React, {  useState, useEffect  } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Button,
  TextInput
} from "react-native";
import { firebase } from '../../config';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewImageScreen from "./ViewImageScreen";

function WelcomeScreen({ navigation }) {

  const Stack = createNativeStackNavigator();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onAuthStateChanged(user){
    setUser (user);
    if(initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if(initializing) return null;

  function onAuthStateChanged(user){
    setUser (user);
    if(initializing) setInitializing(false);
  } 

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error){
      alert (error.message)
    }
  }

  if (!user){
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/sep09.jpg")}
        >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/spec.png")} />
          <Button title="ARTIST SCREEN" onPress={() => navigation.push("Artists")}/>
        </View>
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
            <Button title="Sign In" onPress= {()=> loginUser(email, password)} />
          </View>
          <View style={styles.forgotPassButton}>
            <Button title="Wachtwoord vergeten?" onPress={() => alert("You are navigated to the password recovery page")} />
          </View>
        </View>
      </ImageBackground>
    );
  }

  return(
    <ImageBackground
    style={styles.background}
    source={require("../assets/sep09.jpg")}
    >
      <Stack.Navigator>
      <Stack.Screen name="Viewer" component={ViewImageScreen} />
      </Stack.Navigator>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
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
    left:80,
    alignItems: "center",
    padding: 8,
    margin: 10,
    width: 200,
  },

  helpButton:{
    widht: 40,
    height: 40,
    left: 250,
    bottom: 580,
    backgroundColor: "lightgrey",
    borderRadius:  300,
    justifyContent:'center',
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

  userNameStyle:{
    borderWidth: 1,
    borderColor:"black",
    backgroundColor: "lightgrey",
  },

  passWordStyle:{
    borderWidth: 1,
    borderColor:"black",
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
    borderRadius:  20,
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
