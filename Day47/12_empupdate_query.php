<?php
	/**接收客户端要修改的员工的编号,查询出该员工的所有信息，输出在表单中，等待用户的修改**/
	$eno=$_REQUEST['eno'];
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT eno,name,gender,birthday,empDept FROM emp WHERE eno='$eno'";	
	$result=mysqli_query($conn,$sql);
	$emp=mysqli_fetch_assoc($result);
	var_dump($emp);
?>
<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>
  <meta charset="utf-8">
 </head>
 <body>
  <h1>修改员工信息</h1>
	<form action="12_empupdate.php">
		<input type="hidden" name='eno' value="<?php echo $emp['eno'] ?>">
		姓名：<input type="text" name="name" value="<?php echo $emp['name'] ?>"><br>
		性别：<input type="radio" name="gender" value="男" <?php echo $emp['gender']==='男'? 'checked':' ';?>>男
				<input type="radio" name="gender" value="女" <?php echo $emp['gender']==='女'? 'checked':' ';?>>女<br>
		生日：<input type="text" name="birthday" value="<?php echo $emp['birthday'] ?>"><br>
		部门：<input type="text" name="empDept" value="<?php echo $emp['empDept'] ?>"><br>

		<input type="submit" value="保存修改">
	</form>

 </body>
</html>