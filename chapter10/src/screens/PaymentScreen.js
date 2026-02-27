import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/PaymentScreenStyles"; // นำเข้า Styles

const PaymentScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        loadCartItems();
    }, []);

    // ✅ โหลดสินค้าจาก Cart และคำนวณยอดรวม
    const loadCartItems = async () => {
        try {
            const cart = await AsyncStorage.getItem("cart");
            if (cart) {
                const cartData = JSON.parse(cart);
                setCartItems(cartData);

                // คำนวณยอดรวม
                const total = cartData.reduce((sum, item) => sum + parseFloat(item.price), 0);
                setTotalAmount(total);
            }
        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    };

    // ✅ ฟังก์ชันจำลองการชำระเงิน
    const handlePayment = async () => {
        if (cartItems.length === 0) {
            Alert.alert("❌ ไม่สามารถชำระเงินได้", "ไม่มีสินค้าในตะกร้า");
            return;
        }

        try {
            // จำลองการชำระเงิน (จริงๆ ควรส่งข้อมูลไปยัง Backend)
            await AsyncStorage.removeItem("cart"); // ล้างตะกร้าหลังชำระเงิน
            setCartItems([]);
            setTotalAmount(0);
            Alert.alert("✅ ชำระเงินสำเร็จ", "ขอบคุณสำหรับการสั่งซื้อ!");

            // กลับไปหน้าหลักหลังชำระเงิน
            navigation.navigate("Dashboard");
        } catch (error) {
            console.error("Error during payment:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>💳 ชำระเงิน</Text>

            {/* ✅ แสดงรายการสินค้า */}
            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>ไม่มีสินค้าในตะกร้า</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.ebook_id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                            <View style={styles.cartItemDetails}>
                                <Text style={styles.cartItemTitle}>{item.name}</Text>
                                <Text style={styles.cartItemPrice}>💰 {item.price} บาท</Text>
                            </View>
                        </View>
                    )}
                />
            )}

            {/* ✅ แสดงยอดรวมและปุ่มชำระเงิน */}
            <View style={styles.summaryContainer}>
                <Text style={styles.totalText}>ยอดรวม: 💰 {totalAmount.toFixed(2)} บาท</Text>
                <TouchableOpacity onPress={handlePayment} style={styles.paymentButton}>
                    <Text style={styles.paymentButtonText}>✅ ชำระเงิน</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PaymentScreen;
