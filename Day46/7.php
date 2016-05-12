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
	<h1>基础数据类型</h1>
	<?php 
		$arr=[50,60,80,100];
		echo $arr[3];
		echo count($arr);
		for($i=0;$i<count($arr);$i++){
			echo '<ul>';
			echo '<li>'.$arr[$i].'</li>';
			echo '</ul>';
		}
		//创建一个表示工资的数组,用for输出在一个ol列表中
		$salary=[1000,2000,3000,5000,5500];
		echo "<ol>";
		for($r=0;$r<count($salary);$r++){
			echo "<li>$salary[$r]</li>";
		};
		echo"</ol>";
	
		/*索引数组*/
		$arr1=[1,2,45,5,3];
		//向索引数组添加新元素
		$arr1[5]=70;
		$arr1[count($arr1)]=91;
		$arr[]=1001;
		var_dump($arr1);
		/*关联数组*/
		$arr2=['ename'=>'mary','sex'=>'男','age'=>19,'female'=>false];
		$arr3=['ename'=>'emma','sex'=>'女','age'=>19,'female'=>true];
		echo	'<br>';
		echo $arr2['ename'];
		echo	'<br>';
		echo $arr3['sex'];
		echo	'<br>';
		var_dump($arr3);
		echo	'<br>';
		echo "姓名:$arr3[ename],性别:$arr3[sex],年龄:$arr3[age]";
		echo	'<br>';echo	'<br>';echo	'<br>';echo	'<br>';echo	'<br>';

		//练习:先创建一个空数组;
		//往数组中保存多个商品的信息
		//每个商品包含编号/名称/价格/生产日期及个属性
		//在一个HTML TABLE元素中输出上述数组
		$product=[];
		$product[]=['id'=>1,'name'=>'可口可乐','price'=>3.5,'birthday'=>2222238000200];
		$product[]=['id'=>2,'name'=>'百事可乐','price'=>5.5,'birthday'=>3333331888810];
		$product[]=['id'=>3,'name'=>'非常可乐','price'=>1.5,'birthday'=>11121228121300];
		var_dump($product);
		echo "<table border='1' width='100%'>";
		echo "<tbody>";
		for ($i=0;$i<count($product);$i++){
			$p=$product[$i];
			echo  "<tr>";
			echo "<td>$p[id]</td>";
			echo "<td>$p[name]</td>";
			echo "<td>$p[price]</td>";
			echo "<td>$p[birthday]</td>";
			echo "</tr>";
		};
		echo "</tbody>";
		echo "</table>";
	?>
</body>
</html>
