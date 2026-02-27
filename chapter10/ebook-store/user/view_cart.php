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

// ดึงข้อมูล eBook ที่อยู่ในตะกร้าของผู้ใช้
$stmt = $pdo->prepare("
    SELECT c.id AS cart_id, e.name, e.price, e.ebook_id, c.quantity
    FROM cart c
    JOIN ebooks e ON c.ebook_id = e.ebook_id
    WHERE c.user_id = ?
");
$stmt->execute([$user_id]);
$cart_items = $stmt->fetchAll();

// อัปเดตจำนวนสินค้าในตะกร้า
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_quantity'])) {
    $cart_id = (int)$_POST['cart_id'];
    $quantity = max(1, (int)$_POST['quantity']);

    $stmt = $pdo->prepare("UPDATE cart SET quantity = ? WHERE id = ? AND user_id = ?");
    $stmt->execute([$quantity, $cart_id, $user_id]);

    $_SESSION['success_message'] = "อัปเดตจำนวนสินค้าเรียบร้อยแล้ว";
    header("Location: view_cart.php");
    exit();
}

// ลบรายการออกจากตะกร้า
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['remove_item'])) {
    $cart_id = (int)$_POST['cart_id'];

    $stmt = $pdo->prepare("DELETE FROM cart WHERE id = ? AND user_id = ?");
    $stmt->execute([$cart_id, $user_id]);

    $_SESSION['success_message'] = "ลบสินค้าออกจากตะกร้าเรียบร้อยแล้ว";
    header("Location: view_cart.php");
    exit();
}

// ยืนยันการสั่งซื้อ
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['confirm_order'])) {
    // ป้องกันกรณีตะกร้าว่าง
    if (empty($cart_items)) {
        $_SESSION['success_message'] = "ตะกร้าของคุณว่าง ไม่สามารถยืนยันคำสั่งซื้อได้";
        header("Location: view_cart.php");
        exit();
    }

    // คำนวณราคารวมจากตะกร้า
    $total_price = 0;
    foreach ($cart_items as $item) {
        $total_price += (float)$item['price'] * (int)$item['quantity'];
    }

    try {
        // ใช้ธุรกรรมเพื่อความถูกต้องของข้อมูล
        $pdo->beginTransaction();

        // เพิ่มคำสั่งซื้อ พร้อมบันทึก total_price
        $order_stmt = $pdo->prepare("
            INSERT INTO orders (user_id, total_price, order_status, created_at)
            VALUES (?, ?, 'Pending', NOW())
        ");
        $order_stmt->execute([$user_id, $total_price]);
        $order_id = $pdo->lastInsertId();

        // เพิ่มรายการสินค้าในคำสั่งซื้อ
        $order_item_stmt = $pdo->prepare("
            INSERT INTO order_items (order_id, ebook_id, quantity, price)
            VALUES (?, ?, ?, ?)
        ");
        foreach ($cart_items as $item) {
            $order_item_stmt->execute([
                $order_id,
                (int)$item['ebook_id'],
                (int)$item['quantity'],
                (float)$item['price']
            ]);
        }

        // ลบตะกร้าของผู้ใช้
        $clear_stmt = $pdo->prepare("DELETE FROM cart WHERE user_id = ?");
        $clear_stmt->execute([$user_id]);

        $pdo->commit();

        $_SESSION['success_message'] = "ยืนยันคำสั่งซื้อเรียบร้อยแล้ว กรุณาดำเนินการชำระเงิน";
        header("Location: manage_payment.php?status=Pending");
        exit();
    } catch (Exception $e) {
        // ยกเลิกธุรกรรมเมื่อเกิดปัญหา
        if ($pdo->inTransaction()) {
            $pdo->rollBack();
        }
        $_SESSION['success_message'] = "เกิดข้อผิดพลาดในการยืนยันคำสั่งซื้อ กรุณาลองใหม่อีกครั้ง";
        header("Location: view_cart.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ตะกร้าสินค้า | e-Book Shop</title>
    <!-- Bootstrap 5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/styles.css?v=1" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h1 class="mb-4">ตะกร้าสินค้า</h1>

    <!-- แสดงข้อความสำเร็จ -->
    <?php if (isset($_SESSION['success_message'])): ?>
        <div class="alert alert-success">
            <?= htmlspecialchars($_SESSION['success_message']) ?>
        </div>
        <?php unset($_SESSION['success_message']); ?>
    <?php endif; ?>

    <?php if (!empty($cart_items)): ?>
        <table class="table table-bordered align-middle">
            <thead class="table-light">
                <tr>
                    <th>ชื่อหนังสือ eBook</th>
                    <th>ราคา (บาท)</th>
                    <th>จำนวน</th>
                    <th>ราคารวม (บาท)</th>
                    <th>การดำเนินการ</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                $total_price_display = 0;
                foreach ($cart_items as $item):
                    $item_total = (float)$item['price'] * (int)$item['quantity'];
                    $total_price_display += $item_total;
                ?>
                <tr>
                    <td><?= htmlspecialchars($item['name']) ?></td>
                    <td><?= number_format((float)$item['price'], 2) ?></td>
                    <td>
                        <form method="POST" action="" class="d-flex align-items-center gap-2">
                            <input type="hidden" name="cart_id" value="<?= (int)$item['cart_id'] ?>">
                            <input type="number" name="quantity" value="<?= (int)$item['quantity'] ?>" min="1" class="form-control" style="width: 80px;">
                            <button type="submit" name="update_quantity" class="btn btn-sm btn-primary">อัปเดต</button>
                        </form>
                    </td>
                    <td><?= number_format($item_total, 2) ?></td>
                    <td>
                        <form method="POST" action="">
                            <input type="hidden" name="cart_id" value="<?= (int)$item['cart_id'] ?>">
                            <button type="submit" name="remove_item" class="btn btn-sm btn-danger"
                                    onclick="return confirm('คุณต้องการลบสินค้านี้ออกจากตะกร้าหรือไม่?')">ลบ</button>
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

        <!-- แสดงราคารวมทั้งหมด -->
        <div class="text-end mb-4">
            <h4>ราคารวมทั้งหมด: <span class="text-primary"><?= number_format($total_price_display, 2) ?> บาท</span></h4>
        </div>

        <!-- ปุ่มยืนยันการสั่งซื้อ -->
        <form method="POST" action="">
            <button type="submit" name="confirm_order" class="btn btn-success btn-lg">ยืนยันคำสั่งซื้อ</button>
        </form>
    <?php else: ?>
        <div class="alert alert-info text-center mt-4">
            ไม่มีสินค้าในตะกร้าของคุณ
        </div>
    <?php endif; ?>
</div>

<?php include '../partials/footer.php'; ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
