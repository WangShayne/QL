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
	    <h1>9*9乘法表</h1>
		<?php 
			for($r=1;$r<10;$r++){
				for($i=1;$i<=$r;$i++){
					echo $r.'*'.$i.'='.$r*$i.'&nbsp;&nbsp;';
					if($r==$i){
						echo '<br>';
					};
				};
			};
		?>
</body>
</html>
