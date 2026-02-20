import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/AxiosGetExample/getTask.php")
      .then(response => setTasks(response.data.tasks))
      .catch(error => console.error("เกิดข้อผิดพลาด:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>รายการงาน</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.task_name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.due_date}</Text>
            <Text>สถานะ: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { padding: 15, backgroundColor: "#ffffff", marginVertical: 5, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: "bold" }
});

export default TaskList;
