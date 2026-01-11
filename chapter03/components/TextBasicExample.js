import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextBasicExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Text Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
      <Text style={styles.basicText}>
        Hello, this is a basic text example!
      </Text>
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
  basicText: {
    fontSize: 16,
  },
});

export default TextBasicExample;
