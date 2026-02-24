<?php
header("Access-Control-Allow-Origin: *");

// นำเข้าไฟล์เชื่อมต่อฐานข้อมูล
require 'db.php';

// ตั้งค่า Header ให้เป็น JSON
header("Content-Type: application/json; charset=UTF-8");

try {
    //คำสั่ง SQL สำหรับดึงข้อมูลจากตาราง tasks
    $sql = "SELECT * FROM tasks";
    $stmt = $pdo->query($sql);
    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //ส่งข้อมูลออกเป็น JSON
    echo json_encode([
        "status" => "success",
        "message" => "ดึงข้อมูลสำเร็จ",
        "tasks" => $tasks
    ], JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    //ส่งข้อความข้อผิดพลาดออกไป
    echo json_encode([
        "status" => "error",
        "message" => "เกิดข้อผิดพลาด: " . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}

//ปิดการเชื่อมต่อฐานข้อมูล
$pdo = null;
?>
