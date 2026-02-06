import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ข้อความทั่วไป
  textRegular: {
    fontSize: 16,
    color: "#333333",
  },

  // ข้อความหัวข้อ
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },

  // ข้อความหัวข้อย่อย
  textSubtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fdfdfd",
  },

  // ข้อความอธิบาย
  textDescription: {
    fontSize: 14,
    color: "#d4d4d4",
    lineHeight: 22,
  },

  // ข้อความบนปุ่ม
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  // ข้อความสำหรับฟอร์ม
  textLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },

  textInput: {
    fontSize: 16,
    color: "#000000",
  },

  // การจัดตำแหน่งข้อความ
  textCenter: {
    textAlign: "center",
  },

  textRight: {
    textAlign: "right",
  },

  // การตกแต่งข้อความ
  textUnderline: {
    textDecorationLine: "underline",
  },

  textUppercase: {
    textTransform: "uppercase",
  },
  // sharedStyles/TypographyStyles.js (เพิ่มเติม)
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F9A825", // สีเหลืองเข้ม
  },
});

export default styles;
