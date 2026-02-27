<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../database/db.php';

// ✅ รับ JSON และแปลงเป็น Object
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->user_id)) {
    echo json_encode(["status" => "error", "message" => "ไม่มีข้อมูล user_id"]);
    exit;
}

$user_id = $data->user_id;

try {
    // ✅ ดึงคำสั่งซื้อทั้งหมดของผู้ใช้
    $stmt = $conn->prepare("SELECT order_id, total_price, order_status, created_at FROM orders WHERE user_id = ? ORDER BY created_at DESC");
    $stmt->execute([$user_id]);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "orders" => $orders]);

} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "ไม่สามารถดึงคำสั่งซื้อได้", "error" => $e->getMessage()]);
}
?>
