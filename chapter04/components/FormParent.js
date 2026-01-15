import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// คอมโพเนนต์ลูกสำหรับฟอร์ม
const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(''); // State ภายในฟอร์ม

  return (
    <View>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your name"
      />
      {/* เรียกฟังก์ชัน onSubmit เมื่อกดปุ่ม */}
      <Button title="Submit" onPress={() => onSubmit(inputValue)} />
    </View>
  );
};

// คอมโพเนนต์แม่
const FormParent = () => {
  const [submittedValue, setSubmittedValue] = useState(''); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      <Text style={styles.title}>การสร้างฟอร์มที่ส่งข้อมูลกลับไปยังคอมโพเนนต์แม่</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
      <Text style={styles.text}>Submitted Value: {submittedValue}</Text>
      {/* ส่งฟังก์ชัน setSubmittedValue ไปยัง InputForm */}
      <InputForm onSubmit={(value) => setSubmittedValue(value)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%',
    marginBottom: 10, borderRadius: 5,
  },
  title: { fontSize: 16, fontWeight: "bold", position: "absolute", top: 50, },
  subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});

export default FormParent;
