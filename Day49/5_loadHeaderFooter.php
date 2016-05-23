<?php 
	/*返回头部和底部文件*/
	sleep(3);
	header('Content-Type:text/html');
	$header=$_REQUEST['header'];
	$footer=$_REQUEST['footer'];
	if($header==='header'){
		echo "<p>这是头部</p>";
	}
	if($footer==='footer'){
		echo "<p>这是页尾</p>";
	}
?>