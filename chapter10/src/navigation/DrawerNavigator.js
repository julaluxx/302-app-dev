import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UserDashboardScreen from '../screens/UserDashboardScreen';
// import CartScreen from '../screens/CartScreen';
// import PaymentScreen from '../screens/PaymentScreen';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();

// ฟังก์ชัน Logout
const handleLogout = async (navigation) => {
    await AsyncStorage.removeItem("user");
    Alert.alert("Logout", "ออกจากระบบเรียบร้อย");
    navigation.replace("Login");
};

// สร้าง Custom Drawer Menu
const CustomDrawerContent = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>📚 E-Book Menu</Text>

            <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>🏠 Dashboard</Text>
            </TouchableOpacity>
{/* 
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>🛒 View Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>💳 Manage Payments</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => handleLogout(navigation)}>
                <Text style={{ fontSize: 18, color: 'red' }}>🚪 Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

// สร้าง Drawer Navigator
export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="UserDashboard" component={UserDashboardScreen} options={{ title: "🏠 Dashboard" }} />
            {/* <Drawer.Screen name="Cart" component={CartScreen} options={{ title: "🛒 View Cart" }} />
            <Drawer.Screen name="Payments" component={PaymentScreen} options={{ title: "💳 Manage Payments" }} /> */}
        </Drawer.Navigator>
    );
}
