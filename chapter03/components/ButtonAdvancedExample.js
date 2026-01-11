import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";

const ButtonAdvancedExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Advanced Button Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>

      {/* Basic Button Example */}
      <Button
        title="Press Me"
        onPress={() => Alert.alert("Button Pressed", "You clicked the button!")}
      />

      {/* Colored Button Example */}
      <Text style={styles.title}>Colored Button Example</Text>
      <Button
        title="Blue Button"
        color="blue"
        onPress={() =>
          Alert.alert("Button Pressed", "You clicked the blue button!")
        }
      />

      {/* Custom Button Example */}
      <Text style={styles.title}>Custom Button Example</Text>
      <Pressable
        style={({ pressed }) => [
          styles.customButton,
          { backgroundColor: pressed ? "#ddd" : "#007BFF" },
        ]}
        onPress={() => Alert.alert("Button Pressed", "Custom button clicked!")}
      >
        <Text style={styles.buttonText}>Custom Button</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    marginTop: 50,
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
  customButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ButtonAdvancedExample;
