import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";

function ArtistProfileScreen({ navigation, route }) {
  return (
    <Screen style={styles.screen}>
      <View style={{ margin: 40 }}>
        <Text style={styles.title}>{route.params.item.title}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  wrapper: {
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontFamily: "Avenir",
    fontSize: 40,
  },
  searchBar: {
    height: 60,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    margin: 20,
    borderBottomColor: "#fff",
    backgroundColor: colors.light,
  },
});

export default ArtistProfileScreen;
