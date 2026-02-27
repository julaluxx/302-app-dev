<?php
// เริ่มต้น session
session_start();
// นำเข้าไฟล์ส่วนหัวของผู้ดูแลระบบ
include 'admin_header.php';
?>

<div class="container mt-4">
    <h1>หน้าแดชบอร์ดผู้ดูแลระบบ (Admin Dashboard)</h1>
    <p class="text-muted">ยินดีต้อนรับเข้าสู่ระบบจัดการ e-Book Shop สำหรับผู้ดูแลระบบ</p>

    <div class="row g-4">
        <!-- Card: Manage eBooks -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">จัดการ eBooks</h5>
                    <p class="card-text">เพิ่ม แก้ไข หรือลบข้อมูลหนังสือ eBook ในระบบ</p>
                    <a href="manage_ebooks.php" class="btn btn-primary">ไปที่หน้า eBooks</a>
                </div>
            </div>
        </div>

        <!-- Card: Manage Payments -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">จัดการการชำระเงิน</h5>
                    <p class="card-text">ตรวจสอบและยืนยันการชำระเงินจากผู้ใช้</p>
                    <a href="manage_payments.php" class="btn btn-success">ไปที่หน้า Payment</a>
                </div>
            </div>
        </div>

        <!-- Card: Manage Users -->
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">จัดการผู้ใช้งาน</h5>
                    <p class="card-text">ตรวจสอบและจัดการบัญชีผู้ใช้ในระบบ</p>
                    <a href="manage_users.php" class="btn btn-warning">ไปที่หน้า Users</a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include '../partials/footer.php'; ?>

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
