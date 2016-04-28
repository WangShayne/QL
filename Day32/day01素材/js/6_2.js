function calc(btn){
	//修改数量
	//获得btn的父节点保存在变量td中
	var td=btn.parentNode;
	//获取td下的唯一一个span,保存在span中
	var span=td.getElementsByTagName("span")[0];
	//获取span的内容保存在变量n中
	var n=parseFloat(span.innerHTML);
	//如果btn是+号,就加1		
	n+=btn.innerHTML=="+"?1:n==1?0:-1//否则如果n已经是1就加0
	//否则减1
	//设置span的内容为n
	span.innerHTML=n;

	//计算小计
	//获得td的前一个兄弟元素的内容,截取,从?为截取,转为浮点数后,保存在变量price中
	var price=parseFloat((td.previousElementSibling.innerHTML).slice(1))
	//设置td的后一个兄弟元素内容为"&yen;"+price*n,要求小计要按两位小数,四舍五入
	td.nextElementSibling.innerHTML="&yen;"+(price*n).toFixed(2)

	//计算总计
	//获得id为data下的tbody下的每个tr下的最后一个td 保存在变量tds中,
	var tds=data.querySelectorAll("tbody>tr>td>:last-child");
	//遍历tds中的每一个td,同时声明变量sum为0
	for(var i=0,sum=0;i<tds.length;i++){
		//获得当前td的内容,截取从?位 转为浮点数后,累加到sum上
		sum+=parseFloat(tds[i].innerHTML.slice(1))
	}//遍历结束
	//设置id为data下的tfoot下的tr的最后一个td的内容为
		//"&yen;"+sum,sum按两位小数,四舍五入
	data.querySelector("tfoot>tr>td:last-child").innerHTML="&yen;"+sum.toFixed(2)
}