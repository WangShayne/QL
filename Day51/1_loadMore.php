<?php
	header('Content-Type:application/json');
	sleep(1);
	$ready=$_REQUEST['row'];
//	$more=$_REQUEST['more'];
	$sql="SELECT * FROM emp";
	$conn=mysqli_connect('127.0.0.1','root','','tarena',3306);
	mysqli_query($conn,"SET NAMES utf8");
	$result=mysqli_query($conn,$sql);
	$readyList=[];
	while(($row=mysqli_fetch_assoc($result))!=NULL){
		$readyList[]=$row;
	};
	$arr=[];
	$length;
	if(($ready+4)>count($readyList)){
			$length=count($readyList);
	}else{
			$length=$ready+4; 
	}
	for($i=0;$i<$length;$i++){
			$arr[]=$readyList[$i];
	};
	$readyJson=json_encode($arr);
	echo($readyJson);
?>