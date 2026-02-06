import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // พื้นหลังหลักของหน้าจอ
  screenBackground: {
    backgroundColor: "#f0f0f0",
  },

  // พื้นหลังของ Card หรือกล่องข้อมูล
  cardBackground: {
    backgroundColor: "#ffffff",
  },

  // สีพื้นหลังหลักของแอปพลิเคชัน
  primaryBackground: {
    backgroundColor: "#3498db",
  },

  // สีพื้นหลังรอง
  secondaryBackground: {
    backgroundColor: "#e67e22",
  },

  // พื้นหลังแบบโปร่งใส
  transparentBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  // พื้นหลังเน้นความสำคัญ
  highlightBackground: {
    backgroundColor: "#f1c40f",
  },
  // sharedStyles/BackgroundColorsStyles.js (เพิ่มเติม)
  cardBackgroundLight: {
    backgroundColor: "#3a3a3a", // สีเหลืองอ่อน
  },
});

export default styles;
