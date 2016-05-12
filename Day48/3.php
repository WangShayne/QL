<?php 
	$uname=$_REQUEST['uname'];
	//$upwd=$_REQUEST['upwd'];
	//$sql="SELECT uid,uname,upwd,ubirthday FROM users WHERE uname='$uname'";AND upwd='$upwd'
	$sql="SELECT uid FROM users WHERE uname='$uname' ";
	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	//返回的查询结果有记录,则说明用户名和密码一样都正确,若返回的是空集合,则说明用户名或密码错误
	$row=mysqli_fetch_assoc($result); 
	//if($row['upwd']===$upwd){
	if($row!=NULL){
		echo "exists";
	}
	else{
		echo "non-exists";
	}
?>
