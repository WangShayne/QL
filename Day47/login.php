<?php 
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$sql="SELECT uid,uname,upwd,ubirthday FROM users WHERE uname='$uname'";
	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	var_dump($row);
	if($row['upwd']===$upwd){
		echo "<h3>O(∩_∩)O~~登陆成功~~";
	}
	else{
		echo "<h3>/(ㄒoㄒ)/~~登陆失败~~";
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
