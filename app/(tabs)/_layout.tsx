import { Tabs } from 'expo-router';
import React from 'react';

import HomeScreen from '../(tabs)/index';

import { View, StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <View style={styles.MainCont}>
      <HomeScreen />
    </View>
  );
}


const styles = StyleSheet.create({
  MainCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
