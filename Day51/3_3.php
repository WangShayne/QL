<?php
	/**向客户端返回所有的产品类型,以JSON格式**/
	header('Content-Type:application/json');
	$type=$_REQUEST['type'];//获取客户端提交的产品类型
	$xing=$_REQUEST['xing'];
	$xingDB=[
				'bx'=>[
					'he'=>[['x1'=>'x1','x2'=>'x2','x3'=>'x3']],
					'hx'=>[['y1'=>'y1','y2'=>'y2','y3'=>'y3']],
					'sx'=>[['z1'=>'z1','z2'=>'z2','z3'=>'z3']]
				],
				'xyj'=>[
					'he'=>[['a1'=>'a1','a2'=>'a2','a3'=>'a3']],
					'sx'=>[['b1'=>'b1','b2'=>'b2','b3'=>'b3']],
					'xte'=>[['c1'=>'c1','c2'=>'c2','c3'=>'c3']]
				],
				'smxj'=>[
					'sx'=>[['o1'=>'o1','o2'=>'o2','o3'=>'o3']],
					'jn'=>[['p1'=>'p1','p2'=>'p2','p3'=>'p3']],
					'nk'=>[['q1'=>'q1','q2'=>'q2','q3'=>'q3']]
				],
	];
	foreach($xingDB as $k=>$v){
		if($k===$type){
			foreach($v as $a=>$b){
				if($a===$xing){
					echo json_encode($b);
					break;
				}
			}
		}
	};
?>