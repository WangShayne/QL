##���ñ������� 
SET NAMES gbk;
##ɾ�����е�tarena��
DROP DATABASE IF EXISTS tarena;
##�����µ�tarena��
CREATE DATABASE tarena CHARSET=gbk;
##ʹ��tarena��
USE tarena;
##����Ա���б�,����Ա�����,Ա������,�Ա�,����,����
CREATE TABLE emp(
	eno INT PRIMARY KEY AUTO_INCREMENT,
	ename VARCHAR(32),
	gender VARCHAR(32),
	birthday LONG,
	dept VARCHAR(32)
);
##���Ա��
INSERT INTO emp VALUES(NULL,"Tom","��",888892658855,"������");
INSERT INTO emp VALUES(NULL,"Mary","Ů",8888912238855,"��Ʋ�");
INSERT INTO emp VALUES(NULL,"��˧","��",888829658855,"���Ӳ�");
INSERT INTO emp VALUES(NULL,"Aaron","��",888829658855,"����");
INSERT INTO emp VALUES(NULL,"Adolph","��",888839658855,"�з���");
INSERT INTO emp VALUES(NULL,"Jack","��",88889658855,"�з���");
INSERT INTO emp VALUES(NULL,"Justin","��",888892658855,"������");
INSERT INTO emp VALUES(NULL,"Otto","��",888896258855,"����");
INSERT INTO emp VALUES(NULL,"Anna","��",888893658855,"���鲿");
INSERT INTO emp VALUES(NULL,"Ted","��",888896548855,"������");
INSERT INTO emp VALUES(NULL,"Tyler","��",888896558855,"������");
INSERT INTO emp VALUES(NULL,"Ulysses","��",888859658855,"������");
INSERT INTO emp VALUES(NULL,"Wayne","��",888896658855,"������");
INSERT INTO emp VALUES(NULL,"Will","��",888896758855,"������");
INSERT INTO emp VALUES(NULL,"Wordsworth","��",888889658855,"�з���");
INSERT INTO emp VALUES(NULL,"Zebulon","��",888869658855,"��Ʋ�");
INSERT INTO emp VALUES(NULL,"Betty","Ů",888896588855,"�з���");
INSERT INTO emp VALUES(NULL,"Blanche","Ů",88896548855,"������");
INSERT INTO emp VALUES(NULL,"Beatrice","Ů",8888967858855,"������");
INSERT INTO emp VALUES(NULL,"Ella","Ů",888896588455,"������");
INSERT INTO emp VALUES(NULL,"Dolores","Ů",888896538855,"������");
INSERT INTO emp VALUES(NULL,"Genevieve","Ů",888894658855,"��Ʋ�");
INSERT INTO emp VALUES(NULL,"Lorraine","Ů",888896528855,"�з���");
