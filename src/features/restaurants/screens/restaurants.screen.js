import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.appContainer}>
    <View style={styles.searchView}>
      <Searchbar />
    </View>
    <View style={styles.listView}>
      <Text>list</Text>
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
