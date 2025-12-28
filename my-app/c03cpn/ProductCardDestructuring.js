import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Child Component ใช้ Destructuring props เพื่อดึงค่า name และ price ออกมา
const ProductCard = ({ name, price }) => {
    return (
        <View style={styles.card}>
            {/* แสดงชื่อสินค้า */}
            <Text>Product Name: {name}</Text>
            {/* แสดงราคาสินค้า */}
            <Text>Price: ${price}</Text>
        </View>
    );
};

// Parent Component ที่เรียกใช้ ProductCard และส่ง props ให้
const App = () => {
    return (
        <View style={styles.container}>
            {/* ส่งค่า name และ price ให้ ProductCard ผ่าน props */}
            <ProductCard name="T-shirt" price={25} />
            <ProductCard name="Shoes" price={60} />
        </View>
    );
};

// กำหนด Style สำหรับ UI
const styles = StyleSheet.create({
    container: {
        flex: 1, // ใช้พื้นที่เต็มหน้าจอ
        justifyContent: "center", // จัดให้อยู่กลางหน้าจอแนวตั้ง
        alignItems: "center", // จัดให้อยู่กลางหน้าจอแนวนอน
        backgroundColor: "#f5f5f5", // สีพื้นหลัง
    },
    card: {
        padding: 10, // ระยะห่างภายในของการ์ด
        borderWidth: 1, // ขอบของการ์ด
        borderColor: "#ddd", // สีของขอบ
        marginBottom: 10, // ระยะห่างระหว่างการ์ด
    },
});

export default App; // ส่งออก Component App ให้ใช้งานในไฟล์อื่น
