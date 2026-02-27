<?php
// api/ebooks.php
// CORS headers สำหรับการเชื่อมต่อจาก React
header("Access-Control-Allow-Origin: http://localhost:3000"); // ระบุที่มาของ React app
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');
include_once('db.php');

try {
    $stmt = $pdo->query("SELECT * FROM ebooks");
    $ebooks = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'data' => $ebooks]);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'เกิดข้อผิดพลาด: ' . $e->getMessage()]);
}
?>
