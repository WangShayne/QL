<?php
	header("Content-Type:text/plain");
	/*接受客户端提交的姓名 语文 数学成绩 保存在数据库中*/
	$stuName=$_REQUEST['stuName'];
	$chinese=$_REQUEST['chinese'];
	$math=$_REQUEST['math'];
	//连接数据库 提交insert语句
	//假装此时已经提交完成
	//$sno=mysqli_insert_id($conn);
	$sno=rand(1000,10000);
	echo "新记录在系统中的编号为:$sno";
	echo "姓名:$stuName";
	echo "语文:$chinese";
	echo "数学:$math";
?>