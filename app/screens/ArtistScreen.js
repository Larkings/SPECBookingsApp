import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

function ArtistScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
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
});

// function ArtistScreen({ navigation }) {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require("../assets/sep09.jpg")}
//     >
//       <View style={styles.artistImageContainer}>
//         <Image
//           style={styles.artistImage}
//           source={require("../assets/jordan_wayne_SPEC.jpg")}
//         />
//         <Image
//           style={styles.artistImage}
//           source={require("../assets/ali-b.jpg")}
//         />
//         <Image
//           style={styles.artistImage}
//           source={require("../assets/ali-b.jpg")}
//         />
//         <Image
//           style={styles.artistImage}
//           source={require("../assets/ali-b.jpg")}
//         />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     // justifyContent: "flex-end",
//   },
//   artistImageContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     alignContent: "center",
//     flexWrap: "wrap",
//   },
//   artistImage: {
//     width: 180,
//     height: 180,
//   },
// });

export default ArtistScreen;
