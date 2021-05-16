import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ backgroundColor: 'green' }}>
          <Text style={{ padding: 16 }}>search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Text style={{ padding: 16 }}>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  //
});
