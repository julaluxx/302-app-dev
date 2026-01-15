import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// คอมโพเนนต์สำหรับแสดงปุ่ม โดยรับ Props onIncrease ซึ่งเป็นฟังก์ชัน
const Counter = ({ onIncrease }) => {
    return <Button title="Increase" onPress={onIncrease} />;
};

// คอมโพเนนต์หลักที่ใช้ State เพื่อจัดการค่า count
const CounterApp = () => {
    const [count, setCount] = useState(0); // กำหนดค่าเริ่มต้นของ count เป็น 0

    // ฟังก์ชันเพิ่มค่า count
    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>แบบฟังก์ชัน (Callback Props)</Text>
            <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
            {/* แสดงค่าปัจจุบันของ count */}
            <Text style={styles.text}>Count: {count}</Text>
            {/* ส่งฟังก์ชัน increaseCount ไปยัง Counter ผ่าน Props onIncrease */}
            <Counter onIncrease={increaseCount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, marginBottom: 10 },
    title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, },
    subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});

export default CounterApp;
