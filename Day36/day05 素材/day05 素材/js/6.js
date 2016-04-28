var game={
	PSIZE:50,//保存小div的大小
	maxTop:0,//保存小div最大可用的top值
	maxLeft:0,//保存小div最大可用left的值
	init:function(){
		//计算maxTop:当前文本显示区的高度innerHeight-PSIZE
		this.maxTop=window.innerHeight-this.PSIZE;
		//计算maxLeft:当前窗口的innerWidth-PSIZE
		this.maxLeft=window.innerWidth-this.PSIZE;
		//留住this
		var me=this;
		//为pop绑定mouseover事件,定义处理函数为function(e){
		pop.addEventListener("mouseover",function(e){
			//获得鼠标相对于文档显示区的x坐标,保存在变量x中.
			var x=e.clientX,y=e.clientY;
			//获得鼠标相对于文档显示区的Y坐标,保存在变量y中.
			//反复生成随机位置
			for(;;){
				//在0~maxLeft之间生成随机数,保存在l中
				var l=parseInt(Math.random()*(me.maxLeft+1));
				//在0~maxTop之间生成随机数,保存在t中
				var t=parseInt(Math.random()*(me.maxTop+1))
				//如果鼠标的坐标不在l,t的新位置范围内,
				if(!(x>=l&&x<=l+me.PSIZE&&y>=t&&y<=t+me.PSIZE)){
					this.style.top=t+"px";//设置pop的top为t,
					this.style.left=l+"px"//设置pop的left为l
					break;
				}
			
			}//退出循环
		});
	}
}
window.onload=function(){
	game.init();
}