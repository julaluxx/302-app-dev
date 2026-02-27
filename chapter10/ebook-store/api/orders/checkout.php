<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// เชื่อมต่อฐานข้อมูล
require_once '../database/db.php';

// รับข้อมูล JSON จาก React Native
$data = json_decode(file_get_contents("php://input"));

if (!isset($data->user_id) || !isset($data->total_price) || !isset($data->cart_items)) {
    echo json_encode(["status" => "error", "message" => "ข้อมูลไม่ครบถ้วน"]);
    exit;
}

$user_id = $data->user_id;
$total_price = $data->total_price;
$cart_items = $data->cart_items;

try {
    // เริ่ม Transaction
    $conn->beginTransaction();

    // 1️⃣ บันทึกข้อมูลคำสั่งซื้อในตาราง `orders`
    $stmt = $conn->prepare("INSERT INTO orders (user_id, total_price, order_status) VALUES (?, ?, 'Pending')");
    $stmt->execute([$user_id, $total_price]);

    // ดึง `order_id` ที่เพิ่งสร้าง
    $order_id = $conn->lastInsertId();

    // 2️⃣ บันทึกสินค้าทั้งหมดลง `order_items`
    $stmt = $conn->prepare("INSERT INTO order_items (order_id, ebook_id, quantity, price) VALUES (?, ?, ?, ?)");

    foreach ($cart_items as $item) {
        $stmt->execute([$order_id, $item->ebook_id, 1, $item->price]); // quantity เป็น 1 เสมอในระบบนี้
    }

    // ✅ ยืนยัน Transaction
    $conn->commit();

    // ✅ ส่ง Response กลับไปยังแอป
    echo json_encode(["status" => "success", "message" => "สั่งซื้อสำเร็จ", "order_id" => $order_id]);

} catch (Exception $e) {
    // ❌ หากเกิดข้อผิดพลาด Rollback Transaction
    $conn->rollBack();
    echo json_encode(["status" => "error", "message" => "ไม่สามารถสั่งซื้อได้", "error" => $e->getMessage()]);
}
?>
