-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2021 at 04:44 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_category_info`
--

CREATE TABLE `admin_category_info` (
  `cat_id` int(2) NOT NULL,
  `name` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_category_info`
--

INSERT INTO `admin_category_info` (`cat_id`, `name`) VALUES
(2, 'chela'),
(1, 'raja');

-- --------------------------------------------------------

--
-- Table structure for table `admin_info`
--

CREATE TABLE `admin_info` (
  `id` int(10) NOT NULL,
  `user_name` varchar(57) NOT NULL,
  `user_pass` text DEFAULT NULL,
  `cat_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_info`
--

INSERT INTO `admin_info` (`id`, `user_name`, `user_pass`, `cat_id`) VALUES
(1, 'admin', '12345', 1);

-- --------------------------------------------------------

--
-- Table structure for table `applied_for_job_info`
--

CREATE TABLE `applied_for_job_info` (
  `post_by` bigint(20) NOT NULL,
  `post_id` int(10) NOT NULL,
  `applied_id` int(10) NOT NULL,
  `job_type` int(5) NOT NULL,
  `applied_by` bigint(20) NOT NULL,
  `apply_status` varchar(10) DEFAULT NULL,
  `apply_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applied_for_job_info`
--

INSERT INTO `applied_for_job_info` (`post_by`, `post_id`, `applied_id`, `job_type`, `applied_by`, `apply_status`, `apply_time`) VALUES
(2, 1, 1, 1, 3, 'not hired', '2021-05-15 21:20:33'),
(2, 1, 2, 1, 4, 'not hired', '2021-05-28 11:08:36'),
(3, 1, 3, 3, 4, 'not hired', '2021-06-01 13:39:59');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `user_id` bigint(20) NOT NULL,
  `b_id` int(10) NOT NULL,
  `image` text DEFAULT NULL,
  `title` varchar(57) DEFAULT NULL,
  `body` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`user_id`, `b_id`, `image`, `title`, `body`, `post_time`) VALUES
(1, 1, NULL, 'Visiting StudentBook', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:08:01'),
(2, 1, NULL, 'Nabid StudentBook', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:08:19'),
(3, 1, NULL, 'On the way on our career', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:08:51'),
(3, 2, NULL, 'First time posting', 'I am posting for the first time', '2021-05-04 00:00:09'),
(3, 3, NULL, 'THis is demo heading', 'This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me This is demo body posted by me ', '2021-05-30 21:31:10'),
(3, 4, NULL, 'asdasfafasf', 'asfsaf', '2021-06-30 00:09:49'),
(4, 1, NULL, 'Never Give Up', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:09:18'),
(5, 1, NULL, 'Working from home', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:09:35'),
(6, 1, NULL, 'Current State', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:09:53'),
(7, 1, NULL, 'What can we do?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2021-04-16 02:10:25');

-- --------------------------------------------------------

--
-- Table structure for table `comment_info`
--

CREATE TABLE `comment_info` (
  `comment_by` bigint(20) NOT NULL,
  `comment_id` int(10) NOT NULL,
  `post_by` bigint(20) NOT NULL,
  `post_id` int(10) NOT NULL,
  `post_type` int(2) NOT NULL,
  `body` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment_info`
--

INSERT INTO `comment_info` (`comment_by`, `comment_id`, `post_by`, `post_id`, `post_type`, `body`, `post_time`) VALUES
(3, 1, 6, 1, 1, 'asdasd', '2021-05-03 22:42:29'),
(3, 2, 6, 1, 1, 'Sup nabid\r\n', '2021-05-03 22:44:09'),
(3, 3, 6, 1, 1, 'qwekashdkjasdhkasjdhkasjdhakjsdhaskd', '2021-05-03 22:44:57'),
(3, 4, 6, 1, 1, 'ABC ASLFKJLKA ALSFJ KHKAJSHF KJSAHF KJAHSFK ASSJHF KJAS UIS', '2021-05-03 22:46:00'),
(3, 5, 7, 1, 1, 'Kisui koron lagbo na', '2021-05-03 22:47:46'),
(3, 6, 7, 1, 1, '', '2021-05-03 22:53:28'),
(3, 7, 7, 1, 1, '', '2021-05-03 22:54:32'),
(3, 8, 7, 1, 1, '', '2021-05-03 22:55:07'),
(3, 9, 7, 1, 1, 'kisui koron lagbo na', '2021-05-03 22:58:05'),
(3, 10, 7, 1, 1, 'asdasdas', '2021-05-03 23:20:17'),
(3, 11, 3, 2, 1, 'sdsadsad', '2021-05-04 00:00:19'),
(3, 12, 3, 2, 1, 'rfturftyfhgfhgfhgfhgfhg', '2021-05-04 00:09:42'),
(3, 13, 3, 3, 1, 'oajshfdosaasdasd', '2021-05-04 01:34:43'),
(5, 1, 6, 1, 1, 'This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech ', '2021-05-03 00:00:00'),
(5, 2, 6, 1, 1, 'This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech This is my first comment lorem ipsuom io eisnech ', '2021-05-03 16:51:21');

-- --------------------------------------------------------

--
-- Table structure for table `dataset_info`
--

CREATE TABLE `dataset_info` (
  `user_id` bigint(20) NOT NULL,
  `d_id` int(10) NOT NULL,
  `title` varchar(57) DEFAULT NULL,
  `body` text DEFAULT NULL,
  `dataset` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dataset_info`
--

INSERT INTO `dataset_info` (`user_id`, `d_id`, `title`, `body`, `dataset`, `post_time`) VALUES
(1, 1, 'Iris Dataset', 'In this dataset there are 10 columns bla blab lab lab bla bla bla', 'datasets/iris.csv', '2021-04-16 00:00:00'),
(3, 1, 'New dataset', 'dummy text ', 'datasets/dataset-1622533601413.csv', '2021-06-01 13:46:41');

-- --------------------------------------------------------

--
-- Table structure for table `job_info`
--

CREATE TABLE `job_info` (
  `user_id` bigint(20) NOT NULL,
  `j_id` int(10) NOT NULL,
  `job_type` int(5) NOT NULL,
  `dp_id` bigint(20) DEFAULT NULL,
  `payment` decimal(57,2) DEFAULT NULL,
  `title` varchar(57) DEFAULT NULL,
  `body` text DEFAULT NULL,
  `looking_for` varchar(57) DEFAULT NULL,
  `post_status` varchar(10) DEFAULT NULL,
  `rate_given` varchar(3) DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `post_body` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_info`
--

INSERT INTO `job_info` (`user_id`, `j_id`, `job_type`, `dp_id`, `payment`, `title`, `body`, `looking_for`, `post_status`, `rate_given`, `deadline`, `post_body`, `file`, `post_time`) VALUES
(1, 1, 1, NULL, '5007.00', 'Need a web developer!!!', 'If someone makes a website for me i will pay him', 'web developer', 'active', NULL, '2021-04-23 00:00:00', NULL, NULL, '2021-04-16 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `job_type_info`
--

CREATE TABLE `job_type_info` (
  `type_id` int(5) NOT NULL,
  `job_cat` varchar(57) NOT NULL,
  `job_type` varchar(57) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_type_info`
--

INSERT INTO `job_type_info` (`type_id`, `job_cat`, `job_type`) VALUES
(1, 'Web developing', 'organization'),
(2, 'Web developement', 'contract'),
(3, 'Mobile Developement', 'organization'),
(4, 'Data Entry', 'contract'),
(5, 'Graphics Designing', 'organization'),
(6, 'Video editing', 'contract'),
(7, 'Game developement', 'organization'),
(8, 'Dataset Collecting', 'contract');

-- --------------------------------------------------------

--
-- Table structure for table `msg`
--

CREATE TABLE `msg` (
  `sender_id` bigint(20) NOT NULL,
  `reciever_id` bigint(20) NOT NULL,
  `post_time` datetime NOT NULL,
  `body` text NOT NULL,
  `is_seen` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `msg_creation_info`
--

CREATE TABLE `msg_creation_info` (
  `user_id` bigint(20) NOT NULL,
  `created_with_id` bigint(20) NOT NULL,
  `status` int(1) DEFAULT NULL,
  `msg_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `org_circular_info`
--

CREATE TABLE `org_circular_info` (
  `user_id` bigint(20) NOT NULL,
  `o_id` int(10) NOT NULL,
  `org_name` varchar(57) DEFAULT NULL,
  `designation` varchar(57) DEFAULT NULL,
  `job_responsibility` text DEFAULT NULL,
  `salary` decimal(57,2) DEFAULT NULL,
  `job_type` int(5) NOT NULL,
  `emp_status` varchar(10) DEFAULT NULL,
  `workplace` varchar(27) DEFAULT NULL,
  `edu_req` text DEFAULT NULL,
  `exp_req` text DEFAULT NULL,
  `additional_req` text DEFAULT NULL,
  `job_location` text DEFAULT NULL,
  `benefits` text DEFAULT NULL,
  `looking_for` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL,
  `recruit_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `org_circular_info`
--

INSERT INTO `org_circular_info` (`user_id`, `o_id`, `org_name`, `designation`, `job_responsibility`, `salary`, `job_type`, `emp_status`, `workplace`, `edu_req`, `exp_req`, `additional_req`, `job_location`, `benefits`, `looking_for`, `post_time`, `recruit_id`) VALUES
(2, 1, 'United IT', 'HR', 'You have to be allrounder\r\nYou have to know java c++ python shb\r\nYou have to be mastered at everything \r\ngg', '5.00', 1, 'Full Time', 'Office', 'MSC in CSE', '69years', 'SHB jana thakte hobe', 'UGANDA', 'KONO BENEFITS NAI', 'PRAWWW', '2021-04-07 10:25:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `user_id` bigint(20) NOT NULL,
  `p_id` int(10) NOT NULL,
  `image` text DEFAULT NULL,
  `title` varchar(57) DEFAULT NULL,
  `body` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `post_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`user_id`, `p_id`, `image`, `title`, `body`, `link`, `post_time`) VALUES
(1, 1, NULL, 'Dummy work', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:40:15'),
(2, 1, NULL, 'My First work', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:40:39'),
(4, 1, NULL, 'Gaming project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:41:10'),
(5, 1, NULL, 'Something project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:41:24'),
(6, 1, NULL, 'Hacking project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:41:41'),
(7, 1, NULL, 'Ghum project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'github.com', '2021-04-16 01:41:52');

-- --------------------------------------------------------

--
-- Table structure for table `post_type_info`
--

CREATE TABLE `post_type_info` (
  `id` int(2) NOT NULL,
  `type` varchar(57) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_type_info`
--

INSERT INTO `post_type_info` (`id`, `type`) VALUES
(1, 'blog'),
(2, 'circular'),
(3, 'contract'),
(4, 'dataset');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `user_id` bigint(20) NOT NULL,
  `linkedin` varchar(57) DEFAULT NULL,
  `google` varchar(57) DEFAULT NULL,
  `github` varchar(57) DEFAULT NULL,
  `facebook` varchar(57) DEFAULT NULL,
  `kaggle` varchar(57) DEFAULT NULL,
  `website` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `social_links`
--

INSERT INTO `social_links` (`user_id`, `linkedin`, `google`, `github`, `facebook`, `kaggle`, `website`) VALUES
(1, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(2, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(3, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', 'asif.com'),
(4, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(5, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(6, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(7, 'linkedin.com', 'google.com', 'guthib.com', 'facebook.com', 'kaggle.com', NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trans_history`
--

CREATE TABLE `trans_history` (
  `sender_id` bigint(20) NOT NULL,
  `reciever_id` bigint(20) NOT NULL,
  `t_id` int(10) NOT NULL,
  `job_id` int(10) NOT NULL,
  `amount` decimal(57,2) NOT NULL,
  `tran_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tran_history_admin`
--

CREATE TABLE `tran_history_admin` (
  `user_id` bigint(20) NOT NULL,
  `t_id` bigint(20) NOT NULL,
  `admin_id` int(10) NOT NULL,
  `amount` decimal(57,2) NOT NULL,
  `tran_no` varchar(57) NOT NULL,
  `activity` varchar(10) NOT NULL,
  `tran_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_category_info`
--

CREATE TABLE `user_category_info` (
  `cat_id` int(2) NOT NULL,
  `name` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_category_info`
--

INSERT INTO `user_category_info` (`cat_id`, `name`) VALUES
(2, 'Graduated'),
(1, 'Undergraduate');

-- --------------------------------------------------------

--
-- Table structure for table `user_contact`
--

CREATE TABLE `user_contact` (
  `user_id` bigint(20) NOT NULL,
  `phone` varchar(21) DEFAULT NULL,
  `email` varchar(57) DEFAULT NULL,
  `adress` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_contact`
--

INSERT INTO `user_contact` (`user_id`, `phone`, `email`, `adress`) VALUES
(1, '+8801611111111', 'dummy@hotmail.com', 'Dummy area'),
(2, '+8801622222222', 'nabu69@hotmail.com', 'Mirpur area'),
(3, '+8801633333333', 'asif@fakmasdasdail.com', 'Mirpur'),
(4, '+8801644444444', 'jim34@hotmail.com', 'Malibagh area'),
(5, '+8801655555555', 'bidhan@hotmail.com', 'Notunbazar area'),
(6, '+8801666666666', 'bithi3@hotmail.com', 'Badda area'),
(7, '+8801677777777', 'arnobezboiz@hotmail.com', 'Dhaka area');

-- --------------------------------------------------------

--
-- Table structure for table `user_education`
--

CREATE TABLE `user_education` (
  `user_id` bigint(20) NOT NULL,
  `edu_id` int(10) NOT NULL,
  `edu_type` varchar(17) DEFAULT NULL,
  `certificate` varchar(57) DEFAULT NULL,
  `edu_name` varchar(37) DEFAULT NULL,
  `start_year` date DEFAULT NULL,
  `end_year` date DEFAULT NULL,
  `result` varchar(17) DEFAULT NULL,
  `cur_active` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_education`
--

INSERT INTO `user_education` (`user_id`, `edu_id`, `edu_type`, `certificate`, `edu_name`, `start_year`, `end_year`, `result`, `cur_active`) VALUES
(1, 1, 'school', 'SSC', 'Dummy School', '2021-04-01', '2021-04-09', 'GPA 5', 'no'),
(2, 1, 'school', 'SSC', 'Monipur School', '2010-04-01', '2014-04-09', 'GPA 5', 'no'),
(3, 1, 'school', 'SSC', 'BCIC School', '2021-04-01', '2021-04-09', 'GPA 5', 'no'),
(4, 1, 'school', 'SSC', 'SOS School', '2021-04-01', '2021-04-09', 'GPA 5', 'no'),
(5, 1, 'school', 'SSC', 'Police School', '2021-04-01', '2021-04-09', 'GPA 5', 'no'),
(6, 1, 'school', 'SSC', 'BCIC School', '2021-04-01', '2021-04-09', 'GPA 5', 'no'),
(7, 1, 'school', 'SSC', 'MUBC School', '2021-04-01', '2021-04-09', 'GPA 5', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` bigint(20) NOT NULL,
  `user_img` text DEFAULT NULL,
  `first_name` varchar(57) DEFAULT NULL,
  `last_name` varchar(57) DEFAULT NULL,
  `gender` varchar(17) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `currency` decimal(57,2) NOT NULL DEFAULT 0.00,
  `interest` varchar(57) DEFAULT NULL,
  `about_me` longtext DEFAULT NULL,
  `blog_count` int(10) DEFAULT NULL,
  `portfolio_count` int(10) DEFAULT NULL,
  `job_count` int(10) DEFAULT NULL,
  `dataset_count` int(10) DEFAULT NULL,
  `circular_count` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_img`, `first_name`, `last_name`, `gender`, `dob`, `currency`, `interest`, `about_me`, `blog_count`, `portfolio_count`, `job_count`, `dataset_count`, `circular_count`) VALUES
(1, NULL, 'Dummmy', 'khor', 'others', '1990-01-01', '0.00', 'Nothing', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(2, NULL, 'Azizul', 'Hakim', 'Male', '1997-01-01', '0.00', 'Web Designer', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(3, 'images/profile-1623179502362.jpg', 'Asif', 'Rahman', 'Male', '1996-01-01', '2500.00', 'Student', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu ', 0, 0, 0, 0, 0),
(4, NULL, 'Mashuk', 'Jim', 'others', '1991-01-01', '0.00', 'Praw Codder', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(5, NULL, 'Bidhan', 'Dash', 'Male', '1990-01-01', '0.00', 'Praw Developer', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(6, NULL, 'Bithi', 'Raha', 'Female', '1993-01-01', '0.00', 'Praw designer', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(7, NULL, 'Ahmed', 'Arnob', 'Male', '1995-01-01', '0.00', 'Praw Sleeper', 'Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu Lorem upsum iomu', 0, 0, 0, 0, 0),
(8, NULL, NULL, NULL, NULL, NULL, '0.00', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_interest_info`
--

CREATE TABLE `user_interest_info` (
  `user_id` bigint(20) NOT NULL,
  `i_id` int(10) NOT NULL,
  `i_name` varchar(57) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_interest_info`
--

INSERT INTO `user_interest_info` (`user_id`, `i_id`, `i_name`) VALUES
(1, 1, 'DUMMY DEVELOPER'),
(1, 2, 'Pro DUMMY DEVELOPER'),
(2, 1, 'Graphics Design'),
(2, 2, 'Video Editing'),
(3, 1, 'Data Science'),
(3, 2, 'Artifical Intelligence'),
(4, 1, 'Web designing'),
(4, 2, 'Mobile Development'),
(5, 1, 'Graphics Design'),
(5, 2, 'Game development'),
(6, 1, 'Gaming'),
(6, 2, 'Game development'),
(7, 1, 'Esports'),
(7, 2, 'Sleeping');

-- --------------------------------------------------------

--
-- Table structure for table `user_login_info`
--

CREATE TABLE `user_login_info` (
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(27) NOT NULL,
  `user_email` varchar(57) NOT NULL,
  `user_pass` text NOT NULL,
  `user_category` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_login_info`
--

INSERT INTO `user_login_info` (`user_id`, `user_name`, `user_email`, `user_pass`, `user_category`) VALUES
(1, 'dummy', 'dummy@dummy.com', 'dummy', 1),
(2, 'nabid', 'nabid@fakmail.com', 'nabid', 1),
(3, 'asif', 'asif@gmail.com', 'asif', 2),
(4, 'jim', 'jim@fakmail.com', 'jim', 1),
(5, 'bidhan', 'bidhan@fakmail.com', 'bidhan', 2),
(6, 'bithi', 'bithi@fakmail.com', 'bithi', 1),
(7, 'arnob', 'arnob@fakmail.com', 'arnob', 2),
(8, 'testing', 'testing@testing.com', 'testing', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_rating`
--

CREATE TABLE `user_rating` (
  `user_id` bigint(20) NOT NULL,
  `rating` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_rating`
--

INSERT INTO `user_rating` (`user_id`, `rating`) VALUES
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(1, 3),
(2, 2),
(1, 3),
(3, 4),
(4, 5),
(5, 1),
(6, 2),
(6, 3),
(7, 4),
(7, 5),
(3, 1),
(5, 2),
(4, 3),
(3, 4),
(6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_skills`
--

CREATE TABLE `user_skills` (
  `user_id` bigint(20) NOT NULL,
  `s_id` int(10) NOT NULL,
  `skill` varchar(20) DEFAULT NULL,
  `skill_type` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_skills`
--

INSERT INTO `user_skills` (`user_id`, `s_id`, `skill`, `skill_type`) VALUES
(1, 1, 'Being Dummmy', 'soft'),
(1, 2, 'Being Tested', 'hard'),
(2, 1, 'Leading', 'soft'),
(2, 2, 'PHP', 'hard'),
(3, 4, 'Patience', 'soft'),
(3, 5, 'Java', 'hard'),
(3, 6, 'asd', 'hard'),
(3, 7, 'asdasdsad', 'hard'),
(4, 1, 'communication', 'soft'),
(4, 2, 'javascript', 'hard'),
(5, 1, 'proactive', 'soft'),
(5, 2, 'C', 'hard'),
(6, 1, 'teamwork', 'soft'),
(6, 2, 'CPP', 'hard'),
(7, 1, 'team player', 'soft'),
(7, 2, 'C#', 'hard');

-- --------------------------------------------------------

--
-- Table structure for table `user_work_experience`
--

CREATE TABLE `user_work_experience` (
  `user_id` bigint(20) NOT NULL,
  `w_id` int(10) NOT NULL,
  `designation` varchar(21) DEFAULT NULL,
  `org_name` varchar(57) DEFAULT NULL,
  `start_year` date DEFAULT NULL,
  `end_year` date DEFAULT NULL,
  `cur_active` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_work_experience`
--

INSERT INTO `user_work_experience` (`user_id`, `w_id`, `designation`, `org_name`, `start_year`, `end_year`, `cur_active`) VALUES
(3, 1, 'CEO', 'StudentBook', '2019-12-07', NULL, 'yes'),
(3, 2, 'CEO', 'YUY', '2021-06-04', NULL, 'Yes');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_category_info`
--
ALTER TABLE `admin_category_info`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `admin_info`
--
ALTER TABLE `admin_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD KEY `FKadmin_info244882` (`cat_id`);

--
-- Indexes for table `applied_for_job_info`
--
ALTER TABLE `applied_for_job_info`
  ADD PRIMARY KEY (`post_by`,`post_id`,`applied_id`,`job_type`),
  ADD KEY `FKapplied_fo105365` (`post_by`),
  ADD KEY `FKapplied_fo728563` (`applied_by`),
  ADD KEY `FKapplied_fo983777` (`job_type`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`user_id`,`b_id`),
  ADD KEY `FKblog45640` (`user_id`);

--
-- Indexes for table `comment_info`
--
ALTER TABLE `comment_info`
  ADD PRIMARY KEY (`comment_by`,`comment_id`,`post_by`,`post_id`,`post_type`),
  ADD KEY `FKcomment_in854696` (`post_type`),
  ADD KEY `FKcomment_in513146` (`comment_by`),
  ADD KEY `FKcomment_in850480` (`post_by`);

--
-- Indexes for table `dataset_info`
--
ALTER TABLE `dataset_info`
  ADD PRIMARY KEY (`user_id`,`d_id`),
  ADD KEY `FKdataset_in760861` (`user_id`);

--
-- Indexes for table `job_info`
--
ALTER TABLE `job_info`
  ADD PRIMARY KEY (`user_id`,`j_id`),
  ADD KEY `FKjob_info521082` (`user_id`),
  ADD KEY `FKjob_info647337` (`job_type`),
  ADD KEY `FKjob_info534010` (`dp_id`);

--
-- Indexes for table `job_type_info`
--
ALTER TABLE `job_type_info`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`sender_id`,`reciever_id`,`post_time`),
  ADD KEY `FKmsg640674` (`sender_id`),
  ADD KEY `FKmsg841633` (`reciever_id`);

--
-- Indexes for table `msg_creation_info`
--
ALTER TABLE `msg_creation_info`
  ADD PRIMARY KEY (`user_id`,`created_with_id`),
  ADD KEY `FKmsg_creati464128` (`user_id`),
  ADD KEY `FKmsg_creati889039` (`created_with_id`);

--
-- Indexes for table `org_circular_info`
--
ALTER TABLE `org_circular_info`
  ADD PRIMARY KEY (`user_id`,`o_id`),
  ADD KEY `FKorg_circul237544` (`user_id`),
  ADD KEY `FKorg_circul565626` (`job_type`),
  ADD KEY `FKorg_circul216078` (`recruit_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`user_id`,`p_id`),
  ADD KEY `FKportfolio709692` (`user_id`);

--
-- Indexes for table `post_type_info`
--
ALTER TABLE `post_type_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `type` (`type`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FKsocial_lin52186` (`user_id`);

--
-- Indexes for table `trans_history`
--
ALTER TABLE `trans_history`
  ADD PRIMARY KEY (`sender_id`,`reciever_id`,`t_id`),
  ADD KEY `FKtrans_hist856287` (`sender_id`),
  ADD KEY `FKtrans_hist338596` (`reciever_id`);

--
-- Indexes for table `tran_history_admin`
--
ALTER TABLE `tran_history_admin`
  ADD PRIMARY KEY (`user_id`,`t_id`),
  ADD KEY `FKtran_histo459458` (`user_id`),
  ADD KEY `FKtran_histo710570` (`admin_id`);

--
-- Indexes for table `user_category_info`
--
ALTER TABLE `user_category_info`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user_contact`
--
ALTER TABLE `user_contact`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FKuser_conta107756` (`user_id`);

--
-- Indexes for table `user_education`
--
ALTER TABLE `user_education`
  ADD PRIMARY KEY (`user_id`,`edu_id`),
  ADD KEY `FKuser_educa261891` (`user_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FKuser_info867895` (`user_id`);

--
-- Indexes for table `user_interest_info`
--
ALTER TABLE `user_interest_info`
  ADD PRIMARY KEY (`user_id`,`i_id`),
  ADD KEY `FKuser_inter979519` (`user_id`);

--
-- Indexes for table `user_login_info`
--
ALTER TABLE `user_login_info`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD KEY `FKuser_login863102` (`user_category`);

--
-- Indexes for table `user_rating`
--
ALTER TABLE `user_rating`
  ADD KEY `FKuser_ratin223840` (`user_id`);

--
-- Indexes for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD PRIMARY KEY (`user_id`,`s_id`),
  ADD KEY `FKuser_skill684309` (`user_id`);

--
-- Indexes for table `user_work_experience`
--
ALTER TABLE `user_work_experience`
  ADD PRIMARY KEY (`user_id`,`w_id`),
  ADD KEY `FKuser_work_471851` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_category_info`
--
ALTER TABLE `admin_category_info`
  MODIFY `cat_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin_info`
--
ALTER TABLE `admin_info`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_type_info`
--
ALTER TABLE `job_type_info`
  MODIFY `type_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `post_type_info`
--
ALTER TABLE `post_type_info`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_category_info`
--
ALTER TABLE `user_category_info`
  MODIFY `cat_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_login_info`
--
ALTER TABLE `user_login_info`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin_info`
--
ALTER TABLE `admin_info`
  ADD CONSTRAINT `FKadmin_info244882` FOREIGN KEY (`cat_id`) REFERENCES `admin_category_info` (`cat_id`) ON DELETE CASCADE;

--
-- Constraints for table `applied_for_job_info`
--
ALTER TABLE `applied_for_job_info`
  ADD CONSTRAINT `FKapplied_fo105365` FOREIGN KEY (`post_by`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKapplied_fo728563` FOREIGN KEY (`applied_by`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKapplied_fo983777` FOREIGN KEY (`job_type`) REFERENCES `job_type_info` (`type_id`) ON DELETE CASCADE;

--
-- Constraints for table `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `FKblog45640` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_info`
--
ALTER TABLE `comment_info`
  ADD CONSTRAINT `FKcomment_in513146` FOREIGN KEY (`comment_by`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKcomment_in850480` FOREIGN KEY (`post_by`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKcomment_in854696` FOREIGN KEY (`post_type`) REFERENCES `post_type_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `dataset_info`
--
ALTER TABLE `dataset_info`
  ADD CONSTRAINT `FKdataset_in760861` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `job_info`
--
ALTER TABLE `job_info`
  ADD CONSTRAINT `FKjob_info521082` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKjob_info534010` FOREIGN KEY (`dp_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKjob_info647337` FOREIGN KEY (`job_type`) REFERENCES `job_type_info` (`type_id`) ON DELETE CASCADE;

--
-- Constraints for table `msg`
--
ALTER TABLE `msg`
  ADD CONSTRAINT `FKmsg640674` FOREIGN KEY (`sender_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKmsg841633` FOREIGN KEY (`reciever_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `msg_creation_info`
--
ALTER TABLE `msg_creation_info`
  ADD CONSTRAINT `FKmsg_creati464128` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKmsg_creati889039` FOREIGN KEY (`created_with_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `org_circular_info`
--
ALTER TABLE `org_circular_info`
  ADD CONSTRAINT `FKorg_circul216078` FOREIGN KEY (`recruit_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKorg_circul237544` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKorg_circul565626` FOREIGN KEY (`job_type`) REFERENCES `job_type_info` (`type_id`) ON DELETE CASCADE;

--
-- Constraints for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `FKportfolio709692` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `social_links`
--
ALTER TABLE `social_links`
  ADD CONSTRAINT `FKsocial_lin52186` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `trans_history`
--
ALTER TABLE `trans_history`
  ADD CONSTRAINT `FKtrans_hist338596` FOREIGN KEY (`reciever_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKtrans_hist856287` FOREIGN KEY (`sender_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `tran_history_admin`
--
ALTER TABLE `tran_history_admin`
  ADD CONSTRAINT `FKtran_histo459458` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKtran_histo710570` FOREIGN KEY (`admin_id`) REFERENCES `admin_info` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_contact`
--
ALTER TABLE `user_contact`
  ADD CONSTRAINT `FKuser_conta107756` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_education`
--
ALTER TABLE `user_education`
  ADD CONSTRAINT `FKuser_educa261891` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `FKuser_info867895` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_interest_info`
--
ALTER TABLE `user_interest_info`
  ADD CONSTRAINT `FKuser_inter979519` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_login_info`
--
ALTER TABLE `user_login_info`
  ADD CONSTRAINT `FKuser_login863102` FOREIGN KEY (`user_category`) REFERENCES `user_category_info` (`cat_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_rating`
--
ALTER TABLE `user_rating`
  ADD CONSTRAINT `FKuser_ratin223840` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD CONSTRAINT `FKuser_skill684309` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `user_work_experience`
--
ALTER TABLE `user_work_experience`
  ADD CONSTRAINT `FKuser_work_471851` FOREIGN KEY (`user_id`) REFERENCES `user_login_info` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
