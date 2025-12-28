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
      <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>

      {/* Local Image Example */}
      <Image
        source={require("../assets/local-image.png")}
        style={styles.image}
      />

      {/* Remote Image Example */}
      <Text style={styles.title}>Remote Image Example</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/87/d3/eb/87d3ebd45e7a220c07b930f898c570a3.jpg",
        }}
        style={styles.image}
      />

      {/* Image Background Example */}
      <Text style={styles.title}>Image Background Example</Text>
      <ImageBackground
        source={{
          uri: "https://t3.ftcdn.net/jpg/00/57/08/46/360_F_57084608_ciyjhtwgdKSjeZwhDTNDyuMdWik8gNF9.jpg",
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
          uri: "https://www.veipd.org/earlyintervention/wp-content/uploads/2015/12/gift-281x300.jpg",
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
