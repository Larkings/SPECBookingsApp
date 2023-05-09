import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listings from "../config/listings";

function ArtistScreen({ navigation }) {
  const [query, setQuery] = useState("");

  return (
    <Screen style={styles.screen}>
      <View style={{ margin: 10 }}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('ArtistDetails', { item: item })}
          >
            <Card
              title={item.title}
              subTitle={"€" + item.price}
              image={item.image}
            />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </Screen>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Image" component={ViewImageScreen} />
      <Tab.Screen name="Artist" component={ArtistScreen} />
    </Tab.Navigator>
  );
};



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
    borderBottomColor: "#fff",
    backgroundColor: colors.light,
  },
});

export default ArtistScreen;
