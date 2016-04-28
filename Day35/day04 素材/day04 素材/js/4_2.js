//创建函数
function calc(){
	//获得当前时间,保存到now中
	var now=new Date();
	//获得now的h
	var h=now.getHours();
	//获得now的m
	var m=now.getMinutes();
	//获得当now的s
	var s=now.getSeconds();
	//计算s的角度,保存在变量sDeg中
	var sDeg=s*360/60
	//计算m的角度,保存在变量mDeg中
	var mDeg=(m*60+s)*360/3600;
	//计算h的角度,保存在变量hDeg中
	var hDeg=(h*3600+m*60+s)*360/43200;
	//设置id为s的元素的transform属性为rotate(sDeg)
	window.s.style.transform="rotate("+sDeg+"deg)";
	//设置id为m的元素的transform属性为rotate(mDeg)
	window.m.style.transform="rotate("+mDeg+"deg)";
	//设置id为h的元素的transform属性为rotate(hDeg)
	window.h.style.transform="rotate("+hDeg+"deg)";
}
//启动定时器
window.onload=function(){
	calc();
	setInterval(calc,1000)
}