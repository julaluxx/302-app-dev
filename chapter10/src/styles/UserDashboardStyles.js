import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // ✅ คอนเทนเนอร์หลักของหน้า UserDashboardScreen
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5', // พื้นหลังสีเทาอ่อน
    },

    // ✅ กล่องแสดงข้อมูลผู้ใช้และปุ่ม Logout
    userInfoContainer: {
        flexDirection: "row", // จัดวางแนวนอน
        justifyContent: "space-between", // จัดให้ปุ่ม Logout อยู่ขวาสุด
        alignItems: "center",
        backgroundColor: "#007bff", // พื้นหลังสีน้ำเงิน
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },

    // ✅ ข้อความต้อนรับผู้ใช้ (ชื่อ Username)
    welcomeText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white", // ข้อความสีขาว
    },

    // ✅ ปุ่ม Logout
    logoutButton: {
        backgroundColor: "red", // ปุ่มสีแดง
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },

    // ✅ ข้อความภายในปุ่ม Logout
    logoutButtonText: {
        color: "white", // ข้อความสีขาว
        fontSize: 16,
        fontWeight: "bold",
    },

    // ✅ กล่องสำหรับช่องค้นหาหนังสือ
    searchContainer: {
        flexDirection: 'row', // จัดวางแนวนอน
        marginVertical: 10,
        alignItems: 'center',
    },

    // ✅ ช่องกรอกข้อความสำหรับค้นหาหนังสือ
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10, // เพิ่มระยะห่างระหว่างช่องค้นหากับปุ่ม
    },

    // ✅ กล่องแสดงข้อมูลหนังสือแต่ละรายการ
    bookCard: {
        flexDirection: 'row', // จัดวางแนวนอน
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // เพิ่มเงาให้ Card
    },

    // ✅ รูปภาพของหนังสือ
    bookImage: {
        width: 80,
        height: 120,
        borderRadius: 5,
    },

    // ✅ กล่องข้อมูลหนังสือ (ชื่อ, คำอธิบาย, ราคา)
    bookDetails: {
        flex: 1,
        marginLeft: 10,
    },

    // ✅ ชื่อหนังสือ
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    // ✅ คำอธิบายหนังสือ
    bookDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5, // เพิ่มช่องว่างระหว่างข้อความ
    },

    // ✅ ราคาของหนังสือ
    bookPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff', // ใช้สีน้ำเงินเหมือน Header
    },

    // ✅ ปุ่มเพิ่มหนังสือลงตะกร้า
    addToCartButton: {
        backgroundColor: '#28a745', // ปุ่มสีเขียว
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
