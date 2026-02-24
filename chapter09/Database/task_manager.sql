SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- สร้างและใช้ฐานข้อมูล Task Manager
CREATE DATABASE task_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE task_manager;

-- สร้างตารางงาน
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` enum('pending','in_progress','completed') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- เพิ่มข้อมูลงานตัวอย่าง
INSERT INTO `tasks` (`id`, `task_name`, `description`, `due_date`, `status`) VALUES
(1, 'ออกแบบหน้า UI', 'ออกแบบอินเทอร์เฟซสำหรับแอปพลิเคชัน Task Manager', '2025-03-01', 'in_progress'),
(2, 'ทดสอบระบบล็อกอิน', 'ตรวจสอบว่าระบบล็อกอินทำงานได้ถูกต้อง', '2025-03-05', 'pending'),
(3, 'ประชุมทีมพัฒนา', 'จัดประชุมทีมเพื่อวางแผนโครงการ', '2025-03-02', 'completed'),
(4, 'ปรับปรุงฐานข้อมูล', 'เพิ่ม index ในตารางเพื่อลดเวลา query', '2025-03-07', 'pending'),
(5, 'พัฒนา API', 'เขียน API สำหรับการจัดการงานในระบบ', '2025-03-10', 'in_progress'),
(6, 'เพิ่มระบบแจ้งเตือน', 'พัฒนาฟังก์ชันแจ้งเตือนเมื่อถึงกำหนดงาน', '2025-03-15', 'pending'),
(7, 'เขียนเอกสารคู่มือ', 'สร้างคู่มือการใช้งานแอปพลิเคชัน', '2025-03-20', 'pending'),
(8, 'ปรับปรุง UI/UX', 'แก้ไขดีไซน์ตาม feedback ของผู้ใช้', '2025-03-18', 'in_progress'),
(9, 'ทดสอบประสิทธิภาพ', 'รัน performance test เพื่อวัดประสิทธิภาพระบบ', '2025-03-22', 'pending'),
(10, 'ส่งโปรเจคให้ลูกค้า', 'ตรวจสอบความเรียบร้อยก่อนส่งงาน', '2025-03-30', 'pending');

-- ตั้งค่า Primary Key และ Auto Increment
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

COMMIT;
