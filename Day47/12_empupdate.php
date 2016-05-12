<?php
	$eno=$_REQUEST['eno'];
	$name=$_REQUEST['name'];
	$gender=$_REQUEST['gender'];
	$birthday=$_REQUEST['birthday'];
	$empDept=$_REQUEST['empDept'];
	$sql="UPDATE emp SET name='$name',gender='$gender',birthday='$birthday',empDept='$empDept' WHERE eno='$eno'";
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);

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
		<h1>员工信息修改操作的结果</h1>
		<?php 
				if($result){
				echo "	<h3>修改成功</h3>";
				}else{
				echo "<h3>修改失败</h3>";
				}
			echo "<button><a href='1.php'>查看员工列表</a></button>";
		?>
	
</body>
</html>
