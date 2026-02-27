import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native"; // ✅ เพิ่ม useFocusEffect
import axios from "axios"; // ✅ เพิ่ม axios สำหรับส่ง API
import styles from "../styles/CartScreenStyles";

const API_CHECKOUT_URL = "http://192.168.56.1/ebookshop/api/orders/checkout.php"; // ✅ เปลี่ยนเป็น URL จริงของ API

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const [userId, setUserId] = useState(null);

    // ✅ โหลดข้อมูลตะกร้าสินค้าและข้อมูลผู้ใช้
    useFocusEffect(
        React.useCallback(() => {
            loadCartItems();
            loadUserData();
        }, [])
    );

    // ✅ โหลดสินค้าจาก AsyncStorage
    const loadCartItems = async () => {
        try {
            const cart = await AsyncStorage.getItem("cart");
            if (cart) {
                setCartItems(JSON.parse(cart));
            } else {
                setCartItems([]); // ถ้าไม่มีสินค้า ให้แสดงว่าตะกร้าว่าง
            }
        } catch (error) {
            console.error("Error loading cart items:", error);
        }
    };

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

    // ✅ ฟังก์ชันชำระเงิน (Checkout)
    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            Alert.alert("ตะกร้าสินค้าว่าง", "กรุณาเพิ่มสินค้าลงตะกร้าก่อนชำระเงิน");
            return;
        }

        if (!userId) {
            Alert.alert("เกิดข้อผิดพลาด", "ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบใหม่");
            return;
        }

        const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0); // ✅ คำนวณราคารวม

        try {
            const response = await axios.post(API_CHECKOUT_URL, {
                user_id: userId,
                total_price: totalPrice,
                cart_items: cartItems,
            });

            if (response.data.status === "success") {
                Alert.alert("สั่งซื้อสำเร็จ", "คำสั่งซื้อของคุณถูกบันทึกเรียบร้อยแล้ว!");
                await AsyncStorage.removeItem("cart"); // ✅ เคลียร์ตะกร้าหลังจากสั่งซื้อ
                setCartItems([]);
                navigation.navigate("Orders"); // ✅ ไปยังหน้าประวัติคำสั่งซื้อ
            } else {
                Alert.alert("เกิดข้อผิดพลาด", response.data.message);
            }
        } catch (error) {
            console.error("Checkout Error:", error);
            Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถทำรายการได้ กรุณาลองใหม่");
        }
    };

    // ✅ ฟังก์ชันล้างตะกร้า
    const clearCart = async () => {
        try {
            setCartItems([]);
            await AsyncStorage.removeItem("cart");
            Alert.alert("ล้างตะกร้า", "ตะกร้าสินค้าถูกล้างแล้ว");
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>🛒 ตะกร้าสินค้า</Text>

            {/* ✅ แสดงรายการสินค้า */}
            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>ตะกร้าว่างเปล่า</Text>
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
                            {/* ปุ่มลบสินค้า */}
                            <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
                                <Text style={styles.removeButtonText}>❌</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}

            {/* ปุ่มดำเนินการต่อ */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={clearCart} style={styles.clearCartButton}>
                    <Text style={styles.clearCartButtonText}>🗑️ ล้างตะกร้า</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>💳 ชำระเงิน</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartScreen;
