<?php 
	//1.接受客户端提交的新员工的信息
	//使用php内置的数组,接受客户端提交的数据
	$n=$_REQUEST['Name'];
	$x=$_REQUEST['Xingbie'];
	$b=$_REQUEST['Birthday'];
	$e=$_REQUEST['empDept']; 
	$sql="INSERT INTO emp VALUES(NULL,'$n','$x','$b','5000','$e')";
	echo $sql;
	//使用PHP语句作为客户端连接到数据库服务器
	//2.把信息拼接为SQL语句,提交给数据库服务器执行
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	$result=mysqli_query($conn,$sql);//对于INSERT语句,执行成功返回true,执行失败返回false
	if($result){
		$eno=mysqli_insert_id($conn); //获得最近插入的编号 ,如果有的话
		echo "<h3>成功!</h3><br><p>新员工在数据库中的自增编号为:$eno</p>";
	}
	else{
		echo "<h3>失败</h3><br><p>可能原因:SQL语句错误!xxxxx</p>";
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
		<h1>添加员工操作的结果:</h1>

</body>
</html>
