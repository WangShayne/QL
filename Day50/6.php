<?php 
	header('Content-Type:text/html');
	$dept=['10'=>"研发部",'20'=>'市场部','30'=>'运营部','40'=>'财务部','50'=>'法务部','60'=>'IT'];
	echo "<option value='' selected>--请选择部门--</option>";
	foreach($dept as $k=>$v){
		echo "<option value=$k>$v</option>";
	}
?>