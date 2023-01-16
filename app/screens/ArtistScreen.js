import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Ali B",
    price: -10,
    image: require("../assets/ali-b.jpg"),
  },
  {
    id: 2,
    title: "Jordan Wayne",
    price: 1000,
    image: require("../assets/jordan_wayne_SPEC.jpg"),
  },
  {
    id: 3,
    title: "Numidia",
    price: 1000,
    image: require("../assets/numidia.jpg"),
  },
  {
    id: 4,
    title: "Ronnie Flex",
    price: 1000,
    image: require("../assets/Persfoto-01-Ronnie-Flex-min-scaled.jpg"),
  },
  {
    id: 5,
    title: "Boef",
    price: 1000,
    image: require("../assets/PERSFOTO-BOEF-02-scaled-e1588502734578.jpg"),
  },
  {
    id: 6,
    title: "Glen Faria",
    price: 1000,
    image: require("../assets/PERSFOTO-GLEN-FARIA-02-scaled.jpg"),
  },
  {
    id: 7,
    title: "Ice",
    price: 1000,
    image: require("../assets/PERSFOTO-ICE-01-min-scaled.jpg"),
  },
  {
    id: 8,
    title: "Lil Turkey Boy",
    price: 250000,
    image: require("../assets/1c8b2475-d5fa-471d-8c8f-82f8ada24174.jpg"),
  },
];

function ArtistScreen({ navigation }) {
  const [query, setQuery] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={{ margin: 40 }}>
        <Text style={styles.title}>Signees of SPEC</Text>
      </View>
      <TextInput
        onChangeText={(text) => setQuery(text)}
        placeholder=" search here!"
        style={styles.searchBar}
      />
      <FlatList
        style={{ flex: 1 }}
        columnWrapperStyle={styles.wrapper}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"€" + item.price}
            image={item.image}
          />
        )}
        numColumns={2}
      />
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
    fontFamily: "sans-serif",
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

export default ArtistScreen;
