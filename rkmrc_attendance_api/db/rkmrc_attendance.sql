-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2026 at 08:10 AM
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
-- Database: `rkmrc_attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_log`
--

CREATE TABLE `attendance_log` (
  `id` int(11) NOT NULL,
  `roll_no` varchar(50) NOT NULL,
  `dept` varchar(50) NOT NULL,
  `sem` varchar(10) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `day` varchar(20) NOT NULL,
  `time_slot` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance_log`
--

INSERT INTO `attendance_log` (`id`, `roll_no`, `dept`, `sem`, `subject`, `date`, `day`, `time_slot`, `status`, `timestamp`) VALUES
(12, 'LSUG/124/25', 'Life_Sciences', '2', 'VAC/AEC', '2026-01-01', 'Thursday', '10.30-11.15', 'Present', '2026-01-27 12:40:10');

-- --------------------------------------------------------

--
-- Table structure for table `master_schedule`
--

CREATE TABLE `master_schedule` (
  `id` int(11) NOT NULL,
  `session` varchar(50) NOT NULL,
  `dept` varchar(100) NOT NULL,
  `sem` varchar(20) NOT NULL,
  `day` varchar(20) NOT NULL,
  `time` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master_schedule`
--

INSERT INTO `master_schedule` (`id`, `session`, `dept`, `sem`, `day`, `time`, `subject`) VALUES
(1, '2025-2026', 'Life_Sciences', '2', 'Monday', '10.30-11.15', 'VAC/AEC'),
(2, '2025-2026', 'Life_Sciences', '2', 'Monday', '11.15-12.00', 'MAJ'),
(3, '2025-2026', 'Life_Sciences', '2', 'Monday', '12.00-12.45', 'MAJ'),
(4, '2025-2026', 'Life_Sciences', '2', 'Monday', '12.45-1.30', 'MIN'),
(5, '2025-2026', 'Life_Sciences', '2', 'Monday', '2.00-2.45', 'MAJ'),
(6, '2025-2026', 'Life_Sciences', '2', 'Monday', '2.45-3.30', 'PRACTICAL'),
(7, '2025-2026', 'Life_Sciences', '2', 'Monday', '3.30-4.15', 'PRACTICAL'),
(9, '2025-2026', 'Life_Sciences', '2', 'Tuesday', '10.30-11.15', 'VAC/AEC'),
(10, '2025-2026', 'Life_Sciences', '2', 'Tuesday', '11.15-12.00', 'MAJ'),
(11, '2025-2026', 'Life_Sciences', '2', 'Tuesday', '12.00-12.45', 'MAJ'),
(12, '2025-2026', 'Life_Sciences', '2', 'Tuesday', '12.45-1.30', 'MAJ'),
(13, '2025-2026', 'Life_Sciences', '2', 'Tuesday', '2.45-3.30', 'IDC'),
(16, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '10.30-11.15', 'VAC/AEC'),
(17, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '11.15-12.00', 'MAJ'),
(18, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '12.00-12.45', 'MAJ'),
(19, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '12.45-1.30', 'MAJ'),
(20, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '2.00-2.45', 'MAJ'),
(21, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '2.45-3.30', 'SEC'),
(22, '2025-2026', 'Life_Sciences', '2', 'Wednesday', '3.30-4.15', 'SEC'),
(23, '2025-2026', 'Life_Sciences', '2', 'Thursday', '10.30-11.15', 'VAC/AEC'),
(24, '2025-2026', 'Life_Sciences', '2', 'Thursday', '11.15-12.00', 'IDC'),
(25, '2025-2026', 'Life_Sciences', '2', 'Thursday', '12.00-12.45', 'MAJ'),
(26, '2025-2026', 'Life_Sciences', '2', 'Thursday', '12.45-1.30', 'MAJ'),
(27, '2025-2026', 'Life_Sciences', '2', 'Thursday', '2.00-2.45', 'PRACTICAL'),
(28, '2025-2026', 'Life_Sciences', '2', 'Thursday', '2.45-3.30', 'PRACTICAL'),
(29, '2025-2026', 'Life_Sciences', '2', 'Thursday', '3.30-4.15', 'PRACTICAL'),
(31, '2025-2026', 'Life_Sciences', '2', 'Friday', '10.30-11.15', 'MAJ'),
(32, '2025-2026', 'Life_Sciences', '2', 'Friday', '11.15-12.00', 'MAJ'),
(33, '2025-2026', 'Life_Sciences', '2', 'Friday', '12.00-12.45', 'SEC'),
(34, '2025-2026', 'Life_Sciences', '2', 'Friday', '12.45-1.30', 'SEC'),
(35, '2025-2026', 'Life_Sciences', '2', 'Friday', '2.00-2.45', 'MIN'),
(36, '2025-2026', 'Life_Sciences', '2', 'Friday', '2.45-3.30', 'PRACTICAL'),
(37, '2025-2026', 'Life_Sciences', '2', 'Friday', '3.30-4.15', 'PRACTICAL'),
(38, '2025-2026', 'Life_Sciences', '2', 'Friday', '4.15-5.00', 'PRACTICAL'),
(39, '2025-2026', 'Life_Sciences', '2', 'Saturday', '10.30-11.15', 'MAJ'),
(41, '2025-2026', 'Life_Sciences', '2', 'Saturday', '12.00-12.45', 'Minor'),
(42, '2025-2026', 'Life_Sciences', '2', 'Saturday', '12.45-1.30', 'Minor'),
(43, '2025-2026', 'Life_Sciences', '2', 'Saturday', '2.00-2.45', 'IDC'),
(44, '2025-2026', 'English', '2', 'Monday', '10.30-11.15', 'Poetry (MAJ)'),
(45, '2025-2026', 'English', '2', 'Monday', '11.15-12.00', 'Drama (MAJ)'),
(46, '2025-2026', 'English', '2', 'Monday', '12.00-12.45', 'Hist. of Lit'),
(47, '2025-2026', 'English', '2', 'Monday', '2.00-2.45', 'Tutorial'),
(48, '2025-2026', 'English', '2', 'Tuesday', '10.30-11.15', 'Phonetics'),
(49, '2025-2026', 'English', '2', 'Tuesday', '11.15-12.00', 'Phonetics'),
(50, '2025-2026', 'English', '2', 'Tuesday', '12.45-1.30', 'AEC (English)'),
(51, '2025-2026', 'English', '2', 'Tuesday', '2.45-3.30', 'Novel (MAJ)'),
(52, '2025-2026', 'English', '2', 'Wednesday', '11.15-12.00', 'Poetry (MAJ)'),
(53, '2025-2026', 'English', '2', 'Wednesday', '12.00-12.45', 'Library'),
(54, '2025-2026', 'English', '2', 'Wednesday', '2.00-2.45', 'VAC'),
(55, '2025-2026', 'English', '2', 'Thursday', '10.30-11.15', 'Drama (MAJ)'),
(56, '2025-2026', 'English', '2', 'Thursday', '11.15-12.00', 'Drama (MAJ)'),
(57, '2025-2026', 'English', '2', 'Thursday', '2.45-3.30', 'Txt Reading'),
(58, '2025-2026', 'English', '2', 'Thursday', '3.30-4.15', 'Txt Reading'),
(59, '2025-2026', 'English', '2', 'Friday', '10.30-11.15', 'Minor'),
(60, '2025-2026', 'English', '2', 'Friday', '11.15-12.00', 'Minor'),
(61, '2025-2026', 'English', '2', 'Friday', '12.45-1.30', 'SEC (Writing)'),
(62, '2025-2026', 'English', '2', 'Friday', '2.00-2.45', 'SEC (Writing)'),
(63, '2025-2026', 'English', '2', 'Saturday', '10.30-11.15', 'Seminar'),
(64, '2025-2026', 'English', '2', 'Saturday', '11.15-12.00', 'Group Disc.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `roll_no` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `dept` varchar(100) NOT NULL,
  `semester` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_setup_done` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `roll_no`, `name`, `dept`, `semester`, `email`, `mobile`, `password`, `is_setup_done`) VALUES
(1, 'LSUG/124/25', 'Avirup Mukherjee', 'Life_Sciences', 2, 'avirupmukherjee019@gmail.com', '+919609173472', '$2y$10$XYsn.Bb2pkVxrMEbNrPrZ.Mv8hUtZ5Smta0h6Be0kNRlDumVC1tue', 0),
(2, 'ENUG/124/25', 'Anway Saha', 'English', 2, 'anway@gmail.com', '1234567890', '$2y$10$pWeBCXQqoVczUYTxLSCmn.aXyGSucDUutWQ3AgBkcQ1AOH4yFo4my', 0),
(3, 'LSUG/125/25', 'Rahul Sardar', 'Life_Sciences', 1, 'rahul@gmail.com', '1234567890', '$2y$10$2JoOMvfjTG/B9KmDP/Zo5eXFDd7U/sPwtbbr8KfyZgjSgeMr9eT4q', 0),
(4, 'CSUG/124/25', 'Pakhi', 'Computer_Science', 1, 'pakhi@gmail.com', '1234567890', '$2y$10$svcnWMzzj66CGrkoa4InI.p52Y9qyw84KGADf5icg7Xtrs5VpIp8e', 0),
(5, 'LSUG/254/25', 'Avik Makal', 'Life_Sciences', 2, 'tanusreemakal6@gmail.com', '8910448245', '$2y$10$GpVqRlJ6QHwPA4MyV8m1R.tdLN.Ydnm/pMoKrhJJiCvv1Qwzlgt12', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_log`
--
ALTER TABLE `attendance_log`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_entry` (`roll_no`,`date`,`time_slot`);

--
-- Indexes for table `master_schedule`
--
ALTER TABLE `master_schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roll_no` (`roll_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance_log`
--
ALTER TABLE `attendance_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `master_schedule`
--
ALTER TABLE `master_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
