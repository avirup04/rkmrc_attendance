-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2026 at 04:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

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

INSERT INTO `users` (`id`, `roll_no`, `dept`, `semester`, `email`, `mobile`, `password`, `is_setup_done`) VALUES
(1, 'LSUG/124/25', 'Physics', 1, 'ahgagahg@gmail.com', NULL, '$2y$10$80QKpKxSMeAbr63tbEwnjOh8tyqpqG//GyiAjq91e1/zu93t9R9wq', 0),
(2, 'LSUG/124/29', 'Life Science', 2, 'fkhdhh@gmail.com', '9609173472', '$2y$10$uyvO5Cx9d7W5BqlYtPI7DekOsxOSA2bb6NHcgaKEnmCRQ1myFz6su', 0),
(58, 'LSUG12425', 'Life Science', 2, 'avirupmukherjee019@gmail.com', '9609173472', '$2y$10$SgncZaa4J4KxAeaDxPAiXun0yZDn09O970Vy1ZRCpWCghjQGZq9OG', 0),
(61, 'LSUG12429', 'Physics', 2, 'phy@gmail.com', '8796542365', '$2y$10$Os8GAFMNVebDeW2vkQu47Okxv8GIUrXFAQ3aFMK3YO1wzj/wtOEs6', 0),
(62, 'PHUG12425', 'Physics', 2, 'phy@gmail.com', '1234567890', '$2y$10$q6jxK81.KHdD8sOj9f20U.kicpgwH3aPDV5oPTS3C1ombIBjJiGDi', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
