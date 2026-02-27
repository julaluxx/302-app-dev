<?php
session_start();
include 'user_header.php';
include '../db.php'; // เชื่อมต่อฐานข้อมูล

// ตรวจสอบว่าผู้ใช้เข้าสู่ระบบแล้วและเป็น User
if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'User') {
    header('Location: ../login.php');
    exit();
}

$user_id = $_SESSION['user_id'];

// ดึงข้อมูล eBooks ที่มีสถานะการชำระเงินเป็น Confirmed
$stmt = $pdo->prepare("
    SELECT ebooks.*, payments.payment_status 
    FROM ebooks 
    JOIN order_items ON ebooks.ebook_id = order_items.ebook_id
    JOIN orders ON order_items.order_id = orders.order_id
    JOIN payments ON orders.order_id = payments.order_id
    WHERE orders.user_id = ? AND payments.payment_status = 'Confirmed'
");
$stmt->execute([$user_id]);
$ebooks = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>e-Books ของฉัน | e-Book Shop</title>

    <!-- Bootstrap 5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- เรียกใช้ไฟล์ CSS หลัก -->
    <link href="../css/styles.css?v=1" rel="stylesheet">
</head>

<body>
    <div class="container mt-5">
        <h1 class="mb-4">หนังสือ eBook ที่คุณสามารถดาวน์โหลดได้</h1>

        <!-- ตรวจสอบว่ามี eBooks หรือไม่ -->
        <?php if (count($ebooks) > 0): ?>
            <div class="row">
                <?php foreach ($ebooks as $ebook): ?>
                    <?php
                        // fallback ถ้าไม่มีภาพ
                        $img = !empty($ebook['image']) ? htmlspecialchars($ebook['image']) : 'placeholder.png';
                    ?>
                    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div class="card h-100 shadow-sm">
                            <!-- รูปภาพ eBook -->
                            <div class="book-cover-box">
                                <img src="../images/<?= $img ?>" alt="<?= htmlspecialchars($ebook['name']) ?>" class="book-cover">
                            </div>

                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title"><?= htmlspecialchars($ebook['name']) ?></h5>
                                <p class="card-text flex-grow-1">
                                    <?= htmlspecialchars(mb_strimwidth($ebook['description'] ?? '', 0, 100, '...')) ?>
                                </p>
                                <p class="fw-bold text-primary mb-2">
                                    <?= number_format((float)$ebook['price'], 2) ?> บาท
                                </p>

                                <!-- ลิงก์ดาวน์โหลด PDF -->
                                <?php if (!empty($ebook['pdf_file'])): ?>
                                    <a href="../pdfs/<?= htmlspecialchars($ebook['pdf_file']) ?>" 
                                       class="btn btn-primary w-100" target="_blank">
                                       ดาวน์โหลด eBook (PDF)
                                    </a>
                                <?php else: ?>
                                    <button class="btn btn-secondary w-100" disabled>ไม่มีไฟล์ PDF</button>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php else: ?>
            <div class="alert alert-info text-center mt-4">
                ยังไม่มีหนังสือที่สามารถดาวน์โหลดได้
            </div>
        <?php endif; ?>
    </div>

    <?php include '../partials/footer.php'; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
