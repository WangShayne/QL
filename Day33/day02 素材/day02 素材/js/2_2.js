var contries={
	unselCts:[],//保存未选中的国家列表
	selCts:[],//保存所有选中的国家列表
	init:function(){
		//将unsel元素的内容先去开头和结尾的空格,再掐头去尾
		//在切割,将结果保存在unselCts中
		
		this.unselCts=unsel.innerHTML.trim().slice(8,-9).split(/<\/option>\s*<option>/);
		//在opts元素下找所有button,保存在变量btns中
		var btns=opts.getElementsByTagName("button");
		//声明变量me,留住this
		var me=this;
		//遍历btns中每个btn
		for(var i=0,len=btns.length;i<len;i++){
			btns[i].onclick=function(){//响应每个按钮的移动操作
				//this-btn  //me-->countries对象
				//如果当前按钮的内容为>>
				switch(this.innerHTML){
					case "&gt;&gt;":
					//将me的unselCts数组拼接到selCts中.将结果保存回me的selCts中
					me.selCts=me.selCts.concat(me.unselCts);
					me.unselCts=[]//清空me的unselCts
					break;
				//否则,如果当前按钮的内容为<<
					case "&lt;&lt;":
					//将me的selCts数组拼接到unselCts中,将结果保存回me的unselCts中
					me.unselCts=me.unselCts.concat(me.selCts)
					me.selCts=[];
					break;

					case "&gt;":
						//unsel元素下的所有option,保存在变量ops中
					var ops=unsel.getElementsByTagName("button");
						//从后向前遍历ops中每个option
						for(var i=ops.length-1;i>=0;i++){
							//如果当前option被选中
							if(ops[i],selected){
								//从unselCts中i位置的一个元素,保存在变量deleted中
								  //取结果中[0]位置的元素,保存在变量deleted中
							
								//将deleted压入selCts
								me.selCts.push(
									me.unselCts.splice(i,1)[0]	
								);
							}
						}
					case "&lt;":
						var ops=sel.getElementsByTagName("button");
						//从后向前遍历ops中每个option
						for(var i=ops.length-1;i>=0;i++){
							//如果当前option被选中
							if(ops[i],selected){
								//从unselCts中i位置的一个元素,保存在变量deleted中
								  //取结果中[0]位置的元素,保存在变量deleted中
							
								//将deleted压入selCts
								me.unselCts.push(
									me.selCts.splice(i,1)[0]	
								);
							}
						}
				}
				//调用me.show 更新界面
				me.show();
			};
		}
	},
	show:function(){
		//将unselCts数组更新到unsel元素下
		//如果unselCts的元素个数为0,
		if(this.unselCts.length==0){
			//清空unsel的内容
			unsel.innerHTML="";
		}
		//否则,
		else{
			//将unselCts中的元素按名称升序排列
			this.unselCts.sort();
			//将unselCts中的元素拼接为多个option元素,将结果字符串设置为unsel的内容
			unsel.innerHTML="<option>"+this.unselCts.join("</option><option>")+"</option>"
		}
		//将selCts数组更新到sel元素下
		//如果selCts的元素个数为0,
		if(this.selCts.length==0){
			//清空sel的内容
			sel.innerHTML="";
		}
		//否则,
		else{
			//将selCts中的元素按名称升序排列
			this.selCts.sort();
			//将selCts中的元素拼接为多个option元素,将结果字符串设置为sel的内容
			sel.innerHTML="<option>"+this.selCts.join("</option><option>")+"</option>"
		}
	},

}
window.onload=function(){
	contries.init();
}