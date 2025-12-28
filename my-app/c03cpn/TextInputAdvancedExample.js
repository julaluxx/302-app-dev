import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

const TextInputAdvancedExample = () => {
  const [basicText, setBasicText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TextInput Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>

      {/* Basic TextInput Example */}
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={basicText}
        onChangeText={setBasicText}
      />
      <Text style={styles.output}>You typed: {basicText}</Text>

      {/* Password TextInput Example */}
      <Text style={styles.title}>Password TextInput Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Text style={styles.output}>
        Password length: {password.length}
      </Text>

      {/* Email TextInput Example */}
      <Text style={styles.title}>Email TextInput Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text style={styles.output}>Email: {email}</Text>

      {/* Multiline TextInput Example */}
      <Text style={styles.title}>Multiline TextInput Example</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Type your message here..."
        multiline={true}
        numberOfLines={4}
        onChangeText={setMessage}
      />
      <Text style={styles.output}>Message: {message}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  output: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default TextInputAdvancedExample;
