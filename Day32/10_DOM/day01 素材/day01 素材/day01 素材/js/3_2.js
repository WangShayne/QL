		//定义输出制定父元素的函数
		function show(parent){
		//输出:如果parent是文本节点,就输出parent的nodeValue
		if(parent.nodeType==3){
			console.log(parent.nodeValue)
		}
		//否则输出parent的nodeName
		else{console.log(parent.nodeName)}
				
		//获得parent下所有子节点,保存在变量children中,
		var children=parent.childNodes;
		for(var i=0,len=children.length;i<len;i++){
			//输出:如果当前子节点是文本节点,就输出parent的nodeValue,否则输出nodename
			console.log(children[i].nodeType==3?children[i].nodeValue:children[i].nodeName)
			}
		}	
		window.onload=function(){
			show(document.body);
		}