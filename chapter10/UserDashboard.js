import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Button, Alert } from 'react-native';
import axios from 'axios';

const API_URL = "http://fantastic-bassoon-x479wp54wpgfp477.github.dev/api/get_books.php";
const ADD_TO_CART_URL = "http://fantastic-bassoon-x479wp54wpgfp477.github.dev/api/add_to_cart.php";

const UserDashboard = ({ route }) => {
    const [books, setBooks] = useState([]);
    const { userId } = route.params;

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(API_URL);
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const addToCart = async (bookId) => {
        try {
            await axios.post(ADD_TO_CART_URL, { user_id: userId, book_id: bookId });
            Alert.alert("Added to cart");
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <View>
            <Text>📚 รายการหนังสือ</Text>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.cover_image }} style={{ width: 100, height: 150 }} />
                        <Text>{item.title} - {item.author}</Text>
                        <Text>ราคา: {item.price} บาท</Text>
                        <Button title="เพิ่มลงตะกร้า" onPress={() => addToCart(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default UserDashboard;
