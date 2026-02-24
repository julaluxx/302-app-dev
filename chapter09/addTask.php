<?php
// นำเข้าไฟล์เชื่อมต่อฐานข้อมูล
require 'db.php';

// ตั้งค่า Header ให้เป็น JSON
header("Content-Type: application/json; charset=UTF-8");

// ตรวจสอบว่ามีการส่งข้อมูลแบบ POST หรือไม่
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // รับข้อมูล JSON ที่ส่งมาจาก React Native
    $data = json_decode(file_get_contents("php://input"), true);

    // ตรวจสอบว่าข้อมูลที่จำเป็นครบหรือไม่
    if (!empty($data["task_name"]) && !empty($data["description"]) && !empty($data["due_date"]) && !empty($data["status"])) {
        try {
            // คำสั่ง SQL สำหรับเพิ่มข้อมูลลงในฐานข้อมูล
            $sql = "INSERT INTO tasks (task_name, description, due_date, status) VALUES (:task_name, :description, :due_date, :status)";
            $stmt = $pdo->prepare($sql);
            
            // ผูกค่าพารามิเตอร์
            $stmt->bindParam(":task_name", $data["task_name"]);
            $stmt->bindParam(":description", $data["description"]);
            $stmt->bindParam(":due_date", $data["due_date"]);
            $stmt->bindParam(":status", $data["status"]);

            // ทำการ execute คำสั่ง SQL
            if ($stmt->execute()) {
                echo json_encode([
                    "status" => "success",
                    "message" => "เพิ่มงานสำเร็จ"
                ], JSON_UNESCAPED_UNICODE);
            } else {
                echo json_encode([
                    "status" => "error",
                    "message" => "ไม่สามารถเพิ่มงานได้"
                ], JSON_UNESCAPED_UNICODE);
            }
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => "เกิดข้อผิดพลาด: " . $e->getMessage()
            ], JSON_UNESCAPED_UNICODE);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "กรุณากรอกข้อมูลให้ครบถ้วน"
        ], JSON_UNESCAPED_UNICODE);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "ไม่รองรับ HTTP Method นี้"
    ], JSON_UNESCAPED_UNICODE);
}

// ปิดการเชื่อมต่อฐานข้อมูล
$pdo = null;
?>
