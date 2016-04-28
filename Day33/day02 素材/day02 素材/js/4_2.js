//获得样式表对象:
var sheet=document.styleSheets[1];
//获得样式表中描述秒针的CSSRule的对象
var rule=sheet.cssRules[4];
//获得当前时间,保存在变量now中
var now=new Date();
//分别获得三个分量的值
var s=now.getSeconds(),
	m=now.getMinutes(),
	h=now.getHours();
//获得动画开始的CSSRule对象
var startR=rule.cssRules[0];
var endR=rule.cssRules[1];
//计算s对应的角度
var sDeg=s*360/60
//获得startR中的style的transform属性,设置其值为
startR.style.transform="rotate("+sDeg+"deg)";
endR.style.transform="rotate("+(sDeg+450)+"deg)";
//获得样式表中描述分针的CSSRule对象,保存在变量rule中
//获得动画开始的CSSRule对象,保存在变量starR中
//获得动画结束的CSSRule对象,保存在变量endR中
//计算m对应的角度,保存在mDeg中
var mDeg=?
//设置statrR的style的transform为"rotate("+mDeg"+deg)"
//设置endR的style的transform为"rotate("+mDeg"+deg)"

//获得样式表中描述分针的CSSRule对象,保存在变量rule中
//获得动画开始的CSSRule对象,保存在变量starR中
//获得动画结束的CSSRule对象,保存在变量endR中
//计算h对应的角度,保存在hDeg中
var hDeg=?=
//设置statrR的style的transform为"rotate("+hDeg"+deg)"
//设置endR的style的transform为"rotate("+mDeg"+deg)"