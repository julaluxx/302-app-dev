import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewNestedExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nested View Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>

      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Child 1</Text>
        </View>
        <View style={styles.child}>
          <Text>Child 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  parent: {
    width: 200,
    height: 200,
    backgroundColor: "#ffb6c1",
    justifyContent: "space-between",
    alignItems: "center",
  },
  child: {
    width: 80,
    height: 80,
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

export default ViewNestedExample;
