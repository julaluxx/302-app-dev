import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import UserDashboardScreen from "./src/screens/UserDashboardScreen";
import CartScreen from "./src/screens/CartScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import OrdersScreen from "./src/screens/OrdersScreen"; // ✅ เพิ่ม OrdersScreen
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Bottom Tab Navigator สำหรับ User Dashboard
function DashboardTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={UserDashboardScreen} options={{ title: "🏠 Dashboard" }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{ title: "🛒 View Cart" }} />
            <Tab.Screen name="Payments" component={PaymentScreen} options={{ title: "💳 Payments" }} />
            <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: "📦 Orders" }} />
        </Tab.Navigator>
    );
}

// ✅ ใช้ Stack Navigator โดยให้ HomeScreen เป็นหน้าแรก
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "📚 E-Book Shop" }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: "🔑 เข้าสู่ระบบ" }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "✍️ สมัครสมาชิก" }} />
                <Stack.Screen name="Dashboard" component={DashboardTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
