import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.appContainer}>
    <View style={styles.searchView}>
      <Searchbar />
    </View>
    <View style={styles.listView}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchView: {
    padding: 16,
  },
  listView: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
