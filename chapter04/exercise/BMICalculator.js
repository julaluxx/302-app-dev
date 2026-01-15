import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, StatusBar } from 'react-native';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
    const [statusColor, setStatusColor] = useState('#E65100');

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
            setBmi(null);
            setStatus('Please enter valid positive numbers');
            setStatusColor('#D84315');
            return;
        }

        const bmiValue = w / (h * h);
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
            setStatus('Underweight (น้ำหนักต่ำกว่าเกณฑ์)');
            setStatusColor('#4FC3F7');
        } else if (bmiValue < 25) {
            setStatus('Normal Weight (น้ำหนักปกติ)');
            setStatusColor('#66BB6A');
        } else if (bmiValue < 30) {
            setStatus('Overweight (น้ำหนักเกิน)');
            setStatusColor('#FFA726');
        } else {
            setStatus('Obesity (โรคอ้วน)');
            setStatusColor('#EF5350');
        }
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.card}>
                <Text style={styles.title}>BMI Calculator</Text>
                <Text style={styles.subtitle}>Programmer: Julalak Kinnara</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Weight (kg) / น้ำหนัก</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. 70"
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                        placeholderTextColor="#FFCC80"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Height (m) / ส่วนสูง</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="e.g. 1.75"
                        keyboardType="numeric"
                        value={height}
                        onChangeText={setHeight}
                        placeholderTextColor="#FFCC80"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                    <Text style={styles.buttonText}>Calculate</Text>
                </TouchableOpacity>

                {bmi && (
                    <View style={[styles.resultContainer, { borderColor: statusColor }]}>
                        <Text style={styles.resultLabel}>Your BMI</Text>
                        <Text style={[styles.bmiValue, { color: statusColor }]}>{bmi}</Text>
                        <Text style={[styles.resultStatus, { color: statusColor }]}>{status}</Text>
                    </View>
                )}

                {!bmi && status !== '' && (
                    <Text style={styles.errorText}>{status}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '85%',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        padding: 30,
        alignItems: 'center',
        shadowColor: "#FFB74D",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
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
        fontStyle: 'italic',
    },
    inputGroup: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#F57C00',
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF8E1',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#BF360C',
        borderWidth: 1,
        borderColor: '#FFE0B2',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#FF9800',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        shadowColor: "#F57C00",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    resultContainer: {
        alignItems: 'center',
        marginTop: 10,
        padding: 20,
        backgroundColor: '#FFF3E0',
        borderRadius: 15,
        width: '100%',
        borderWidth: 2,
        borderStyle: 'dashed',
    },
    resultLabel: {
        fontSize: 14,
        color: '#EF6C00',
        marginBottom: 5,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    bmiValue: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    resultStatus: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 5,
        textAlign: 'center',
    },
    errorText: {
        color: '#D84315',
        fontSize: 16,
        marginTop: 10,
    }
});

export default BMICalculator;
