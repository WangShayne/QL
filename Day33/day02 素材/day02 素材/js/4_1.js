function show(n){
	//找到id为container下的包含style属性的div,保存在变量curr中
	var curr=container.querySelector("div[style]")
	//如果div的id不等于"content"+n
	if(curr.id!="content"+n){
		//移除curr的style的属性
		curr.removerAttribute("style");
		//设置id为"content"+n的元素的style的z-index属性为1
		document.getElementById("content"+n).style.zIndex="1"
	}
}