<?php
	/**向客户端返回所有的产品类型,以JSON格式**/
	header('Content-Type:application/json');
	$type=$_REQUEST['type'];//获取客户端提交的产品类型
	$factoryDB=[
				'bx'=>['he'=>'海尔','hx'=>'海信','sx'=>'三星'],
				'xyj'=>['he'=>'海尔','sx'=>'三星','xte'=>'小天鹅'],
				'smxj'=>['sx'=>'三星','jn'=>'佳能','nk'=>'尼康'],
	];
	foreach($factoryDB as $k=>$v){
		if($k===$type){
			echo json_encode($v);
			break;
		}
	};
?>