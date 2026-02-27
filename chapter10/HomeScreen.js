import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const API_URL = "http://192.168.56.1/ebook-store/MobileApp/get_books.php"; // เปลี่ยนเป็น IP ของคุณ

const HomeScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_URL);
            setBooks(response.data);
            setFilteredBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleSearch = () => {
        if (search.trim() === '') {
            setFilteredBooks(books);
        } else {
            const results = books.filter(book =>
                book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.description.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredBooks(results);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        Alert.alert("Logout", "ออกจากระบบเรียบร้อย");
    };

    return (
        <View style={styles.container}>
            {/* ส่วนหัวแอป */}
            <View style={styles.header}>
                <Text style={styles.headerText}>E-Book Shop</Text>
                <View style={styles.menu}>
                    {!loggedIn ? (
                        <>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.menuText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.menuText}>Login</Text>
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
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.bookCard}>
                        <Image source={{ uri: item.cover_image }} style={styles.bookImage} />
                        <View style={styles.bookDetails}>
                            <Text style={styles.bookTitle}>{item.title}</Text>
                            <Text style={styles.bookDescription}>{item.description}</Text>
                            <Text style={styles.bookPrice}>{item.price} บาท</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    menu: {
        flexDirection: 'row',
    },
    menuText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    bookCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    bookImage: {
        width: 80,
        height: 120,
        borderRadius: 5,
    },
    bookDetails: {
        flex: 1,
        marginLeft: 10,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    bookPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default HomeScreen;
