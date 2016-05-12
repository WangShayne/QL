<?php 
	$pid=$_REQUEST['Pid'];
	$sql="DELETE FROM emp WHERE Pid='$pid'";
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	$result=mysqli_query($conn,$sql);
	if($result){
		$eno=mysqli_insert_id($conn);
		echo "<h3>成功删除编号为:$eno 的员工信息</h3>";
	}
	else{
		echo "<h3>删除失败</h3>";
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
