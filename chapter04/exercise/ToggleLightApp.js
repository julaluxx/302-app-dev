import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const ToggleLightApp = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(previousState => !previousState);
    };

    return (
        <View style={[styles.container, isOn ? styles.containerOn : styles.containerOff]}>
            <StatusBar barStyle={isOn ? "dark-content" : "light-content"} />

            <View style={[styles.card, styles.shadow]}>
                <Text style={[styles.title, { color: isOn ? '#E65100' : '#5D4037' }]}>
                    Toggle Light
                </Text>
                <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>

                <View style={[styles.indicator, { backgroundColor: isOn ? '#FFB74D' : '#D7CCC8' }]}>
                    <Text style={styles.statusEmoji}>{isOn ? "💡" : "🌑"}</Text>
                </View>

                <Text style={styles.statusText}>
                    The light is {isOn ? <Text style={styles.onText}>ON</Text> : <Text style={styles.offText}>OFF</Text>}
                </Text>

                <TouchableOpacity
                    style={[styles.button, isOn ? styles.buttonOn : styles.buttonOff]}
                    onPress={toggleSwitch}
                >
                    <Text style={styles.buttonText}>
                        {isOn ? "Turn OFF" : "Turn ON"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.5s ease',
    },
    containerOn: {
        backgroundColor: '#FFF3E0',
    },
    containerOff: {
        backgroundColor: '#F5F5F5',
    },
    card: {
        width: '85%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#90A4AE',
        marginBottom: 30,
        fontWeight: '500',
    },
    indicator: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: "#FFB74D",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5,
    },
    statusEmoji: {
        fontSize: 50,
    },
    statusText: {
        fontSize: 20,
        color: '#555',
        marginBottom: 30,
    },
    onText: {
        fontWeight: 'bold',
        color: '#EF6C00',
    },
    offText: {
        fontWeight: 'bold',
        color: '#757575',
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonOn: {
        backgroundColor: '#FFCC80',
    },
    buttonOff: {
        backgroundColor: '#607D8B',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default ToggleLightApp;
