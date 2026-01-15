import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserCard = ({ name, age }) => {
    return (
        <View>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Age: {age}</Text>
        </View>
    );
};

const SpreadPropsApp = () => {
    const userInfo = { name: 'Julalak', age: 24 };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>แบบกระจายค่า (Spread Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
            <UserCard {...userInfo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 18 },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});

export default SpreadPropsApp;
