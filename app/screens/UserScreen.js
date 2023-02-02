import React, {  useState, useEffect  } from "react";
import { Text, View, Button, StyleSheet, ImageBackground } from "react-native";
import { firebase } from '../../config';

function UserScreen(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if (snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log('user does not exist')
      }
    })
  }, []);

  const changePassword =() => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(()=> {
      alert("Password reset email sent")
    }).catch((error) =>{
      alert(error)
    })
  }

  return(
    <ImageBackground
    style={styles.background}
    source={require("../assets/sep09.jpg")}
    >
      <View style={styles.changePass}>
        <Button title="Change Password" onPress={() => changePassword()} />
      </View>
      <View style={styles.loginButton}>
        <Button title="Sign out" onPress= {()=> firebase.auth().signOut()} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  changePass: {

    bottom: 300,
    marginBottom: 50,
    padding: 10,
    height: 60,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    
    
  },
  loginButton: {

    bottom: 300,
    padding: 5,
    height: 60,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  }
});


export default UserScreen;

