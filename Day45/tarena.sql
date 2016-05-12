/* 多行注释:SQL-Structured Query Language
 是一种特殊的语言,专用于操作关系类型数据服务器中的
 所有的SQL语句分为四类
  1.DDL
  2.DQL
  3.DML
  4.DCL
*/

##单行注释,注意//不表示单行注释

/* .sql文件执行方法
	1.使用MySql客户端软件登录MySQL服务器
	2.使用命令:source e:/xxx/yy.sql
	~!!提示:source命令后面不能有;号!!
*/
/*SQL语法要求
1.所有的语句都必须以;结尾!!!
2.不区分大小写.习惯上,关键字都大写,非关键字都用小写
*/

##SHOW DATABASES;
##show databases;
##Show DataBases;

##告诉服务器下述SQL语句所用的编码方式
SET NAMES UTF8;

##试着删除一个数据库(如果存在的话)
DROP DATABASE IF EXISTS tarena;

##创建一个数据库,指定其中保存的数据所用的编码
CREATE DATABASE tarena CHARSET=UTF8;

##进入刚刚创建的数据库
USE tarena;

##创建一个保存商品信息的表  PRIMARY KEY,设定主键值
CREATE TABLE product(
	pid INT PRIMARY KEY,
	name VARCHAR(64),
	price FLOAT(6,2),
	birthday DATE
);

##向表中插入记录行 字符串和日期都必须用 '  ' 括起来
INSERT INTO product VALUES(101, '可口可乐600ml装' , 3.5 , '2016-5-7' );
INSERT INTO product VALUES(103, '百事可乐600ml装' , 4.5 , '2012-6-11' );
INSERT INTO product VALUES(108, '非常可乐600ml装' , 2.5 , '2020-10-11' );
INSERT INTO product VALUES(103, '暗黑可乐600ml装' , 5.5 , '2000-10-11' );


##修改某一行的记录
UPDATE product SET name='可口可乐550ml装',price=1.9
WHERE pid=101;

##删除一行记录 
DELETE FROM product 
WHERE pid=108;

##查询表中的记录行
SELECT pid,name,price,birthday FROM product;

##查询某一行数据 WHERE 满足xx条件
SELECT pid,name,price,birthday
FROM product
WHERE pid=103;
