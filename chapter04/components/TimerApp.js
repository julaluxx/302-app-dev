import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// คอมโพเนนต์หลักสำหรับแอปพลิเคชันจับเวลา
const TimerApp = () => {
  // State สำหรับเก็บเวลา (นับเป็นวินาที)
  const [time, setTime] = useState(0);

  // State สำหรับเก็บสถานะการจับเวลา (เริ่ม/หยุด)
  const [isRunning, setIsRunning] = useState(false);

  // ใช้ useEffect สำหรับตั้งค่าและล้าง Timer
  useEffect(() => {
    let timer; // ตัวแปรสำหรับเก็บ Timer
    if (isRunning) {
      // ถ้า isRunning เป็น true ให้เริ่มจับเวลา
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // เพิ่มเวลา 1 วินาที
      }, 1000); // ตั้งค่า Timer ให้ทำงานทุก ๆ 1 วินาที
    } else {
      // ถ้า isRunning เป็น false ให้หยุดจับเวลา
      clearInterval(timer); // ล้าง Timer
    }
    // Cleanup function สำหรับล้าง Timer เมื่อคอมโพเนนต์ถูกถอดออก หรือก่อนเริ่ม Timer ใหม่
    return () => clearInterval(timer);
  }, [isRunning]); // รัน useEffect เมื่อค่า isRunning เปลี่ยนแปลง

  // ฟังก์ชันรีเซ็ตเวลา
  const resetTimer = () => {
    setTime(0); // ตั้งค่าเวลาเป็น 0
    setIsRunning(false); // หยุดการจับเวลา
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>แอปพลิเคชัน: ตัวจับเวลา (Timer App)</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
      {/* แสดงเวลาในรูปแบบวินาที */}
      <Text style={styles.timer}>{time}s</Text>
      <View style={styles.buttonContainer}>
        {/* ปุ่มสำหรับเริ่มหรือหยุดจับเวลา */}
        <Button
          title={isRunning ? 'Pause' : 'Start'}
          onPress={() => setIsRunning(!isRunning)} // เปลี่ยนสถานะ isRunning
        />
        {/* ปุ่มสำหรับรีเซ็ตเวลา */}
        <Button title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

// การตั้งค่า Styles สำหรับ UI
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  timer: { fontSize: 48, marginBottom: 20 }, // ขนาดตัวอักษรของตัวจับเวลา
  buttonContainer: { flexDirection: 'row', gap: 10 }, // ปุ่มเรียงในแนวนอนพร้อมระยะห่าง
  title: { fontSize: 20, fontWeight: "bold", position: "absolute", top: 50, },
  subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});

export default TimerApp; // ส่งออกคอมโพเนนต์ TimerApp
