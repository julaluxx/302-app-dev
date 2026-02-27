import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/UserDashboardStyles'; // นำเข้า Styles
import { MaterialIcons } from '@expo/vector-icons'; // ✅ เพิ่มไอคอน

const API_URL = "http://192.168.56.1/ebookshop/api/books/get_books.php"; // URL ของ API
const IMAGE_BASE_URL = "http://192.168.56.1/ebookshop/images/"; // URL รูปภาพ

const UserDashboardScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [username, setUsername] = useState("");

    useEffect(() => {
        fetchBooks();
        fetchUserData();
    }, []);

    // ✅ ดึงชื่อผู้ใช้ที่ล็อกอินจาก AsyncStorage
    const fetchUserData = async () => {
        try {
            const userData = await AsyncStorage.getItem("user");
            if (userData) {
                const user = JSON.parse(userData);
                setUsername(user.username);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    // ✅ ฟังก์ชัน Logout
    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("user"); // ลบข้อมูลผู้ใช้
            Alert.alert("ออกจากระบบ", "คุณออกจากระบบเรียบร้อยแล้ว!");
            navigation.replace("Login"); // นำทางกลับไปหน้า Login
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    // ดึงข้อมูล E-Books จาก API
    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_URL);
            if (response.data.status === "success" && Array.isArray(response.data.ebooks)) {
                const updatedBooks = response.data.ebooks.map(book => ({
                    ...book,
                    image: book.image ? `${IMAGE_BASE_URL}${book.image}` : "https://via.placeholder.com/100x150"
                }));
                setBooks(updatedBooks);
                setFilteredBooks(updatedBooks);
            } else {
                console.warn("No books found");
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    // ค้นหาหนังสือ
    const handleSearch = () => {
        if (search.trim() === '') {
            setFilteredBooks(books);
        } else {
            const results = books.filter(book =>
                book.name.toLowerCase().includes(search.toLowerCase()) ||
                (book.description && book.description.toLowerCase().includes(search.toLowerCase()))
            );
            setFilteredBooks(results);
        }
    };

    // ✅ เพิ่มหนังสือเข้า Cart (เมื่อคลิกไอคอน 🛒)
    const addToCart = async (book) => {
        try {
            const cart = await AsyncStorage.getItem('cart');
            const cartItems = cart ? JSON.parse(cart) : [];
            cartItems.push(book);
            await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
            Alert.alert("เพิ่มลงตะกร้า", `📚 ${book.name} ถูกเพิ่มลงตะกร้าแล้ว!`);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <View style={styles.container}>
            {/* ✅ แสดงชื่อผู้ใช้และปุ่ม Logout */}
            <View style={styles.userInfoContainer}>
                <Text style={styles.welcomeText}>👤 ยินดีต้อนรับ, {username || "Guest"}!</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>🚪 ออกจากระบบ</Text>
                </TouchableOpacity>
            </View>

            {/* ช่องค้นหาหนังสือ */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="ค้นหาหนังสือ..."
                    value={search}
                    onChangeText={setSearch}
                />
                <Button title="ค้นหา" onPress={handleSearch} />
            </View>

            {/* ✅ แสดงรายการหนังสือ พร้อมไอคอน 🛒 สำหรับเพิ่มลงตะกร้า */}
            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.ebook_id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.bookCard}>
                        <Image source={{ uri: item.image }} style={styles.bookImage} />
                        <View style={styles.bookDetails}>
                            <Text style={styles.bookTitle}>{item.name}</Text>
                            <Text style={styles.bookDescription}>{item.description || "ไม่มีคำอธิบาย"}</Text>
                            <Text style={styles.bookPrice}>💰 {item.price} บาท</Text>
                        </View>
                        {/* ✅ ปุ่มเพิ่มสินค้าเข้า Cart ใช้ไอคอน 🛒 */}
                        <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
                            <MaterialIcons name="add-shopping-cart" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default UserDashboardScreen;
