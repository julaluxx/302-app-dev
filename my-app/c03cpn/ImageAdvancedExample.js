import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from "react-native";

const ImageAdvancedExample = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Image Example</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>

      {/* Local Image Example */}
      <Image
        source={require("../assets/id-pic.jpg")}
        style={styles.image}
      />

      {/* Remote Image Example */}
      <Text style={styles.title}>Remote Image Example</Text>
      <Image
        source={{
          uri: "https://media1.tenor.com/m/x8v1oNUOmg4AAAAC/rickroll-roll.gif",
        }}
        style={styles.image}
      />

      {/* Image Background Example */}
      <Text style={styles.title}>Image Background Example</Text>
      <ImageBackground
        source={{
          uri: "https://yt3.googleusercontent.com/ytc/AIdro_kDHdHkAhjfKcsPetJRGlV7LfMisfFfs9aL7OfRdeVIXQE=s900-c-k-c0x00ffffff-no-rj",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.overlayText}>Hello on Background!</Text>
      </ImageBackground>

      {/* Placeholder Image Example */}
      <Text style={styles.title}>Placeholder Image Example</Text>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjt-ewgNomB7qqJH9Hn5VxQsnOgH_rRb2u9Q&s",
        }}
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
      />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  imageBackground: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  overlayText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
  },
});

export default ImageAdvancedExample;
