import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import styles from "../styles/OrdersScreenStyles"; // ✅ นำเข้า Styles

const API_ORDERS_URL = "http://192.168.56.1/ebookshop/api/orders/get_orders.php"; // ✅ เปลี่ยนเป็น URL จริงของ API

const OrdersScreen = ({ navigation }) => {
    const [orders, setOrders] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        loadUserData();
    }, []);

    useEffect(() => {
        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    // ✅ โหลดข้อมูลผู้ใช้จาก AsyncStorage
    const loadUserData = async () => {
        try {
            const user = await AsyncStorage.getItem("user");
            if (user) {
                const parsedUser = JSON.parse(user);
                setUserId(parsedUser.user_id); // ดึง user_id
            }
        } catch (error) {
            console.error("Error loading user data:", error);
        }
    };

    // ✅ ดึงข้อมูลคำสั่งซื้อของผู้ใช้จาก API
    const fetchOrders = async () => {
        try {
            const response = await axios.post(API_ORDERS_URL, { user_id: userId });

            if (response.data.status === "success") {
                setOrders(response.data.orders);
            } else {
                Alert.alert("เกิดข้อผิดพลาด", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถดึงข้อมูลคำสั่งซื้อได้");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>📦 ประวัติคำสั่งซื้อ</Text>

            {orders.length === 0 ? (
                <Text style={styles.emptyOrdersText}>ยังไม่มีคำสั่งซื้อ</Text>
            ) : (
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.order_id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.orderCard}>
                            <Text style={styles.orderText}>📌 หมายเลขคำสั่งซื้อ: {item.order_id}</Text>
                            <Text style={styles.orderText}>💰 ราคารวม: {item.total_price} บาท</Text>
                            <Text style={styles.orderText}>📆 วันที่สั่งซื้อ: {item.created_at}</Text>
                            <Text style={[styles.orderStatus, item.order_status === "Confirmed" ? styles.confirmed : item.order_status === "Cancelled" ? styles.cancelled : styles.pending]}>
                                🛒 สถานะ: {item.order_status}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("OrderDetails", { orderId: item.order_id })} style={styles.detailsButton}>
                                <Text style={styles.detailsButtonText}>🔍 ดูรายละเอียด</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default OrdersScreen;
