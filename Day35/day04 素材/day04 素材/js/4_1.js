//step1 任务函数
function calc(){
	//定义一个目标时间2016/4/22 18:00 保存在变量endDate
	var endDate=new Date("2016/4/22 17:49");
	//获得当前时间now
	var now=new Date();
	//获得时间的差(s):parseInt(endDate-now)/1000
	var s=parseInt((endDate-now)/1000);
	if(s>0){

	//换算小时h
	var h=parseInt(s/3600);
	//如果h<10,则前补0
	h<10&&(h="0"+h)
	//换算分钟m
	var m=parseInt(s%3600/60);
	//如果m<0,则前补0
	m<10&&(m="0"+m);
	//换算秒钟s
	var s=s%60;
	//如果s<10,则前补0
	s<10&&(s="0"+s)
	//设置id为time的元素内容为h:m:s
	time.innerHTML=time.innerHTML.indexOf(":")!=-1?(h+" "+m+" "+s):(h+":"+m+":"+s)
	}else{
		time.innerHTML="00:00:00"
		claerInterval(timer);
		timer=null
	}
}
	var timer=null//保存当前任务的序号
//step2 启动定时器
window.onload=function(){
	timer=setInterval(calc,500);
}
//step3 停止定时器
function stop(btn){
	//如果内容为||
if(timer!=null){
		//停止定时器
		clearInterval(timer);
		//将timer设置为null
		timer=null;
		//设置btn的内容为"|>"
	    btn.innerHTML="|>";
	}
	//否则
	else{
		//开始计数器
		timer=setInterval(calc,500);
		//设置按钮的内容为||
	    btn.innerHTML="||";
	}
}