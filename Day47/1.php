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
	<h1>员工列表</h1>
	<table  border='1' width="100%">
		<thead> 
			<tr>
				<th>编号</th>
				<th>姓名</th>
				<th>性别</th>
				<th>生日</th>
				<th>所在部门</th>
				<th>操作</th>
			</tr>
	</thead>
		<tbody>
			<?php 
			/*从数据库服务器中获取所有的员工记录*/
			$conn=mysqli_connect('127.0.0.1','root','','jd',3306);
			mysqli_query($conn,'SET NAMES UTF8');
			$sql="SELECT eno ,name,gender,birthday,empDept FROM emp";
			$result=mysqli_query($conn,$sql);
			//$row=mysqli_fetch_row($result);//抓取一行,把一行记录看做一个索引数组
			$empList=[	];
			while(true){
				$row=mysqli_fetch_assoc($result); //把一行记录做一个关联数组
				if($row==null){
							break;
				}
				else{
					$empList[]=$row;
				}
			};
			 for($i=0;$i<count($empList);$i++){
				$emp=$empList[$i];
				echo '<tr>';
				echo "<td>$emp[eno]</td>";
				echo "<td>$emp[name]</td>";
				echo "<td>$emp[gender]</td>";
				echo "<td>$emp[birthday]</td>";
				echo "<td>$emp[empDept]</td>";
				echo "<td>";
				echo "<button><a href='11_delete.php?eno=$emp[eno]'>删除</a></button>";
				echo "<button><a href='12_empupdate_query.php?eno=$emp[eno]'>修改</a></button>";
				echo "</td>";
				echo '</tr>';
			}
		
			/*for($i=0;$i<count($empList);$i++){
			echo  '<tr>';
					foreach($empList[$i] as $v){
							echo "<td>$v</td>";
						}
			echo "<td><button></button></td>";
			echo '</tr>';
			}*/
			
		?>
		</tbody>
	</table>	
	<?php 
		echo "<button><a href='10_empadd.html'>添加新员工</a></button>"	
	?>
	<script></script>
</body>
</html>
