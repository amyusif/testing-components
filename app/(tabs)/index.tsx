import {StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.MainCont}>
      <Text>Hello World! This is my first app since I came back</Text>
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
