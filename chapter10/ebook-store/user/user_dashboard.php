<?php
session_start();

// ตรวจสอบการเข้าสู่ระบบ
if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'User') {
    header('Location: ../login.php');
    exit();
}

include 'user_header.php';
require_once '../db.php'; // เชื่อมต่อฐานข้อมูล

// ตรวจสอบว่ามีการค้นหาหรือไม่
$searchQuery = "";
if (isset($_GET['search'])) {
    $searchQuery = trim($_GET['search']);
    $stmt = $pdo->prepare("SELECT * FROM ebooks WHERE name LIKE ? ORDER BY created_at DESC");
    $stmt->execute(['%' . $searchQuery . '%']);
} else {
    $stmt = $pdo->query("SELECT * FROM ebooks ORDER BY created_at DESC");
}
$ebooks = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard | e-Book Shop</title>
    <!-- Bootstrap 5.3.2 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- ใช้สไตล์รวมจากไฟล์ css -->
    <link href="../css/styles.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <!-- แสดงข้อความสำเร็จ -->
        <?php if (isset($_SESSION['success_message'])): ?>
            <div class="alert alert-success">
                <?= htmlspecialchars($_SESSION['success_message']) ?>
            </div>
            <?php unset($_SESSION['success_message']); ?>
        <?php endif; ?>

        <!-- แสดงชื่อผู้ใช้ -->
        <h1 class="mb-3">ยินดีต้อนรับ, <?= htmlspecialchars($_SESSION['username']) ?></h1>
        <p class="text-muted">หน้านี้เป็นหน้าแดชบอร์ดของผู้ใช้</p>
        <a href="../logout.php" class="btn btn-danger mb-4">ออกจากระบบ</a>

        <!-- ฟอร์มค้นหา eBooks -->
        <form method="GET" action="" class="mb-4">
            <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="ค้นหาหนังสือ eBook"
                       value="<?= htmlspecialchars($searchQuery) ?>">
                <button type="submit" class="btn btn-primary">ค้นหา</button>
            </div>
        </form>

        <!-- แสดงผล eBooks ทั้งหมดในรูปแบบ card layout -->
        <div class="row">
            <?php foreach ($ebooks as $ebook): ?>
                <?php
                    // ใช้ placeholder ถ้าไม่มีภาพ
                    $img = !empty($ebook['image']) ? htmlspecialchars($ebook['image']) : 'placeholder.png';
                ?>
                <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card h-100 shadow-sm">
                        <!-- ใช้ class book-cover เพื่อให้ style จาก style.css ทำงาน -->
                        <img src="../images/<?= $img ?>" alt="<?= htmlspecialchars($ebook['name']) ?>" class="book-cover">
                        
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title"><?= htmlspecialchars($ebook['name']) ?></h5>
                            <p class="card-text flex-grow-1">
                                <?= htmlspecialchars(mb_strimwidth($ebook['description'] ?? '', 0, 100, '...')) ?>
                            </p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <span class="fw-bold text-primary">
                                    <?= number_format((float)$ebook['price'], 2) ?> บาท
                                </span>
                                <form action="add_to_cart.php" method="POST" class="m-0">
                                    <input type="hidden" name="ebook_id" value="<?= (int)$ebook['ebook_id'] ?>">
                                    <button type="submit" class="btn btn-sm btn-success">เพิ่มลงรถเข็น</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>

    <?php include '../partials/footer.php'; ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
