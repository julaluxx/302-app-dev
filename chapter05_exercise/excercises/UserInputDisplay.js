import React, { useState } from "react";
import {
  TextInput,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const UserInputDisplay = () => {
  const [basicText, setBasicText] = useState("");
  const [message, setMessage] = useState("");

  const handlePress = () => {
    setMessage(`You wished: ${basicText}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.headerGlow}>
        <Text style={styles.h1}>User Input Display App</Text>
        <Text style={styles.programmerName}>Programmer: Julalak Kinnara ✧</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Tell me your wish..."
        placeholderTextColor="#c3a1d8"
        value={basicText}
        onChangeText={setBasicText}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Send to the Stars</Text>
      </TouchableOpacity>

      {message ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#f5f0ff",
    alignItems: "center",
  },
  headerGlow: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 30,
    backgroundColor: "rgba(255, 245, 255, 0.65)",
    borderWidth: 1,
    borderColor: "rgba(220, 200, 255, 0.4)",
    shadowColor: "#d5c4ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
  },
  h1: {
    fontSize: 38,
    fontWeight: "700",
    color: "#e0bbff",
    letterSpacing: 1.2,
    textAlign: "center",
    textShadowColor: "rgba(255, 220, 245, 0.85)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
  programmerName: {
    fontSize: 17,
    fontStyle: "italic",
    color: "#b19cd9",
    marginTop: 12,
    opacity: 0.85,
    letterSpacing: 0.6,
  },
  input: {
    height: 58,
    width: "88%",
    backgroundColor: "rgba(255, 245, 255, 0.78)",
    borderRadius: 30,
    paddingHorizontal: 24,
    fontSize: 18,
    color: "#6a4c93",
    borderWidth: 1.5,
    borderColor: "rgba(200, 180, 255, 0.45)",
    shadowColor: "#e0c3ff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 28,
  },
  button: {
    backgroundColor: "#d7c0ff",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginTop: 12,
    shadowColor: "#c9a8ff",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "600",
    letterSpacing: 0.8,
    textShadowColor: "rgba(100, 60, 140, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  messageContainer: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 28,
    backgroundColor: "rgba(245, 235, 255, 0.55)",
    borderWidth: 1,
    borderColor: "rgba(220, 200, 255, 0.5)",
    shadowColor: "#d0b8ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
  },
  message: {
    fontSize: 22,
    color: "#7a5ab8",
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: 0.4,
    fontStyle: "italic",
    opacity: 0.92,
  },
});

export default UserInputDisplay;