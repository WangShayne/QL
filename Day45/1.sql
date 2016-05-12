##告诉服务器下述SQL语句所用的编码方式
SET NAMES GBK;
##删除一个jd数据库(如果存在的话)
DROP DATABASE IF EXISTS jd;
##创建一个jd数据库，指定其中保存的数据所用的编码
CREATE DATABASE jd CHARSET=GBK;
##进入刚刚创建的数据库
USE jd;
##创建一个部门信息的表： dept，保存部门编号、部门名称、所在地
CREATE TABLE dept(
UID INT PRIMARY KEY,
UNAME VARCHAR(64),
ADRESS VARCHAR(64)
);		
##向部门表中插入三行记录，分别是“研发部”、“市场部”、“运营部”
INSERT INTO dept VALUES(001,'研发部','北京');
INSERT INTO dept VALUES(002,'市场部','南京');
INSERT INTO dept VALUES(003,'运营部','日本');


##创建一个员工信息的表： emp，保存员工编号、姓名、性别、生日、工资、所在部门等信息。		
CREATE TABLE emp(
Pid INT PRIMARY KEY,
Name VARCHAR(64),
Xingbie VARCHAR(64),
Birthday DATE,
Salary FLOAT,
Department VARCHAR(64)
);
##向员工表中插入五行记录
INSERT INTO emp VALUES(001,'张三','男','2015-8-7',5000000,'研发部');
INSERT INTO emp VALUES(002,'李四','男','2015-11-1',1000000,'运营部');
INSERT INTO emp VALUES(003,'樊胜美','女','2015-12-31',530000,'市场部');
INSERT INTO emp VALUES(004,'诸葛翠花','女','2015-1-2',51230000,'市场部');
INSERT INTO emp VALUES(005,'慕容狗蛋','男','2015-3-13',12.1215,'研发部');

##查询两个表中的所有记录行   
SELECT UID,UNAME,ADRESS FROM dept;
SELECT Pid,Name,Xingbie,Birthday,Salary,Department FROM emp; 
##查询研发部的所有员工信息 
SELECT Pid,Name,Xingbie,Birthday,Salary,Department 
FROM emp 
WHERE Department='研发部';
