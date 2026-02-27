<?php
// db.php - การเชื่อมต่อฐานข้อมูลหลักของระบบ e-Book Shop

$host = 'localhost';        // ชื่อโฮสต์
$db   = 'ebookshop';        // ชื่อฐานข้อมูล
$user = 'ebookshop';        // ชื่อผู้ใช้ MySQL
$pass = 'password';         // รหัสผ่านของผู้ใช้
$charset = 'utf8mb4';       // การเข้ารหัสอักขระ

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,   // แสดงข้อผิดพลาดแบบ Exception
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,         // ดึงข้อมูลเป็นแบบ associative array
    PDO::ATTR_EMULATE_PREPARES   => false,                    // ใช้ prepared statements จริงของ MySQL
];

try {
    // ใช้ชื่อตัวแปร $pdo เพื่อให้สอดคล้องกับไฟล์อื่น ๆ
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    // แสดงข้อความ error ถ้าเชื่อมต่อไม่ได้
    echo "Database connection failed: " . htmlspecialchars($e->getMessage());
    exit;
}
?>
