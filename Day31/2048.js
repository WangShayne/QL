var game={
	data:null,//保存一个二维数组,二维数组中保存了游戏所有格子的数据
	RN:4,//保存总行数
	CN:4,//保存总列数
	//对象自己的方法,要使用自己的属性或其他方法,都要用this
	//每个属性和方法结尾,必须用逗号分隔
	score:0,
	state:1,
	GAMEOVER:0,//游戏结束状态
	RUNNING:1,//游戏运行状态
	CELLSIZE:100,//保存每个格子的宽高
	OFFSET:16,//保存格子之间的间距和距边框的边距
	top:0,//保存最高分
	init:function(){//生成gridPanel中的所有div
    var div=document.getElementById("gridPanel");
    //计算容器的宽: CN*116+16
    div.style.width=this.CN*116+16+"px";
    //计算容器的高: RN*116+16
    div.style.height=this.RN*116+16+"px";
    var arr=[];//[00,01,02,03,10,11,12,13,21,...]
    //r从0开始，到<RN结束，每次增1
    for(var r=0;r<this.RN;r++){
      //c从0开始，到<CN结束，每次增1
      for(var c=0;c<this.CN;c++){
        arr.push(""+r+c);//将""+r+c，压入arr中
      }
    }
    var grids='<div id="g'+
      arr.join('" class="grid"></div><div id="g')
      +'" class="grid"></div>';
    var cells='<div id="c'+
      arr.join('" class="cell"></div><div id="c')
      +'" class="cell"></div>';
    //设置id为gridPanel的div的内容为grids+cells
    div.innerHTML=grids+cells;
  },
	start:function(){//启动游戏
		this.init();
		if(document.cookie.trim()!=""){
		this.top=parseInt(document.cookie.slice(4));
    }
		//this.init();//动态生成单元格div
		this.state=this.RUNNING;
		this.score=0;
		//初始化二维数组
		//创建空二维数组,保存在当前对象的date属性中
		this.data=[];
		if(document.cookie.indexOf("=")!=-1){
      this.top=document.cookie.split("=")[1];
    }
		//r,从零开始,到<RN结束,每次r增1
		for(var r=0;r<this.RN;r++){
			//向date中压入一个空数组
			this.data[r]=[];
			//c从0开始,到<CN结束,每次增1
			for(var c=0;c<this.CN;c++){
				//向date中r行压入一个0
				this.data[r][c]=0;
			}
		}//遍历结束
		this.randomNum();
		this.randomNum();
		this.updateView();
		//响应键盘事件
		var me=this;
		document.onkeydown=function(e){//this-->document
			switch(e.keyCode){
				case 37: me.moveLeft(); break;
				case 38: me.moveUp();break;
				case 39: me.moveRight();break;
				case 40: me.moveDown();break;
			}
		}
		console.log(this.data.join("\n"))
	},
	randomNum:function(){//只赋值生成一个随机数
		//反复执行
		for(;;){
			//在0~RN-1之间随机生成一个行号r
			var r=parseInt(Math.random()*this.RN)
			//在0~CN-1之间随机生成一个列号c
			var c=parseInt(Math.random()*this.CN)
			//如果data中r行c列为0
				if(this.data[r][c]==0){
					//声明变量n,再生成随机数,如果随机数<0.5,就将n赋值为2,否则赋值为4
					var n=Math.random();
					n=n<0.5?2:4
					//将n保存在data中r行c列的位置
					this.data[r][c]=n
					break;
				}
		}//退出循环
			
	},
	updateView:function(){//专门负责将data中的元素,更新到页面
		//遍历data中没个元素,
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){
				//用id找到当前元素对应的前景格,保存在div中
				var div=document.getElementById("c"+r+c)
				//如果当前元素等于0
				if(this.data[r][c]==0){
					//设置div的内容为""
					div.innerHTML=""
					//设置div的class属性为cell
					div.className="cell"
				}
				else{//否则
					//设置div的内容为当前元素的值,
					div.innerHTML=this.data[r][c]
					//设置div的class属性为"cell n"+当前元素值
					div.className="cell n"+this.data[r][c]
				}
			}
		}	
		//设置id为score的元素内容设置为当前对象的score属性
		score.innerHTML=this.score;
		//finalScoreSpan的内容为当前对象的score
		finalScore.innerHTML=this.score;
		//设置id为Gameover的DIV的display属性:
			//如果当前游戏的状态为GAMEOCER.就改为"block"
			//否则就改为none
		gameOver.style.display=this.state==this.GAMEOVER?"block":"none";
			
	},
	/* 核心 */
	/* 左移 */
	moveLeft:function(){
		//先给数组照相,保存在变量before中
		var before=String(this.data);
		//r从0开始,到<RN结束,每次增1
		for(var r=0;r<this.RN;r++){
			//调用moveLeftInRow,传入r作为参数
			this.moveLeftInRow(r);
		}//遍历结束
		//再给数组照相,保存在变量after中
		var after=String(this.data);
		//如果before!=after时,
		if(before!=after){
			//生成一个随机数
			this.randomNum();
			//设置游戏的状态为GAMEOVER
			this.state=(this.isGameOver()? this.GAMEOVER:this.RUNNING)
			this.updateView();
		}
		
		//更新页面
	
	},
	
	moveLeftInRow:function(r){//负责左移第r行
		//c从0开始.到<CN-1结束,每次增1
		for(var c=0;c<this.CN-1;c++){
			//查找data中 r行c列之后下一个不为0的数的位置,保存在nextc中,
			var nextc=this.getNextInRow(r,c)
			//如果没找到,就直接退出循环
			if(nextc==-1){
				break;
			}
			//否则,如果当前元素等于0
			else if(this.data[r][c]==0){
					//将data中r行nextc列的值替换给当前元素
					this.data[r][c]=this.data[r][nextc];
					//将data中r行nextc列的值重置为0
					this.data[r][nextc]=0;
					//让c留在原地
						c--;
			}
					//否则,如果当前元素的值等于nextc列的元素值
			else if(this.data[r][c]==this.data[r][nextc]){
					//将当前元素的值*2
					this.data[r][c]*=2;
					//将data中r行nextc列的值重置为0
					this.data[r][nextc]=0;
					this.score+=this.data[r][c];
			}
			
		}		
	},
	getNextInRow:function(r,c){//在r行中找到c列之后下一个不为0个位置,找到返回下标,没找到返回-1
		//nextc从c+1开始,到<CN结束,每次增1
		for (var nextc=c+1;nextc<this.CN;nextc++ ){
			//如果data中r行nextc列的值不等于0
			if(this.data[r][nextc]!=0){
				return nextc//返回nextc
			}//遍历结束
		}
		return -1//返回-1
	},
	/* 右移 */
	moveRight:function(){
		//先给数组照相,保存在变量before中
		var before=String(this.data);
		//r从0开始,到<RN结束,每次增1
		for(var r=0;r<this.RN;r++){
			//调用moveLeftInRow,传入r作为参数
			this.moveRightInRow(r);
		}//遍历结束
		//再给数组照相,保存在变量after中
		var after=String(this.data);
		//如果before!=after时,
		if(before!=after){
			//生成一个随机数
			this.randomNum();
			this.state=(this.isGameOver()? this.GAMEOVER:this.RUNNING)
			this.updateView();
		}
		//更新页面
	
	},
	
	moveRightInRow:function(r){//负责左移第r行
		//c从this.CN-1开始.到>0结束,每次减1
		for(var c=this.CN-1;c>0;c--){
			//查找data中 r行c列之后下一个不为0的数的位置,保存在nextc中,
			var prevc=this.getPrevInRow(r,c)
			//如果没找到,就直接退出循环
			if(prevc==-1){
				break;
			}
			//否则,如果当前元素等于0
			else if(this.data[r][c]==0){
				//将data中r行nextc列的值替换给当前元素
				this.data[r][c]=this.data[r][prevc];
				//将data中r行nextc列的值重置为0
				this.data[r][prevc]=0;
				//让c留在原地
					c++;
				}
			//否则,如果当前元素的值等于nextc列的元素值
			else if(this.data[r][c]==this.data[r][prevc]){
				//将当前元素的值*2
				this.data[r][c]*=2;
				//将data中r行nextc列的值重置为0
				this.data[r][prevc]=0;
				this.score+=this.data[r][c];
			}
			
		}		
	},
	getPrevInRow:function(r,c){//在r行中找到c列之后下一个不为0个位置,找到返回下标,没找到返回-1
		//nextc从c-1开始,到>=0结束,每次减1
		for (var prevc=c-1;prevc>=0;prevc--){
			//如果data中r行nextc列的值不等于0
			if(this.data[r][prevc]!=0){
				return prevc//返回nextc
			}//遍历结束
		}
		return -1//返回-1
	},
	/* 上移 */
	moveUp:function(){//上移所有列
		//对数组内容拍照,保存在before中
		var before=(String(this.data))
		//c从0开始,到<CN结束,每次增1
		for(var c=0;c<this.CN;c++){
			//上移第C列
			this.moveUpInCol(c);
		}
		//对数组内容拍照,保存在after中
		var after=(String(this.data))
		//如果before不等于after
		if(before!=after){
			//随机生成数
			this.randomNum();
			this.state=(this.isGameOver()? this.GAMEOVER:this.RUNNING)
			//更新页面
			this.updateView();
		}
	},
	moveUpInCol:function(c){
		//r从0开始,到<RN-1结束,每次增1
		for(var r=0;r<this.RN-1;r++){
			//查找r行c列下方下一个不为0的数的位置,保存在nextr中
			var nextr=this.getDownInCol(r,c);
			//如果没有找到,就退出循环,
			if(nextr==-1){break;}
			else if(this.data[r][c]==0){//否则,如果data中r行c列等于0
				//将data中nextr行c列中的值替换给r行c列的元素
				this.data[r][c]=this.data[nextr][c];
				//将data中nextr行c列置值为0
				this.data[nextr][c]=0;
				r--;
			}
			else if(this.data[r][c]==this.data[nextr][c]){//否则,如果data中r行c列等于nextr行c列
				//将data中r行c列的值*2
				this.data[r][c]*=2;
				//将data中nextr行c列置为0
				this.data[nextr][c]=0
				this.score+=this.data[r][c];
			}
		}
	},
	getDownInCol:function(r,c){//查找r行c列下方下一个不为0 的数
		//nextr从r+1开始,nextr<RN结束,nextr每次增1
		for(var nextr=r+1;nextr<this.RN;nextr++){
			//如果nextr行c列的元素不等于0
			if(this.data[nextr][c]!=0){
				return nextr;	//返回nextr
			}
		}//遍历结束
		return -1;	//返回 -1
	},
	/* 下移 */
	moveDown:function(){//下移所有列
		//对数组内容拍照,保存在before中
		var before=(String(this.data))
		//c从0开始,到<CN结束,每次增1
		for(var c=0;c<this.CN;c++){
			//上移第C列
			this.moveDownInCol(c);
		}
		//对数组内容拍照,保存在after中
		var after=(String(this.data))
		//如果before不等于after
		if(before!=after){
			//随机生成数
			this.randomNum();
			this.state=(this.isGameOver()? this.GAMEOVER:this.RUNNING)
			//更新页面
			this.updateView();
		}	
	},
	moveDownInCol:function(c){
		//r从this.RN开始,到>0结束,每次减1
		for(var r=this.RN-1;r>0;r--){
			//查找r行c列下方下一个不为0的数的位置,保存在nextr中
			var provr=this.getUpInCol(r,c);
			//如果没有找到,就退出循环,
			if(provr==-1){break;}
			else if(this.data[r][c]==0){//否则,如果data中r行c列等于0
				//将data中nextr行c列中的值替换给r行c列的元素
				this.data[r][c]=this.data[provr][c];
				//将data中nextr行c列置值为0
				this.data[provr][c]=0;
				r++;
			}
			else if(this.data[r][c]==this.data[provr][c]){//否则,如果data中r行c列等于nextr行c列
				//将data中r行c列的值*2
				this.data[r][c]*=2;
				//将data中nextr行c列置为0
				this.data[provr][c]=0
				this.score+=this.data[r][c];
			}
		}
	},
	getUpInCol:function(r,c){
		//nextr从r-1开始,nextr>=0结束,nextr每次增1
		for(var provr=r-1;provr>=0;provr--){
			//如果nextr行c列的元素不等于0
			if(this.data[provr][c]!=0){
				return provr;	//返回nextr
			}
		}//遍历结束
		return -1;	//返回 -1
	},
	
	isGameOver:function(){
		//遍历data中每个元素,
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){
				//如果当前元素是0,返回false
				if(this.data[r][c]==0){return false}
				//否则,如果c<CN-1,且当前值等于右侧值
				else if((c<this.CN-1)&&(this.data[r][c]==this.data[r][c+1])){
					return false;//返回fasle
				}
				//否则,如果r<RN-1,且当前值等于下方值的时候,
				else if((r<this.RN-1)&&(this.data[r][c]==this.data[r+1][c])){
					return false;//返回false
				}
			}
		}//遍历结束
		return true;
	},
	
}
//当页面加载完成之后,自动触发
window.onload=function(){
	game.start();
}