<?php
session_start();
include '../db.php'; // เชื่อมต่อฐานข้อมูล

// ตรวจสอบการเข้าสู่ระบบ
if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'User') {
    header('Location: ../login.php');
    exit();
}

$order_id = $_GET['order_id'] ?? null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $transfer_amount = $_POST['transfer_amount'];
    $transfer_date = $_POST['transfer_date'];
    $transfer_time = $_POST['transfer_time'];
    $proof_image = $_FILES['proof_image']['name'];
    $target_dir = "../payment_slip/";
    $target_file = $target_dir . basename($proof_image);

    // ตรวจสอบและอัปโหลดไฟล์หลักฐานการโอน
    if (move_uploaded_file($_FILES['proof_image']['tmp_name'], $target_file)) {
        // บันทึกข้อมูลการชำระเงิน
        $stmt = $pdo->prepare("
            INSERT INTO payments (order_id, transfer_amount, transfer_date, transfer_time, proof_image, payment_status, created_at) 
            VALUES (?, ?, ?, ?, ?, 'Pending', NOW())
        ");
        $stmt->execute([$order_id, $transfer_amount, $transfer_date, $transfer_time, $proof_image]);

        // อัปเดตสถานะคำสั่งซื้อ
        $update_order = $pdo->prepare("UPDATE orders SET order_status = 'Confirmed' WHERE order_id = ?");
        $update_order->execute([$order_id]);

        $_SESSION['success_message'] = "บันทึกการชำระเงินเรียบร้อยแล้ว กรุณารอการตรวจสอบจากผู้ดูแลระบบ";
        header('Location: manage_payment.php');
        exit();
    } else {
        $_SESSION['error_message'] = "เกิดข้อผิดพลาดในการอัปโหลดหลักฐานการโอน กรุณาลองใหม่อีกครั้ง";
    }
}
?>

<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ชำระเงิน | e-Book Shop</title>
    <!-- Bootstrap 5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/styles.css?v=1" rel="stylesheet">
</head>

<body>
<div class="container mt-5">
    <h1 class="mb-4">ชำระเงินสำหรับคำสั่งซื้อหมายเลข #<?= htmlspecialchars($order_id) ?></h1>

    <!-- แสดงข้อความแจ้งเตือน -->
    <?php if (isset($_SESSION['success_message'])): ?>
        <div class="alert alert-success"><?= htmlspecialchars($_SESSION['success_message']) ?></div>
        <?php unset($_SESSION['success_message']); ?>
    <?php elseif (isset($_SESSION['error_message'])): ?>
        <div class="alert alert-danger"><?= htmlspecialchars($_SESSION['error_message']) ?></div>
        <?php unset($_SESSION['error_message']); ?>
    <?php endif; ?>

    <!-- ฟอร์มการชำระเงิน -->
    <form method="POST" enctype="multipart/form-data" class="shadow-sm p-4 bg-white rounded">
        <div class="mb-3">
            <label for="transfer_amount" class="form-label fw-bold">จำนวนเงินที่โอน (บาท)</label>
            <input type="number" step="0.01" class="form-control" id="transfer_amount" name="transfer_amount" required>
        </div>

        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="transfer_date" class="form-label fw-bold">วันที่โอน</label>
                <input type="date" class="form-control" id="transfer_date" name="transfer_date" required>
            </div>
            <div class="col-md-6 mb-3">
                <label for="transfer_time" class="form-label fw-bold">เวลาที่โอน</label>
                <input type="time" class="form-control" id="transfer_time" name="transfer_time" required>
            </div>
        </div>

        <div class="mb-3">
            <label for="proof_image" class="form-label fw-bold">อัปโหลดหลักฐานการโอน (รูปภาพ)</label>
            <input type="file" class="form-control" id="proof_image" name="proof_image" accept="image/*" required>
            <div class="form-text text-muted">รองรับไฟล์ .jpg, .jpeg, .png</div>
        </div>

        <div class="d-flex justify-content-between">
            <a href="orders.php" class="btn btn-secondary">กลับไปหน้าคำสั่งซื้อ</a>
            <button type="submit" class="btn btn-success">บันทึกการชำระเงิน</button>
        </div>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
