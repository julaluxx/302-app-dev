import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const API_URL = "http://your-local-ip/api/register.php";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post(API_URL, { username, password, role: "user" });
            Alert.alert(response.data.message);
            navigation.navigate('Login');
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;
