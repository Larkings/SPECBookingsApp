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

function ArtistScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/sep09.jpg")}
    >
      <View style={styles.artistImageContainer}>
        <Image
          style={styles.artistImage}
          source={require("../assets/jordan_wayne_SPEC.jpg")}
        />
        <Image
          style={styles.artistImage}
          source={require("../assets/ali-b.jpg")}
        />
        <Image
          style={styles.artistImage}
          source={require("../assets/ali-b.jpg")}
        />
        <Image
          style={styles.artistImage}
          source={require("../assets/ali-b.jpg")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: "flex-end",
  },
  artistImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  artistImage: {
    width: 180,
    height: 180,
  },
});

export default ArtistScreen;
