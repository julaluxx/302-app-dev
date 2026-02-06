import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const ProductList = () => {
  const [basicText, setBasicText] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.h1}>Product List</Text>
      <Text style={styles.programmerName}>Programmer: Julalak Kinnara</Text>

      <View style={styles.productContainer}>
        <Image source={require("../assets/jacket.avif")} style={styles.image} />
        <Text style={styles.productName}>Product Name: Jacket</Text>
        <Text style={styles.price}>Price: $49.99</Text>
      </View>

      <View style={styles.productContainer}>
        <Image source={require("../assets/boxer.avif")} style={styles.image} />
        <Text style={styles.productName}>Product Name: Jacket</Text>
        <Text style={styles.price}>Price: $19.99</Text>
      </View>
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
  productContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#777",
    marginBottom: 15,
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

export default ProductList;
