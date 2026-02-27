import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/HomeScreenStyles'; // นำเข้า Styles

const API_URL = "http://192.168.56.1/ebookshop/api/books/get_books.php"; // เปลี่ยนเป็น URL จริงของคุณ
const IMAGE_BASE_URL = "http://192.168.56.1/ebookshop/images/"; // เปลี่ยนเป็น URL ที่ถูกต้องของรูปภาพ

const HomeScreen = ({ navigation }) => {
    // สร้าง state สำหรับเก็บข้อมูลหนังสือ
    const [books, setBooks] = useState([]); // เก็บรายการหนังสือทั้งหมด
    const [search, setSearch] = useState(''); // เก็บค่าข้อความที่ใช้ค้นหา
    const [filteredBooks, setFilteredBooks] = useState([]); // เก็บรายการหนังสือที่ค้นหาได้
    const [loggedIn, setLoggedIn] = useState(false); // สถานะการเข้าสู่ระบบ

    // ใช้ useEffect เพื่อโหลดข้อมูลหนังสือเมื่อหน้าถูกโหลด
    useEffect(() => {
        fetchBooks();
    }, []);

    // ดึงข้อมูลหนังสือจาก API และอัปเดต state
    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_URL);
            console.log("API Response:", response.data); // ตรวจสอบข้อมูล API

            if (response.data.status === "success" && Array.isArray(response.data.ebooks)) {
                // ปรับค่า image ให้เป็น URL ที่ถูกต้อง
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

    // ฟังก์ชันค้นหาหนังสือโดยใช้ค่าที่ผู้ใช้ป้อนในช่องค้นหา
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

    //ฟังก์ชันออกจากระบบ (Logout)
    const handleLogout = async () => {
        await AsyncStorage.removeItem("user"); // ลบข้อมูลผู้ใช้ที่เก็บไว้
        Alert.alert("Logout", "ออกจากระบบเรียบร้อย");
        navigation.navigate("Login"); // กลับไปหน้า Login
    };

    return (
        <View style={styles.container}>
            {/* ส่วนหัวของแอป */}
            <View style={styles.header}>
                <Text style={styles.headerText}>📚 E-Book Shop</Text>
                <View style={styles.menu}>
                    {!loggedIn ? (
                        <>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.menuText}>✍️ Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.menuText}>🔑Login</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <TouchableOpacity onPress={handleLogout}>
                            <Text style={styles.menuText}>Logout</Text>
                        </TouchableOpacity>
                    )}
                </View>
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

            {/* แสดงรายการหนังสือ */}
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
                    </View>
                )}
            />
        </View>
    );
};
export default HomeScreen;
