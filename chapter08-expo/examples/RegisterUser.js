import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";

import {
  bgStyles,
  typoStyles,
  spaceStyles,
  layoutStyles,
  borderStyles,
} from "../sharedStyles";

export default function RegisterUser() {
  // 1) State สำหรับเก็บข้อมูลฟอร์ม
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 2) ฟังก์ชันตรวจสอบข้อมูลเบื้องต้น
  const validateForm = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบถ้วน");
      return false;
    }

    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("แจ้งเตือน", "รูปแบบอีเมลไม่ถูกต้อง");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("แจ้งเตือน", "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
      return false;
    }

    return true;
  };

  // 3) เมื่อกดปุ่มสมัครสมาชิก
  const handleRegister = () => {
    if (!validateForm()) return;

    Alert.alert("สมัครสมาชิกสำเร็จ", `ชื่อ: ${fullName}\nอีเมล: ${email}`);

    // เคลียร์ค่าเพื่อพร้อมรับข้อมูลใหม่
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <ScrollView
      contentContainerStyle={[bgStyles.screenBackground, spaceStyles.paddingM]}
    >
      {/* หัวข้อหน้า */}
      <Text style={[typoStyles.textTitle, spaceStyles.marginBottomM]}>
        Register User
      </Text>

      {/* Full Name */}
      <Text style={[typoStyles.textLabel, spaceStyles.marginBottomS]}>
        Full Name
      </Text>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
        style={[
          typoStyles.textInput,
          bgStyles.cardBackground,
          borderStyles.borderThin,
          borderStyles.roundedS,
          spaceStyles.paddingS,
          spaceStyles.marginBottomM,
        ]}
      />

      {/* Email */}
      <Text style={[typoStyles.textLabel, spaceStyles.marginBottomS]}>
        Email
      </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={[
          typoStyles.textInput,
          bgStyles.cardBackground,
          borderStyles.borderThin,
          borderStyles.roundedS,
          spaceStyles.paddingS,
          spaceStyles.marginBottomM,
        ]}
      />

      {/* Password */}
      <Text style={[typoStyles.textLabel, spaceStyles.marginBottomS]}>
        Password
      </Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
        style={[
          typoStyles.textInput,
          bgStyles.cardBackground,
          borderStyles.borderThin,
          borderStyles.roundedS,
          spaceStyles.paddingS,
          spaceStyles.marginBottomM,
        ]}
      />

      {/* Confirm Password */}
      <Text style={[typoStyles.textLabel, spaceStyles.marginBottomS]}>
        Confirm Password
      </Text>
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm password"
        secureTextEntry
        style={[
          typoStyles.textInput,
          bgStyles.cardBackground,
          borderStyles.borderThin,
          borderStyles.roundedS,
          spaceStyles.paddingS,
          spaceStyles.marginBottomM,
        ]}
      />

      {/* ปุ่มสมัครสมาชิก */}
      <Pressable
        onPress={handleRegister}
        style={[
          bgStyles.primaryBackground,
          borderStyles.roundedM,
          borderStyles.shadowS,
          spaceStyles.paddingM,
        ]}
      >
        <Text style={[typoStyles.textButton]}>Create Account</Text>
      </Pressable>
    </ScrollView>
  );
}
