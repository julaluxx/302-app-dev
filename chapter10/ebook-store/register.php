<?php
require_once 'db.php';

$success = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $email    = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === '' || $email === '' || $password === '') {
        $error = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
    } else {
        try {
            // เข้ารหัสรหัสผ่าน
            $hash = password_hash($password, PASSWORD_BCRYPT);

            // เตรียมคำสั่ง SQL
            $stmt = $pdo->prepare("INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, 'User')");
            $stmt->execute([$username, $email, $hash]);

            $success = 'สมัครสมาชิกเรียบร้อยแล้ว! กรุณาเข้าสู่ระบบ';
        } catch (PDOException $e) {
            // ตรวจสอบกรณี username หรือ email ซ้ำ
            if (str_contains($e->getMessage(), 'Duplicate')) {
                $error = 'ชื่อผู้ใช้หรืออีเมลนี้ถูกใช้งานแล้ว';
            } else {
                $error = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>สมัครสมาชิก | e-Book Shop</title>
    <!-- Bootstrap 5.3.2 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
    <div class="card shadow-sm p-4" style="max-width: 450px; width: 100%;">
        <h3 class="text-center mb-3">สมัครสมาชิก</h3>

        <?php if ($success): ?>
            <div class="alert alert-success text-center">
                <?= htmlspecialchars($success) ?><br>
                <a href="login.php" class="btn btn-sm btn-success mt-2">ไปที่หน้าเข้าสู่ระบบ</a>
            </div>
        <?php elseif ($error): ?>
            <div class="alert alert-danger text-center">
                <?= htmlspecialchars($error) ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="register.php" class="vstack gap-3">
            <div class="form-floating">
                <input type="text" class="form-control" id="username" name="username" placeholder="ชื่อผู้ใช้" required>
                <label for="username">ชื่อผู้ใช้</label>
            </div>

            <div class="form-floating">
                <input type="email" class="form-control" id="email" name="email" placeholder="อีเมล" required>
                <label for="email">อีเมล</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control" id="password" name="password" placeholder="รหัสผ่าน" required>
                <label for="password">รหัสผ่าน</label>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary">สมัครสมาชิก</button>
            </div>
        </form>

        <p class="text-center mt-3">
            มีบัญชีอยู่แล้ว? <a href="login.php">เข้าสู่ระบบ</a>
        </p>
    </div>
</div>

</body>
</html>
