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
	<h1>我的第一个php网页</h1>
	<h3>PHP网页=HTML+PHP</h3>
	<?php 
		//所有的PHP变量都必须以$开头
		//$变量名=值
		$num=20;
		$num++;
		//echo $num; //语句都以;结尾
		for($i=0;$i<10;$i++){
			echo $num;
			echo '<hr>';
		}
	?>
</body>
</html>
