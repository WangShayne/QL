<?php 
	header('Content-Type:application/javascript');
	$result=[
		'sx'=>1,
		'sd'=>2,
	];
	$json=json_encode($result);
	echo 'doResponse('.$json.')';
?>