//封装$:接受一个字符串格式的选择器,返回指定元素
//HTMLElement.prototype是所有HTML元素的父对象
window.$=HTMLElement.prototype.$=function(selector){
	//$("".app_jd) this->window
	//div.$(".app") this.div
	var r = (this==window?document:this).querySelectorAll(selector);
	return r.length==0?null:
			  r.length==1?r[0]:
									r;
}
//$("".app_jd) 在整个页面查找
//div.$(".app") 在DIV下查找
window.onload=function(){
	/*顶部菜单展开*/
	//找到class为app_jd的元素,为其绑定鼠标进入事件
	$(".app_jd").addEventListener("mouseover",topShow);
	//找到class为app_jd的元素,为其绑定鼠标移除事件topHide
	$(".app_jd").addEventListener("mouseover",topHide);
	//找到class为service的元素,为其绑定鼠标移除事件topShow
	$(".service").addEventListener("mouseover",topShow);
	//找到class为service的元素,为其绑定鼠标移除事件topHide
	$(".service").addEventListener("mouseover",topHide);
	
	function topShow(){
		//在this下找id属性以_items结尾的元素,设置其display为block
		this.$("#_items$").style.display="block"
	}
	function topHide(){
		//在this下找id属性以_items结尾的元素,设置其display为none
		this.$("#_items$").style.display="none"
	}
}
