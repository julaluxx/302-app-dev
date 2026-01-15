import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name = 'Visitor' }) => {
    return <Text style={styles.text}>Hello, {name}!</Text>;
};

const DefaultPropsApp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>แบบค่าเริ่มต้น (Default Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
            <Greeting name="Julalak" />
            <Greeting />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, marginBottom: 10 },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});


export default DefaultPropsApp;
