<?php 
	/*接收服务器数据,返回添加成功*/
	header('Content-Type:text/html');
	$uname=$_REQUEST['uname'];
	$chinese=$_REQUEST['chinese'];
	$math=$_REQUEST['math'];
	echo "<h4>添加成功<h4>";
	echo "<p>编号:".rand(10,1000)." 姓名:$uname 语文成绩:$chinese 数学成绩:$math</p>";
?>