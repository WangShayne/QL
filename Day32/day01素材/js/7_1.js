function toggle(span){
	//span的class为open
	var span=document.querySelector("ul>li>span")
		
		if(span.className==open){
			//span的class改为closed
			span.className="closed";
			//将span的下一个兄弟元素改为hide
			span.nextElementSibiling.className="hide"
		}
		//否则
		else{
			//查找class为tree的元素下的class为open的span,保存在变量open中
			var open=document.querySelector('.tree.open')
			//如果找到:如果open不为null 
				if (open!=null){
					//设置open的class为closed
					open.className="closed"
					//设置open的下一个兄弟元素的class为hide
					open.nextElementSibling.className="hide"
				}
				
			//设置span的class为open,
			
			span.className="open";
			//设置span的下一个兄弟元素的class为show
			span.nextElementSibiling.className="show"
		}
}