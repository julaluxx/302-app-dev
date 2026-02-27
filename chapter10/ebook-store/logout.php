<?php
// logout.php - ออกจากระบบอย่างปลอดภัย
session_start();

// เคลียร์ข้อมูล session ทั้งหมด
session_unset();
session_destroy();

// ป้องกันการ cache หน้าเก่าที่ล็อกอินไว้
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');
?>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ออกจากระบบ | e-Book Shop</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow-sm p-4 text-center" style="max-width: 400px;">
            <h3 class="text-success mb-3">ออกจากระบบเรียบร้อยแล้ว</h3>
            <p class="text-muted">ขอบคุณที่ใช้บริการ e-Book Shop</p>
            <a href="index.php" class="btn btn-primary w-100 mt-3">กลับไปหน้าแรก</a>
        </div>
    </div>

    <script>
        // ป้องกันผู้ใช้กด Back แล้วเห็นหน้าเก่า
        if (window.history.replaceState) {
            window.history.replaceState(null, '', window.location.href);
        }
    </script>
</body>
</html>
