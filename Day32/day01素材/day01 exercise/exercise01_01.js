function selectAll(chb){//全选,取消权限
	//获得id为data的table下tbody下tr下的第一个td中的input,保存在变量chbs中
	var chbs=data.querySelectorAll("tbody>tr>td>input")
	//遍历chbs中每个chb,
	for(var i=0;i<chbs.length;i++){
		//设置当前chb的checked等于chb的checked
		chbs[i].checked=chb.checked
	}
}
window.onload=function(chb){
	//获得id为data的table下tbody下tr下的第一个td中的input,保存在变量chbs中
	var chbs=data.querySelectorAll("tbody>tr>td>input")
	//遍历chb中每个chb
	for(var i=0;i<chbs.length;i++){
		//设置当前chb的onclick=selectOne;
		chb.onclick=selectOne;
	}
}
function selectOne(){//选中或取消选中一个chb
	var chb=this;//this-->当前选中的chb
	//获得data下thead下tr下的第一个td下的inpit,保存在变量selAll中
	var selAll=data.querySelector("tbody>tr>th>input")
	//如果当前chb的checked的是false.
	if(chb.checked==false){
		//就将data下thead下tr下的第一个td下的input的checked改为false
		data.querySelectorAll("tbody>tr>th>input").checked=false
	}
	//否则
	else{
		//获得id为data的table下的tbody下tr下的第一个td中的input
		chbs=data.querySelectorAll("tbody>tr>th>input")
		//保存在变量chbs中
		//遍历chbs下每个chb
		for(var i=0;i<chbs.length;i++){
			//如果当前chb没用选中,则直接返回
			if(chbs[i].checked==false){
				return;
			}
		}//遍历结束
		selAll.checked=true
	}	
}