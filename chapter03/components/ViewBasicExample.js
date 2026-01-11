import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewBasicExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic View Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
      <Text>Welcome to React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
});

export default ViewBasicExample;
