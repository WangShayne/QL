<?php 
	$eno=$_REQUEST['eno'];
	$sql="DELETE FROM emp WHERE eno='$eno'";
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	$result=mysqli_query($conn,$sql);
	if($result){
		$num=mysqli_affected_rows($conn);
		if($num>0){
			echo "<h3>成功删除的员工信息</h3>";
		}
		else{
			echo "<h3>操作完成,制定的记录在数据库中压根就没有</h3>";
		};
	}
	else{
		echo "<h3>删除失败</h3>";
	};
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
	<button><a href='1.php'>查看员工列表</a></button>
</body>
</html>
