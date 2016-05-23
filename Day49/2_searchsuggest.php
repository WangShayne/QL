<?php 
	/**
		接受客户端提交的搜索关键字,返回包含此关键字的搜索结果
		——以html片段的形式
	**/
	header("Content-Type:text/html");
	$kw=$_REQUEST['kw'];
	//连接数据库服务器,从数据库中检索
	//此处模拟实现
	$db=['ada','basic','vb','c','c#','c++','delphie','ecamascript','es','formula','go','html','ivy','java','JavaScript','jsp','js','lamda','mongodb','nodejs','pa				scal','sql'];
	$result=[];
	foreach($db as $v){
		//在一个字符串中搜索一个字串第一次出现的位置
		if(stripos($v,$kw)!==false){
			echo "<li>$v</li>";
		};
	};
?>