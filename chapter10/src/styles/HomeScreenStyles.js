import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // สไตล์พื้นฐานของคอมโพแนนต์ทั้งหมด
    container: {
        flex: 1, // ขยายเต็มหน้าจอ
        padding: 10, // กำหนดระยะห่างขอบ
        backgroundColor: '#f5f5f5', // สีพื้นหลังเทาอ่อน
    },

    // สไตล์ส่วนหัวของแอป (Header)
    header: {
        flexDirection: 'row', // เรียงแนวนอน
        justifyContent: 'space-between', // แยกซ้าย-ขวา
        alignItems: 'center', // จัดให้อยู่กึ่งกลางแนวตั้ง
        backgroundColor: '#007bff', // สีพื้นหลังน้ำเงิน
        padding: 15, // กำหนดระยะห่างขอบ
        borderRadius: 5, // มุมโค้งมน
    },
    headerText: {
        fontSize: 20, // ขนาดตัวอักษรใหญ่
        fontWeight: 'bold', // ตัวหนา
        color: 'white', // สีตัวอักษรขาว
    },

    // เมนู Register / Login / Logout
    menu: {
        flexDirection: 'row', // เรียงปุ่มแนวนอน
    },
    menuText: {
        fontSize: 16, // ขนาดตัวอักษร
        color: 'white', // สีตัวอักษรขาว
        marginLeft: 15, // ระยะห่างจากปุ่มข้างๆ
    },

    // กล่องค้นหาหนังสือ
    searchContainer: {
        flexDirection: 'row', // เรียงแนวนอน
        marginVertical: 10, // ระยะห่างบน-ล่าง
        alignItems: 'center', // จัดให้อยู่กึ่งกลางแนวตั้ง
    },
    searchInput: {
        flex: 1, // ขยายเต็มพื้นที่
        borderWidth: 1, // กำหนดขอบ
        borderColor: '#ccc', // สีขอบเทา
        borderRadius: 5, // มุมโค้งมน
        padding: 10, // ระยะห่างขอบด้านใน
        marginRight: 10, // ระยะห่างจากปุ่มค้นหา
    },

    // สไตล์ของรายการหนังสือแต่ละเล่ม (Book Card)
    bookCard: {
        flexDirection: 'row', // เรียงข้อมูลแนวนอน
        backgroundColor: 'white', // สีพื้นหลังขาว
        padding: 10, // ระยะห่างขอบด้านใน
        borderRadius: 5, // มุมโค้งมน
        marginBottom: 10, // ระยะห่างแต่ละการ์ด
        shadowColor: '#000', // เงาสีดำ
        shadowOpacity: 0.1, // ความเข้มของเงา
        shadowRadius: 5, // ขนาดเงา
        elevation: 3, // ยกการ์ดขึ้นเล็กน้อย (Android)
    },

    // สไตล์รูปภาพปกหนังสือ
    bookImage: {
        width: 80, // ความกว้าง 80px
        height: 120, // ความสูง 120px
        borderRadius: 5, // มุมโค้งมน
    },

    // กล่องรายละเอียดของหนังสือ
    bookDetails: {
        flex: 1, // ขยายเต็มพื้นที่ที่เหลือ
        marginLeft: 10, // ระยะห่างจากรูปภาพ
    },

    // ชื่อหนังสือ
    bookTitle: {
        fontSize: 18, // ขนาดตัวอักษรใหญ่
        fontWeight: 'bold', // ตัวหนา
    },

    // คำอธิบายหนังสือ
    bookDescription: {
        fontSize: 14, // ขนาดตัวอักษรปกติ
        color: '#666', // สีเทาอ่อน
        marginVertical: 5, // ระยะห่างบน-ล่าง
    },

    // ราคาของหนังสือ
    bookPrice: {
        fontSize: 16, // ขนาดตัวอักษรใหญ่
        fontWeight: 'bold', // ตัวหนา
        color: '#007bff', // สีฟ้า
    },
});

export default styles;
