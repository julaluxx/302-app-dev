import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const AddTaskScreen = () => {
  // เก็บค่า input จากผู้ใช้
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending"); // ค่าเริ่มต้น

  // ฟังก์ชันสำหรับเพิ่มงาน
  const addTask = async () => {
    if (!taskName || !description || !dueDate) {
      Alert.alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    try {
      const response = await axios.post("http://10.71.7.12:8081/049/getTask.php", {
        task_name: taskName,
        description: description,
        due_date: dueDate,
        status: status,
      });

      Alert.alert(response.data.message);
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>เพิ่มงานใหม่</Text>
      
      <TextInput
        style={styles.input}
        placeholder="ชื่อของงาน"
        value={taskName}
        onChangeText={setTaskName}
      />

      <TextInput
        style={styles.input}
        placeholder="รายละเอียดงาน"
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="วันกำหนดส่ง (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <Button title="เพิ่มงาน" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});

export default AddTaskScreen;
