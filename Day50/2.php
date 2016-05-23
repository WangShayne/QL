<?php 
	/**PHP中的数组转换为json**/
	///////////PHP索引数组会被转换为JSON数组/////////////////
	$arr=[10,30,50];
	var_dump($arr);
	echo "<br>";
	$jsonString=json_encode($arr);
	var_dump($jsonString);
	echo "<br>";

	///////////PHP索引数组会被转换为JSON数组/////////////////
	$arr=['ename'=>'王帅','age'=>100];
	var_dump($arr);
	echo "<br>";
	$jsonString=json_encode($arr);
	var_dump($jsonString);
	echo "<br>";
?>