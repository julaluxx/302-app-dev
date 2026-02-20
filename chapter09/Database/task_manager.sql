-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2025 at 04:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_manager`
--

CREATE DATABASE task_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE task_manager;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` enum('pending','in_progress','completed') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
