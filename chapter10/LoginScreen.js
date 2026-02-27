import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const API_URL = "http://your-local-ip/api/login.php";

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(API_URL, { username, password });
            if (response.data.status === "success" && response.data.role === "admin") {
                navigation.navigate('AdminDashboard');
            } else {
                Alert.alert("Login Failed", "Invalid username or password");
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <View>
            <Text>เข้าสู่ระบบ</Text>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
