<?php 
	/*向客户端返回更多的菜品数据,以JSON格式*/
	header('Content-Type:application/json');
	$output=[];
	//查询数据库
	//获得数据
	$num=rand(1000,10000);
	$output[]=['dno'=>$num,'name'=>'鱼香肉丝'.$num,'price'=>20,'img'=>'img/1.jpg'];
	$output[]=['dno'=>$num,'name'=>'京酱肉丝'.$num,'price'=>25,'img'=>'img/2.jpg'];
	$output[]=['dno'=>$num,'name'=>'青椒肉丝'.$num,'price'=>18,'img'=>'img/3.jpg'];
	$jsonString=json_encode($output);
	echo $jsonString;
?>