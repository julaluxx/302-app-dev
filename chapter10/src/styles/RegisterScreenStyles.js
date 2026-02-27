import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // คอนเทนเนอร์หลักของหน้าจอ
    container: {
        flex: 1, // ขยายเต็มพื้นที่หน้าจอ
        justifyContent: 'center', // จัดให้อยู่กึ่งกลางแนวตั้ง
        alignItems: 'center', // จัดให้อยู่กึ่งกลางแนวนอน
        padding: 20, // ระยะห่างขอบด้านใน
        backgroundColor: '#f5f5f5', // สีพื้นหลังเทาอ่อน
    },

    // สไตล์ของข้อความหัวข้อ
    title: {
        fontSize: 24, // ขนาดตัวอักษรใหญ่
        fontWeight: 'bold', // ตัวหนา
        marginBottom: 20, // ระยะห่างจากส่วนด้านล่าง
    },

    // สไตล์ของช่องป้อนข้อมูล (TextInput)
    input: {
        width: '100%', // ความกว้างเต็มพื้นที่
        padding: 10, // ระยะห่างภายใน
        marginBottom: 10, // ระยะห่างระหว่างช่องป้อนข้อมูลแต่ละช่อง
        borderWidth: 1, // เส้นขอบหนา 1px
        borderColor: '#ccc', // สีขอบเป็นสีเทาอ่อน
        borderRadius: 5, // มุมโค้งมน
        backgroundColor: 'white', // สีพื้นหลังของช่องป้อนข้อมูลเป็นสีขาว
    },

    // สไตล์ของข้อความลิงก์ไปยังหน้า Login
    linkText: {
        marginTop: 15, // ระยะห่างจากปุ่มลงทะเบียน
        color: '#007bff', // สีน้ำเงิน (เหมือนลิงก์)
        fontSize: 16, // ขนาดตัวอักษร
    },
});

export default styles;
