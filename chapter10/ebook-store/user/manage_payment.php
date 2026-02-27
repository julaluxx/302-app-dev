<?php
session_start();
include 'user_header.php';
include '../db.php'; // เชื่อมต่อฐานข้อมูล

// ตรวจสอบการเข้าสู่ระบบ
if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'User') {
    header('Location: ../login.php');
    exit();
}

$user_id = $_SESSION['user_id'];

// ตรวจสอบค่าสถานะที่เลือก (ฝั่งผู้ใช้สนใจ Pending / Confirmed)
if (isset($_GET['status']) && in_array($_GET['status'], ['Pending', 'Confirmed'])) {
    $filter_status = $_GET['status'];
} else {
    $filter_status = 'Pending'; // ค่าเริ่มต้น
}

/**
 * ดึงรายการคำสั่งซื้อของผู้ใช้ ตาม order_status ที่เลือก
 * พร้อมดึง payment_status ล่าสุดของแต่ละ order (ถ้ามี)
 */
$sql = "
SELECT 
    o.order_id,
    o.total_price,
    o.order_status,
    o.created_at,
    oi.quantity,
    e.name,
    (
      SELECT p.payment_status
      FROM payments p
      WHERE p.order_id = o.order_id
      ORDER BY p.created_at DESC, p.payment_id DESC
      LIMIT 1
    ) AS payment_status
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN ebooks e ON oi.ebook_id = e.ebook_id
WHERE o.user_id = :uid
  AND o.order_status = :st
ORDER BY o.created_at DESC
";
$stmt = $pdo->prepare($sql);
$stmt->execute([':uid' => $user_id, ':st' => $filter_status]);
$orders = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>การชำระเงินของฉัน | e-Book Shop</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="../css/styles.css?v=1" rel="stylesheet"/>
</head>
<body>
<div class="container mt-5">
  <h1 class="mb-4">การชำระเงินของฉัน</h1>

  <!-- ปุ่มกรองสถานะ (ของคำสั่งซื้อ) -->
  <div class="mb-3 d-flex gap-2">
    <a href="manage_payment.php?status=Pending" class="btn btn-warning <?= $filter_status === 'Pending' ? 'active' : '' ?>">รอการชำระเงิน</a>
    <a href="manage_payment.php?status=Confirmed" class="btn btn-success <?= $filter_status === 'Confirmed' ? 'active' : '' ?>">ชำระเงินแล้ว (รอผู้ดูแล)</a>
  </div>

  <table class="table table-bordered table-hover align-middle">
    <thead class="table-light">
      <tr>
        <th>รหัสคำสั่งซื้อ</th>
        <th>ชื่อ eBook</th>
        <th>จำนวน</th>
        <th>ราคารวม (บาท)</th>
        <th>สถานะคำสั่งซื้อ</th>
        <th>สถานะการชำระเงิน (Admin)</th>
        <th>การดำเนินการ</th>
      </tr>
    </thead>
    <tbody>
    <?php if (!empty($orders)): ?>
      <?php foreach ($orders as $o): ?>
        <tr>
          <td>#<?= htmlspecialchars($o['order_id']) ?></td>
          <td><?= htmlspecialchars($o['name']) ?></td>
          <td><?= htmlspecialchars($o['quantity']) ?></td>
          <td><?= number_format((float)$o['total_price'], 2) ?></td>
          <td>
            <?php if ($o['order_status'] === 'Pending'): ?>
              <span class="badge bg-warning text-dark">รอการชำระเงิน</span>
            <?php elseif ($o['order_status'] === 'Confirmed'): ?>
              <span class="badge bg-info text-dark">ส่งหลักฐานแล้ว</span>
            <?php else: ?>
              <span class="badge bg-secondary"><?= htmlspecialchars($o['order_status']) ?></span>
            <?php endif; ?>
          </td>
          <td>
            <?php
              // payment_status ล่าสุด (อาจเป็น null ได้ถ้ายังไม่เคยอัปโหลด)
              $ps = $o['payment_status'] ?? null;
              if ($o['order_status'] === 'Pending') {
                  echo '<span class="text-muted">-</span>';
              } else {
                  if ($ps === 'Confirmed') {
                      echo '<span class="badge bg-success">Admin Confirmed</span>';
                  } elseif ($ps === 'Rejected') {
                      echo '<span class="badge bg-danger">ถูกปฏิเสธ</span>';
                  } elseif ($ps === 'Pending' || $ps === null) {
                      echo '<span class="badge bg-warning text-dark">รอตรวจสอบ</span>';
                  } else {
                      echo '<span class="badge bg-secondary">'.htmlspecialchars($ps).'</span>';
                  }
              }
            ?>
          </td>
          <td>
            <?php if ($o['order_status'] === 'Pending'): ?>
              <!-- ยังไม่ชำระเงิน -->
              <a href="payment.php?order_id=<?= (int)$o['order_id'] ?>" class="btn btn-primary btn-sm">ชำระเงิน</a>

            <?php elseif ($o['order_status'] === 'Confirmed'): ?>
              <?php if (($o['payment_status'] ?? null) === 'Pending' || ($o['payment_status'] ?? null) === null): ?>
                <!-- ส่งหลักฐานแล้ว และรอแอดมิน -->
                <span class="text-warning fw-bold">รอผู้ดูแลยืนยัน</span>
              <?php elseif (($o['payment_status'] ?? null) === 'Confirmed'): ?>
                <!-- แอดมินยืนยันแล้ว -->
                <span class="text-success fw-bold me-2">Admin Confirmed</span>
                <a href="view_ebook.php" class="btn btn-outline-success btn-sm">ไปดาวน์โหลด eBook</a>
              <?php elseif (($o['payment_status'] ?? null) === 'Rejected'): ?>
                <!-- ถูกปฏิเสธ -->
                <span class="text-danger fw-bold me-2">การชำระเงินถูกปฏิเสธ</span>
                <a href="payment.php?order_id=<?= (int)$o['order_id'] ?>" class="btn btn-outline-primary btn-sm">อัปโหลดใหม่</a>
              <?php endif; ?>

            <?php else: ?>
              <span class="text-muted">-</span>
            <?php endif; ?>
          </td>
        </tr>
      <?php endforeach; ?>
    <?php else: ?>
      <tr>
        <td colspan="7" class="text-center text-muted py-4">ไม่พบคำสั่งซื้อในสถานะนี้</td>
      </tr>
    <?php endif; ?>
    </tbody>
  </table>
</div>

<?php include '../partials/footer.php'; ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
