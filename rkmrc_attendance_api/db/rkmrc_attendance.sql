-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2026 at 06:51 AM
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
(1, 'LSUG/124/25', '', 'Physics', 1, 'ahgagahg@gmail.com', NULL, '$2y$10$80QKpKxSMeAbr63tbEwnjOh8tyqpqG//GyiAjq91e1/zu93t9R9wq', 0),
(2, 'LSUG/124/29', '', 'Life Science', 2, 'fkhdhh@gmail.com', '9609173472', '$2y$10$uyvO5Cx9d7W5BqlYtPI7DekOsxOSA2bb6NHcgaKEnmCRQ1myFz6su', 0),
(61, 'LSUG12429', '', 'Physics', 2, 'phy@gmail.com', '8796542365', '$2y$10$Os8GAFMNVebDeW2vkQu47Okxv8GIUrXFAQ3aFMK3YO1wzj/wtOEs6', 0),
(62, 'PHUG12425', '', 'Physics', 2, 'phy@gmail.com', '1234567890', '$2y$10$q6jxK81.KHdD8sOj9f20U.kicpgwH3aPDV5oPTS3C1ombIBjJiGDi', 0),
(64, 'LSUG04625', '', 'Life_Sciences', 2, 'rupayansingha2@gmail.com', '9143480258', '$2y$10$Ttf2bLk3D6zC3MCHFZNeLOYXX388tePrXnnGkHf6b5vsJ8oHGQjmq', 0),
(66, 'LSUG12425', 'Avirup Mukherjee', 'Life_Sciences', 2, 'avirupmukherjee019@gmail.com', '9609173472', '$2y$10$Cg0yMyWXiAa695kEzazjdO0U8gm3LAuwwuO4.9zIlQ/gT379HJ.ky', 0);

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
