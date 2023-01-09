// import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
// import { Searchbar } from 'react-native-paper';
// import { useState } from 'react';
// import { RestaurantInfo } from '../restaurants/components/restaurantnfo'


// export const RestaurantsScreen = () => {

//   const [searchField, setSearchField] = useState("")

//   const onChange = text => setSearchField(text);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.search}>
//         <Searchbar />
//       </View>
//       <View style={styles.list}>
//         <RestaurantInfo />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//   }
// });


import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from '../restaurants/components/restaurantnfo'


// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});