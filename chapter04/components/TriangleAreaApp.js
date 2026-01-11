import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TriangleAreaApp = () => {
    // State สำหรับเก็บค่าฐาน, ความสูง และผลลัพธ์
    const [base, setBase] = useState('');
    const [height, setHeight] = useState('');
    const [area, setArea] = useState(null);

    // ฟังก์ชันคำนวณพื้นที่สามเหลี่ยม
    const calculateArea = () => {
        const baseValue = parseFloat(base); // แปลงฐานเป็นตัวเลข
        const heightValue = parseFloat(height); // แปลงความสูงเป็นตัวเลข

        if (!isNaN(baseValue) && !isNaN(heightValue)) {
            const calculatedArea = 0.5 * baseValue * heightValue; // คำนวณพื้นที่
            setArea(calculatedArea.toFixed(2)); // เก็บผลลัพธ์ใน State และจำกัดทศนิยม 2 ตำแหน่ง
        } else {
            setArea('Invalid Input'); // กรณีค่าที่กรอกไม่ถูกต้อง
        }
    }; //end calculateArea Function

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Triangle Area Calculator</Text>
            <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>

            {/* ช่องกรอกค่าฐาน */}
            <TextInput
                style={styles.input}
                placeholder="Enter base"
                keyboardType="numeric"
                value={base}
                onChangeText={setBase}
            />

            {/* ช่องกรอกค่าความสูง */}
            <TextInput
                style={styles.input}
                placeholder="Enter height"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />

            {/* ปุ่มคำนวณ */}
            <Button title="Calculate" onPress={calculateArea} />

            {/* แสดงผลลัพธ์ */}
            {area !== null && ( // ตรวจสอบว่า State area ไม่ใช่ null
              <Text style={styles.result}>
                {/* ตรวจสอบว่า area เป็นตัวเลขหรือไม่ */}
                {isNaN(area)
                  ? area // ถ้า area ไม่ใช่ตัวเลข (NaN) แสดงข้อความ "Invalid Input"
                  : `Area: ${area} square units` // ถ้า area เป็นตัวเลข แสดงผลลัพธ์พื้นที่พร้อมหน่วย
                }
              </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
    input: {borderWidth: 1,borderColor: '#ccc',padding: 10, marginBottom: 10, borderRadius: 5, width: '80%',},
    result: { fontSize: 18, marginTop: 20, color: '#333' },
});

export default TriangleAreaApp;
