import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';

const WeatherCard = ({ city, temperature, condition }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.cityName}>{city}</Text>
                    <Text style={styles.temperature}>{temperature}</Text>
                </View>
                <Text style={styles.emoji}>{condition}</Text>
            </View>
        </View>
    );
};

const WeatherDisplayApp = () => {
    const weatherData = [
        { id: 1, city: 'Bangkok', temperature: '34°C', condition: '☀️' },
        { id: 2, city: 'Chiang Mai', temperature: '28°C', condition: '☁️' },
        { id: 3, city: 'Phuket', temperature: '30°C', condition: '🌧️' },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.headerTitle}>Weather Forecast</Text>
            <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>

            <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
                {weatherData.map((data) => (
                    <WeatherCard
                        key={data.id}
                        city={data.city}
                        temperature={data.temperature}
                        condition={data.condition}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3E0',
        alignItems: 'center',
        paddingTop: 60,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#E65100',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#FB8C00',
        marginBottom: 30,
        fontWeight: '500',
    },
    listContainer: {
        width: '100%',
        paddingBottom: 20,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 320,
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        shadowColor: "#FFB74D",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        borderLeftWidth: 5,
        borderLeftColor: '#FFCC80',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5D4037',
        marginBottom: 5,
    },
    temperature: {
        fontSize: 24,
        color: '#FF9800',
        fontWeight: '800',
    },
    emoji: {
        fontSize: 40,
    }
});

export default WeatherDisplayApp;
