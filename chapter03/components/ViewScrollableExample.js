import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const ViewScrollableExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Scrollable View Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>

      <View style={styles.box}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.box}>
        <Text>Item 4</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
    marginTop: 50,
  },
  box: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#add8e6",
    marginVertical: 10,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
});

export default ViewScrollableExample;
