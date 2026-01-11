import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// สร้าง Class Component
class SimpleMessage extends Component {
    // กำหนด state ใน constructor
    constructor(props) {
        super(props);
        this.state = {
            message: "ยินดีต้อนรับ!", // ค่าเริ่มต้นของข้อความ
        };
    }

    // ฟังก์ชันเปลี่ยนข้อความใน state
    handlePress = () => {
        this.setState({ message: "ขอบคุณที่มาเยี่ยมชมแอปของเรา!" });
    };

    render() {
        return (
            <View style={styles.container}>
                {/* แสดงข้อความจาก state */}
                <Text style={styles.text}>{this.state.message}</Text>

                {/* ปุ่มเรียกฟังก์ชัน handlePress */}
                <Button title="เปลี่ยนข้อความ" onPress={this.handlePress} />
            </View>
        );
    }
}

// กำหนดสไตล์สำหรับ UI
const styles = StyleSheet.create({
    container: {
        flex: 1, // ใช้พื้นที่เต็มหน้าจอ
        justifyContent: "center", // จัดให้อยู่กลางหน้าจอแนวตั้ง
        alignItems: "center", // จัดให้อยู่กลางหน้าจอแนวนอน
        backgroundColor: "#f5f5f5", // สีพื้นหลัง
    },
    text: {
        fontSize: 18, // ขนาดตัวอักษร
        marginBottom: 20, // ระยะห่างจากด้านล่าง
        color: "#333", // สีข้อความ
    },
});

export default SimpleMessage;
