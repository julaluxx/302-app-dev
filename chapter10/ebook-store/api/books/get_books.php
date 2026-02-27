<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include '../database/db.php'; // เชื่อมต่อฐานข้อมูล

try {
    // คำสั่ง SQL ดึงข้อมูลทั้งหมดจากตาราง ebooks
    $sql = "SELECT ebook_id, name, description, image, pdf_file, price, created_at FROM ebooks ORDER BY created_at DESC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    
    // ดึงข้อมูลทั้งหมดในรูปแบบ associative array
    $ebooks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if ($ebooks) {
        echo json_encode(["status" => "success", "ebooks" => $ebooks]);
    } else {
        echo json_encode(["status" => "error", "message" => "No books found"]);
    }
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
