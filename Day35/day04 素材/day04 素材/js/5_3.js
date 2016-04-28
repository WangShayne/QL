var adv={
	DISTANCE:0,//保存要移动的总距离
	DURATION:1000,//总的时长
	STEPS:50,//总的步数
	interval:0,//保存每步的时间间隔 /* 步频 */
	step:0,//保存每步的步长
	tmer:null,//保存正在运行的定时器的序号
	moved:0,
	WAIT:5000,//保存下落后,等待上升的时间
	init:function(){
		//获得id为msg元素的计算后的样式中的height,保存在DISTANCE属性中
		this.DISTANCE=parseFloat(getComputedStyle(msg).height)
		//计算interval属性:DURATION/STEPS
		this.interval=this.DURATION/this.STEPS
		//计算step属性:DISTANCE/STPES
		this.step=this.DISTANCE/this.STEPS
		this.timer=setTimeout(this.move.bind(this,1),this.interval)
	},
	move:function(n){//作为向上移动一步的任务函数
		//获得id为msg的元素计算后的样式中的bottom属性,保存在变量bottom中,
		var bottom=parseFloat(getComputedStyle(msg).bottom);
		//将msg元素的bottom属性设置为bottom+step+"px"
		msg.style.bottom=bottom+n*this.step+"px"
		this.moved++
		//启动一个一次性定时器,每个interval执行一次moveUp.
		if(this.moved<this.STEPS){
		this.timer=setTimeout(this.move.bind(this,n),this.interval)
		}else{
			clearTimeout(this.timer);
			this.timer=null;
			this.moved=0; 
			if(n==-1){//如果n==-1
				setTimeout(this.move.bind(this,1),this.WAIT)//启动一次性定时器,等待WAIT时间,在调用move
			}
		}
	},
		moveDown:function(){
		//如果timer==null,
		if(this.timer==null){
			this.move(-1)	//调用move(-1),

		}
		
	},
}

		window.onload=function(){
			adv.init();
		}