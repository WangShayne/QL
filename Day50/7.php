<?php 
	/*接受客户端提交的页号,显示出制定页面中有哪些菜*/
	header('Content-Type:application/json');
	$pno=$_REQUEST['pager'];
	$db=[
				"1"=>['京酱肉丝','鱼香肉丝','青椒炒肉'],
				"2"=>['清炒油菜','蒜蓉菜心','果仁菠菜'],
				"3"=>['水果沙拉','菠萝炒梨','冰糖雪梨']
			];
	foreach($db as $k=>$v){
		if($k==$pno){
			$str=json_encode($v);
			echo $str;
			break;
		}
	}
?>