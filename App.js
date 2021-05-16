import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.searchView}>
          <Searchbar />
        </View>
        <View style={styles.listView}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
