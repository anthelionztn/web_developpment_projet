-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 03 月 04 日 11:47
-- 服务器版本: 5.5.41
-- PHP 版本: 5.3.10-1ubuntu3.16

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `dazibao`
--

-- --------------------------------------------------------

--
-- 表的结构 `dazibao`
--

CREATE TABLE IF NOT EXISTS `dazibao` (
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `dazibao`
--

INSERT INTO `dazibao` (`message`) VALUES
('1a'),
('2b'),
('3c'),
('4d'),
('5e'),
('6f'),
('hello world!'),
('Have a good time!'),
('Set this black nights ablaze.'),
('On these lofty mountaintops.'),
('Extend your arms of flame.'),
('Embrace night''s board bosom.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
