import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

const WelcomeApp = () => {
  const [basicText, setBasicText] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.h1}>Welcome to the App!</Text>
      <Text style={styles.programmerName}>Programmer: Julalak Kinnara</Text>

      <Text style={styles.label}>Enter your name: </Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name here..."
        value={basicText}
        onChangeText={setBasicText}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Hello!", `Welcome, ${basicText}!`)}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
  },
  programmerName: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    width: "80%",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default WelcomeApp;
