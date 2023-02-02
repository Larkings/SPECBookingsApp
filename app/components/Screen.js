import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";

function Screen({ children, style }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/sep09.jpg")}
    >
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
