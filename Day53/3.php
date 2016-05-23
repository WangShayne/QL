<?php 
	header('Content-Type:application/json');
	$R=$_REQUEST['R'];
	$G=$_REQUEST['G'];
	$B=$_REQUEST['B'];
	$arr=[
		'R'=>0,
		'G'=>0,
		'B'=>0
	];
	$arr['R']=$R;
	$arr['G']=$G;
	$arr['B']=$B;
	echo json_encode($arr);
?>