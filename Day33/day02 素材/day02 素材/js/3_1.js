var nums=[];
window.onload=function(){
	//获得id为queue下的所有li,保存在变量lis中
	var lis=queue.getElementsByTagName("li");
	//i从0开始,到<lis的元素个数结束,i增1
	for(var i=0,len=lis.length;i<len;i++){
		//反复生成随机数
		for (; ; ){
			//在1~lis元素个数之间,生成一个随机数,保存在变量r中
			var r=parseInt(Math.random()*len+1)	
		
		if(nums.indexOf(r)==-1){//如果nums中不包含r
				//就将r压入nums
				nums.push(r)
				//设置当前li添加自定义属性num,值为r
				//1. lis[i].setAttribute("data-num",r)
				lis[i].dataset.num=r
				break;
		}
				//退出当前循环
			
		}
	}
	//将节点按顺序排列
	//将lis集合转为普通数组,再存回lis中
	var lis=Array.prototype.slice.call(lis);
	//将lis中每个li的对象,按li的num属性升序排列
	lis.sort(function(a,b){
		return a.dataset.num-b.dataset.num
	})
	//清除queue的内容
	queue.innerHTML=""
	//遍历lis中每个li
	for(var i=0;i<lis.length;i++){
		queue.appendChild(lis[i])//将当前li追加到queue下
	}
	console.log(String(nums));
}