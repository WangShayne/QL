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
  <h1>php语法之变量和常量  运算</h1>
  <?php
	//定义常量
	const PI=3.14; //PHP 5.4+
	echo PI;

	define('E',2.71828); //PHP5.3-
	echo E;
	
	$ename="tom";
	//$msg='姓名:$ename';
	//$msg="姓名:$ename";
	//$msg="姓名:$ename 年龄:20"; //双引号可以拼接变量
	//$msg="姓名:"+$ename;	 //php中的加法只做算数运算
	$msg='姓名:'.$ename;
	echo $msg;

  ?>
</body>
</html>
