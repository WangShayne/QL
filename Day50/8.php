<?php 
	/*返回验证结果*/
	header('Content-Type:text/plain');
	$uname=$_REQUEST['uname'];
	$nameList=['tom','dog','mary','王帅','达内'];
	$result=in_Array($uname,$nameList);
	if($result){
		echo 'exists';
	}else{
		echo 'non-exists';
	}
?>