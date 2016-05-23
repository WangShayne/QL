<?php 
	header('Content-Type:application/json');
	/*返回json类型
		正确:{'status':1,'msg':'强东'}
		不正确:{'status':-404,'msg':'用户名或密码错误'}
	
	*/
	$output=['status'=>0,'msg'=>''];
	$uname=$_REQUEST['uname'];
	$upwd=$_REQUEST['upwd'];
	$sql="SELECT * FROM jd_users WHERE user_name='$uname' AND user_pwd='$upwd'";
	$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		$output['status']=intval($row['user_id']);
		$output['msg']=$uname;
	}else{
		$output['status']=-404;
		$output['msg']='用户名或密码错误';
	}
	echo json_encode($output);
?>