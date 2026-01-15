import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// คอมโพเนนต์ลูก รับฟังก์ชัน onIncrease และ onDecrease ผ่าน Props
const CounterControls = ({ onIncrease, onDecrease }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button title="Increase" onPress={onIncrease} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Decrease" onPress={onDecrease} color="red" />
      </View>
    </View>
  );
};

// คอมโพเนนต์แม่
const CallbackPropsParent = () => {
  const [count, setCount] = useState(0); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      <Text style={styles.title}>การส่ง Callback Function ผ่าน Props {"\n"} เพื่ออัปเดต State</Text>
      <Text style={styles.subtitle}>Programmer Name: Julalak Kinnara</Text>
      <Text style={styles.text}>Count: {count}</Text>
      {/* ส่งฟังก์ชัน setCount ผ่าน Props ไปยัง CounterControls */}
      <CounterControls
        onIncrease={() => setCount(count + 1)}
        onDecrease={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 50,
    textAlign: 'center',
    width: '100%',
  },
  subtitle: {
    fontSize: 16,
    position: "absolute",
    top: 130,
    color: "#555",
    textAlign: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  buttonWrapper: {
    width: 200,
    marginVertical: 5,
  }
});

export default CallbackPropsParent;
