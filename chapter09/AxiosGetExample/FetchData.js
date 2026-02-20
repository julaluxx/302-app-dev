// นำเข้า React, useState และ useEffect สำหรับจัดการ state และ side effects
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios"; // นำเข้า Axios สำหรับดึงข้อมูลจาก API

// คอมโพเนนต์ FetchData ใช้สำหรับดึงข้อมูลจาก API และแสดงผล
const FetchData = () => {
    // 🔹 สร้าง state `data` เพื่อเก็บข้อมูลที่ดึงมาจาก API
    const [data, setData] = useState([]);

    //ใช้ useEffect เพื่อดึงข้อมูลเมื่อคอมโพเนนต์โหลดครั้งแรก
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts") // ส่ง HTTP GET Request ไปที่ API
            .then((response) => setData(response.data)) //อัปเดต state `data` เมื่อได้ข้อมูล
            .catch((error) => console.error("เกิดข้อผิดพลาด:", error)); //จับข้อผิดพลาดหากเกิดปัญหากับ API
    }, []); //ใช้ `[]` เพื่อให้ useEffect ทำงานเพียงครั้งเดียวเมื่อคอมโพเนนต์โหลด

    return (
        <View style={styles.container}>
            <Text style={styles.header}>รายการโพสต์</Text>
            <FlatList
                data={data.slice(0, 5)} //แสดงเฉพาะ 5 รายการแรก
                keyExtractor={(item) => item.id.toString()} //กำหนด keyExtractor
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.body}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

// สไตล์สำหรับ React Native
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    item: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3, // สำหรับ Android
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    body: {
        color: '#7e7e7e',
    },
});

// ส่งออกคอมโพเนนต์ FetchData เพื่อใช้งานในไฟล์อื่น
export default FetchData;
