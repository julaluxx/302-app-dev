<?php
// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
$host = "localhost";  // ชื่อโฮสต์ของ MySQL
$dbname = "task_manager"; // ชื่อฐานข้อมูล
$username = "root";  // ชื่อผู้ใช้ของ MySQL
$password = "";  // รหัสผ่าน (เว้นว่างสำหรับ XAMPP)

try {
    // สร้างการเชื่อมต่อด้วย PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

    // ตั้งค่า PDO ให้แสดงข้อผิดพลาดหากเกิดปัญหา
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // เชื่อมต่อสำเร็จ
    //echo " เชื่อมต่อฐานข้อมูลสำเร็จ";  // ใช้ทดสอบการเชื่อมต่อ (สามารถปิดทิ้ง)
} catch (PDOException $e) {
    //  แสดงข้อผิดพลาดหากเชื่อมต่อไม่สำเร็จ
    die(" การเชื่อมต่อฐานข้อมูลล้มเหลว: " . $e->getMessage());
}

//  ปิดการเชื่อมต่อเมื่อไม่ใช้งาน (กรณีที่ใช้แบบแยกไฟล์)
?>
