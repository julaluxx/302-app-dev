import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from "react-native";

const Convert = () => {
    const [thb, setThb] = useState("");
    const [usd, setUsd] = useState(null);

    const convertCurrency = () => {
        const amount = parseFloat(thb);
        if (!isNaN(amount)) {
            const rate = 0.03;
            setUsd((amount * rate).toFixed(2));
        } else {
            setUsd(null);
        }
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Thai Baht to USD</Text>
                    <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>THB</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={thb}
                        onChangeText={setThb}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={convertCurrency}>
                    <Text style={styles.buttonText}>Convert</Text>
                </TouchableOpacity>

                {usd !== null && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>{thb} THB = {usd} USD</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8F5E9",
    },
    card: {
        width: "85%",
        backgroundColor: "#ffffff",
        padding: 25,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        alignItems: "center",
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#66BB6A',
        fontStyle: 'italic',
        letterSpacing: 0.5,
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#A5D6A7",
    },
    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#388E3C",
        marginRight: 10,
        width: 40,
    },
    input: {
        flex: 1,
        fontSize: 18,
        paddingVertical: 10,
        color: "#333",
    },
    button: {
        backgroundColor: "#66BB6A",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        shadowColor: "#2E7D32",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    resultContainer: {
        marginTop: 25,
        padding: 15,
        backgroundColor: "#F1F8E9",
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#C8E6C9",
    },
    resultText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#1B5E20",
    },
});

export default Convert;
