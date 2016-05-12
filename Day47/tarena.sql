##(1)创建一个.sql文件，编写下述要求需要的SQL语句
##删除并重新创建一个数据库-tarena，进入该数据库；
##创建一个存储用户信息的表-users，保存用户编号、用户名、密码、邮箱、生日等信息；
##把上述.sql文件中的命令提交给MySQL服务器执行。

SET NAMES UTF8;
DROP DATABASE IF EXISTS tarena;
CREATE DATABASE tarena CHARSET=UTF8;
USE tarena;
CREATE TABLE users(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(64),
	upwd VARCHAR(32),
	umail VARCHAR(32),
	ubirthday LONG
);
