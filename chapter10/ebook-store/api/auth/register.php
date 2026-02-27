<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// เชื่อมต่อฐานข้อมูล
include '../database/db.php';

// รับข้อมูลจาก React Native
$data = json_decode(file_get_contents("php://input"));

if (!empty($data->username) && !empty($data->email) && !empty($data->password)) {
    $username = htmlspecialchars(strip_tags($data->username));
    $email = htmlspecialchars(strip_tags($data->email));
    $password = password_hash($data->password, PASSWORD_BCRYPT); // เข้ารหัสรหัสผ่าน

    // ตรวจสอบว่ามี username หรือ email ซ้ำหรือไม่
    $check_sql = "SELECT * FROM users WHERE username = ? OR email = ?";
    $check_stmt = $pdo->prepare($check_sql);
    $check_stmt->execute([$username, $email]);

    if ($check_stmt->rowCount() > 0) {
        echo json_encode(["status" => "error", "message" => "Username หรือ Email ถูกใช้ไปแล้ว"]);
        exit;
    }

    // เพิ่มข้อมูลลงฐานข้อมูล
    $sql = "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, 'User')";
    $stmt = $pdo->prepare($sql);
    
    if ($stmt->execute([$username, $email, $password])) {
        echo json_encode(["status" => "success", "message" => "ลงทะเบียนสำเร็จ"]);
    } else {
        echo json_encode(["status" => "error", "message" => "เกิดข้อผิดพลาด"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "กรุณากรอกข้อมูลให้ครบถ้วน"]);
}
?>
