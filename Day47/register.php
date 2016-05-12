<?php 
	//接受注册数据 添加到服务器
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$umail=$_REQUEST['umail'];
	$ubirthday=$_REQUEST['ubirthday'];
	$sql="INSERT INTO users VALUES(NULL,'$uname','$upwd','$umail','$ubirthday');";
	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	if($result){
		echo "<h3>O(∩_∩)O~~注册成功~<h3>";
	}
	else{
		echo "<h3>/(ㄒoㄒ)/~~注册失败</h3>";
	}
	
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="Generator" content="EditPlus®">
	<meta name="Author" content="">
	<meta name="Keywords" content="">
	<meta name="Description" content="">
	<title>Document</title>
</head>

<body>
  
</body>
</html>
