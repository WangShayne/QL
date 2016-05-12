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
	<h3>遍历数组</h3>
	<?php 
		$arr1=[10,30,50];
		foreach($arr1 as $k=>$v){
			echo "$k=>$v";
		}
		//关联数组只能用foreach遍历.
		$arr2=['ename'=>'tom','sex'=>'男','age'=>30];
		foreach($arr2 as $p=>$v){
			echo "$p=>$v";
		}
		
	?>
</body>
</html>
