<?php
	/*统计出过去12个月内月消费统计,以JSON格式*/

	/*
		[
			{name="1月",value="3500"},
			{name="2月",value="3500"},
			{name="3月",value="3200"}
		]
		
	*/

	header('Content-Type:application/json');
	//此处使用伪造的数据
	$output=[];
	$output[]=['name'=>'1月','value'=>2000];
	$output[]=['name'=>'2月','value'=>3800];
	$output[]=['name'=>'3月','value'=>5100];
	$output[]=['name'=>'4月','value'=>6400];
	$output[]=['name'=>'5月','value'=>1800];
	$output[]=['name'=>'6月','value'=>2100];
	$output[]=['name'=>'7月','value'=>5000];
	$output[]=['name'=>'8月','value'=>5800];
	$output[]=['name'=>'9月','value'=>3400];
	$output[]=['name'=>'10月','value'=>7000];
	$output[]=['name'=>'11月','value'=>6000];
	$output[]=['name'=>'12月','value'=>1800];

	echo json_encode($output);
?>