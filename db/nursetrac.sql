-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 20, 2017 at 01:49 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
<<<<<<< HEAD

=======
CREATE DATABASE nursetrac;

USE nursetrac;
>>>>>>> 09e03c23c2fdde9321a19beabbbb85f314f749d1
--
-- Database: `nursetrac`
--

-- --------------------------------------------------------

--
-- Table structure for table `Course`
--

CREATE TABLE `Course` (
  `Course_Name` int(11) NOT NULL,
  `Course_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Course_Registered`
--

CREATE TABLE `Course_Registered` (
  `Course_ID` int(11) NOT NULL,
  `email` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ESSENTIAL`
--

CREATE TABLE `ESSENTIAL` (
  `EID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ESSENTIAL`
--

INSERT INTO `ESSENTIAL` (`EID`, `Name`) VALUES
(1, 'Background for Practice.'),
(2, 'Organizational and Systems Leadership.'),
(3, 'Quality Improvement and Safety.'),
(4, 'Translating and Integrating Scholarship into Practice.'),
(5, 'Informatics and Healthcare Technologies.'),
(6, 'Health Policy and Advocacy.'),
(7, 'Interprofessional Collaboration for Improving Patient and Population Health Outcomes.'),
(8, 'Clinical Prevention and Population Health for Improving Health.'),
(9, 'Master\'s-Level Nursing Practice');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `FName` varchar(32) NOT NULL,
  `LName` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` text NOT NULL,
  `Contact_Number` double NOT NULL,
  `TIMESTAMP` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`FName`, `LName`, `email`, `password`, `Contact_Number`, `TIMESTAMP`) VALUES
('Hoshang', 'Charania', 'hok14@pitt.edu', 'test', 1234, '0000-00-00 00:00:00'),
('test', 'test', 'test', 'test', 0, '2017-12-18 17:46:34');

-- --------------------------------------------------------

--
-- Table structure for table `Target`
--

CREATE TABLE `Target` (
  `ID` int(11) NOT NULL,
  `Name` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Target`
--

INSERT INTO `Target` (`ID`, `Name`) VALUES
(1, 'Interview a member of quality improvement department.'),
(2, 'Meet with member of risk management team.'),
(3, 'Review quality reports and metrics.'),
(4, 'Evaluate your competence with informatics.'),
(5, 'Speak with nurse informaticist, system analyst, or IT department regarding reports.'),
(6, 'Identify types of clinical decision support (CDS).'),
(7, 'Conduct a journal club to critically appraise the research evidence.'),
(8, 'Meet with nursing leadership to write an EBP vision statement.'),
(9, 'Meet with nursing leadership to discuss practice issues.'),
(10, 'Meet with nursing administrators to identify barriers to healthy follow-up care.'),
(11, 'Develop a communication plan that addresses the needs of key stakeholders in relation to the CNL role.'),
(12, 'Attend a new employee orientation session with senior leadership focusing on mission, values, and expectations from staff.'),
(13, 'Analyze data and infection control principles in collaboration with the with the infectious disease coordinator.'),
(14, 'Review preparedness plans with the disaster management team.'),
(15, 'Conduct a microsystem analysis using a quality improvement process.'),
(16, 'Assess human and physical resource, perform a gap analysis, and communicate needs to stakeholders.'),
(17, 'Identify a gap in care for at-risk population, compare existing to best practices, lead a practice change, and evaluate the impact.'),
(18, 'Present recommendations for change to appropriate audiences.'),
(19, 'Communicate ideas regarding a practice issue or proposed policy change in an informal setting.'),
(20, 'Use patient information system data, assess data, design and implement a change in patient care.'),
(21, 'Evaluate practices and outcomes of care for potential cost savings; Use graphics to present idea to interdisciplinary team.'),
(22, 'Conduct an assessment of a patient cohort with complex health problems, identify needs, and develop plans to improve patient outcomes.'),
(23, 'Conduct a health education class for a patient or staff cohort and evaluate the class.');

-- --------------------------------------------------------

--
-- Table structure for table `Task`
--

CREATE TABLE `Task` (
  `ID` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `TargetID` int(11) NOT NULL,
  `Hours` float NOT NULL,
  `Explanation` longtext NOT NULL,
  `TDate` date NOT NULL,
  `EssentialID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Task`
--

INSERT INTO `Task` (`ID`, `email`, `TargetID`, `Hours`, `Explanation`, `TDate`, `EssentialID`) VALUES
(27, 'hok14@pitt.edu', 1, 4, 'test', '2017-12-26', 3),
(28, 'hok14@pitt.edu', 1, 4, 'test', '2017-12-26', 3),
(29, 'hok14@pitt.edu', 1, 4, 'test', '2017-12-24', 3),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`Course_ID`);

--
-- Indexes for table `Course_Registered`
--
ALTER TABLE `Course_Registered`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `ESSENTIAL`
--
ALTER TABLE `ESSENTIAL`
  ADD PRIMARY KEY (`EID`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `Target`
--
ALTER TABLE `Target`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Task`
--
ALTER TABLE `Task`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `EssentialID` (`EssentialID`),
  ADD KEY `email` (`email`),
  ADD KEY `TargetID` (`TargetID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Target`
--
ALTER TABLE `Target`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `Task`
--
ALTER TABLE `Task`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Task`
--
ALTER TABLE `Task`
  ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`EssentialID`) REFERENCES `ESSENTIAL` (`EID`),
  ADD CONSTRAINT `task_ibfk_4` FOREIGN KEY (`email`) REFERENCES `login` (`email`),
  ADD CONSTRAINT `task_ibfk_5` FOREIGN KEY (`TargetID`) REFERENCES `Target` (`ID`);
