##���߷���������SQL������õı��뷽ʽ
SET NAMES GBK;
##ɾ��һ��jd���ݿ�(������ڵĻ�)
DROP DATABASE IF EXISTS jd;
##����һ��jd���ݿ⣬ָ�����б�����������õı���
CREATE DATABASE jd CHARSET=GBK;
##����ոմ��������ݿ�
USE jd;
##����һ��������Ϣ�ı� dept�����沿�ű�š��������ơ����ڵ�
CREATE TABLE dept(
UID INT PRIMARY KEY,
UNAME VARCHAR(64),
ADRESS VARCHAR(64)
);		
##���ű��в������м�¼���ֱ��ǡ��з����������г�����������Ӫ����
INSERT INTO dept VALUES(001,'�з���','����');
INSERT INTO dept VALUES(002,'�г���','�Ͼ�');
INSERT INTO dept VALUES(003,'��Ӫ��','�ձ�');


##����һ��Ա����Ϣ�ı� emp������Ա����š��������Ա����ա����ʡ����ڲ��ŵ���Ϣ��		
CREATE TABLE emp(
Pid INT PRIMARY KEY,
Name VARCHAR(64),
Xingbie VARCHAR(64),
Birthday DATE,
Salary FLOAT,
Department VARCHAR(64)
);
##��Ա�����в������м�¼
INSERT INTO emp VALUES(001,'����','��','2015-8-7',5000000,'�з���');
INSERT INTO emp VALUES(002,'����','��','2015-11-1',1000000,'��Ӫ��');
INSERT INTO emp VALUES(003,'��ʤ��','Ů','2015-12-31',530000,'�г���');
INSERT INTO emp VALUES(004,'���仨','Ů','2015-1-2',51230000,'�г���');
INSERT INTO emp VALUES(005,'Ľ�ݹ���','��','2015-3-13',12.1215,'�з���');

##��ѯ�������е����м�¼��   
SELECT UID,UNAME,ADRESS FROM dept;
SELECT Pid,Name,Xingbie,Birthday,Salary,Department FROM emp; 
##��ѯ�з���������Ա����Ϣ 
SELECT Pid,Name,Xingbie,Birthday,Salary,Department 
FROM emp 
WHERE Department='�з���';
