import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

const ToDoList = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#c09de0ff"
        barStyle="dark-content"
      />

      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.title}>จดบันทึก</Text>
            <Text style={styles.emptyText}>ยังไม่มีงานที่ต้องทำ...</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    color: "#333",
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});

export default ToDoList;