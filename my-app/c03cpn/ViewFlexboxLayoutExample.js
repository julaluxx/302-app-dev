import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewFlexboxLayoutExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Layout Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>

      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#add8e6",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 20,
  },
  subtitle: {
    fontSize: 16,
    position: "absolute",
    top: 50,
    color: "#555",
  },
});

export default ViewFlexboxLayoutExample;
