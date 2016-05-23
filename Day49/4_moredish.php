<?php 
	/**向客户端返回更多的菜品数据,以xml字符串格式**/
	header('Content-Type:text/xml');
	$arr=[
		['dno'=>101,'name'=>'鱼香肉丝','price'=>20,'img'=>'img/1.jpg'],
		['dno'=>102,'name'=>'京酱肉丝','price'=>25,'img'=>'img/2.jpg'],
		['dno'=>103,'name'=>'青椒肉丝','price'=>18,'img'=>'img/3.jpg'],
	];
	//echo $arr;   语法错误!数组不能输出给客户端
	$xmlString='<?xml version="1.0" encoding="UTF-8"?>';
	$xmlString .='<dishList>';
	foreach($arr as $d){
		$xmlString .="<dish dno='$d[dno]'>";
		$xmlString .="<name>$d[name]</name>";
		$xmlString .="<price>$d[price]</price>";
		$xmlString .="<img>$d[img]</img>";
		$xmlString .='</dish>';
	}
	$xmlString .='</dishList>';
	echo $xmlString;
?>