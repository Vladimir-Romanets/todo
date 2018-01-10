-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "newTasks" ---------------------------------
-- CREATE TABLE "newTasks" -------------------------------------
CREATE TABLE `newTasks` ( 
	`id` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`user_id` Int( 50 ) NOT NULL,
	`title` Char( 100 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`description` Char( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "users" ------------------------------------
-- CREATE TABLE "users" ----------------------------------------
CREATE TABLE `users` ( 
	`id` Int( 50 ) AUTO_INCREMENT NOT NULL,
	`username` VarChar( 30 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`password` VarChar( 50 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY ( `id` ),
	CONSTRAINT `unique_id` UNIQUE( `id` ),
	CONSTRAINT `unique_username` UNIQUE( `username` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 3;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "completedTasks" ---------------------------
-- CREATE TABLE "completedTasks" -------------------------------
CREATE TABLE `completedTasks` ( 
	`id` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`user_id` Int( 50 ) NOT NULL,
	`title` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`description` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "inprogressTasks" --------------------------
-- CREATE TABLE "inprogressTasks" ------------------------------
CREATE TABLE `inprogressTasks` ( 
	`id` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`user_id` Int( 50 ) NOT NULL,
	`title` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	`description` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- Dump data of "newTasks" ---------------------------------
INSERT INTO `newTasks`(`id`,`user_id`,`title`,`description`) VALUES ( '3', '2', 'qwerty1983', 'Big description' );
INSERT INTO `newTasks`(`id`,`user_id`,`title`,`description`) VALUES ( '4', '2', 'title 3', 'dsfsdr dfhdgfhgfdhgf h' );
-- ---------------------------------------------------------


-- Dump data of "users" ------------------------------------
INSERT INTO `users`(`id`,`username`,`password`) VALUES ( '1', 'admin', 'admin' );
INSERT INTO `users`(`id`,`username`,`password`) VALUES ( '2', 'vova', 'test' );
-- ---------------------------------------------------------


-- Dump data of "completedTasks" ---------------------------
INSERT INTO `completedTasks`(`id`,`user_id`,`title`,`description`) VALUES ( '1', '2', 'VUE ', 'sdf  sdfsd f' );
-- ---------------------------------------------------------


-- Dump data of "inprogressTasks" --------------------------
INSERT INTO `inprogressTasks`(`id`,`user_id`,`title`,`description`) VALUES ( '5', '2', 'qwerty43', 'weref r gdfg' );
-- ---------------------------------------------------------


-- CREATE INDEX "lnk_newTasks_users" -----------------------
-- CREATE INDEX "lnk_newTasks_users" ---------------------------
CREATE INDEX `lnk_newTasks_users` USING BTREE ON `newTasks`( `user_id` );
-- -------------------------------------------------------------
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


