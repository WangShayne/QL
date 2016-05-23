<?php 
	/**PHP中json格式的字符串解析为PHP的数组**/
	$jsonString1='[10,30,50,70]';
	var_dump($jsonString1);
	$result=json_decode($jsonString1); //json_decode 解析
	var_dump($result);
	echo "<br>";
	$jsonString="{'uname':'王帅','age':20}";
	var_dump($jsonString);
	echo "<br>";
	$arr=json_decode($jsonString);
	var_dump($arr);
	echo "<br>";

?>