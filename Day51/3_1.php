<?php
	/**向客户端返回所有的产品类型,以JSON格式**/
	header('Content-Type:application/json');
	$productDB=[
				'bx'=>'冰箱',
				'xyj'=>'洗衣机',
				'smxj'=>'数码相机',
	];
	echo json_encode($productDB);
?>