import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// คอมโพเนนต์ลูก รับค่า count ผ่าน Props
const CounterDisplay = ({ count }) => {
  return <Text style={styles.text}>Current Count: {count}</Text>;
};

// คอมโพเนนต์แม่
const StateToPropsParent = () => {
  const [count, setCount] = useState(0); // State ของคอมโพเนนต์แม่

  return (
    <View style={styles.container}>
      <Text style={styles.title}>การส่งค่า State ไปยังคอมโพเนนต์ลูกผ่าน Props</Text>
      <Text style={styles.subtitle}>Programmer Name: Satien Janpla</Text>
      {/* ส่ง State count ไปยัง CounterDisplay ผ่าน Props */}
      <CounterDisplay count={count} />
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", position: "absolute", top: 50, },
  subtitle: { fontSize: 16, position: "absolute", top: 80, color: "#555", },
});

export default StateToPropsParent;
