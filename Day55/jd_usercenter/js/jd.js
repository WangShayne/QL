
	/*头部加载*/
	$.ajax({
		url:'jd_header.html',
		type:'GET',
		success:function(html1){
			$('.header').html(html1)
		},
	})
	/*页尾加载*/
	$.ajax({
		url:'jd_footer.html',
		type:'GET',
		success:function(html2){
			$('.footer').html(html2)
		}
	});
	/*登录验证*/
	
	$('#sub').click(function(){
		$.get('data/checkuname.php',$(".modal-content form").serialize(),function(json){
			if(json.status>0){
				$('.modal').fadeOut();
				$('.rt ul li:first').html("<span>"+json.msg+'</span>,欢迎回来!');
			}else{
				$('.msg').html(json.msg);
				$('[name="uname"]').val('');
				$('[name="upwd"]').val('')
			}
			getOrderList(json.msg,1)
		})
		
	})

	/*我的列表*/
	$('[data-toggle="item"]').click(function(event){
		event.preventDefault();
		$(this).parent().siblings('.hover').removeClass('hover');
		$(this).parent().addClass('hover');

		var selector = $(this).attr('href');
		$('.'+selector).addClass('active');
		$('.'+selector).siblings('.active').removeClass('active');
	})
	/*订单数据请求 orders.php*/ 
	function getOrderList(uname,pno){
			$.ajax({
			url:'data/orders.php',
			type:"get",
			data:{'uname':uname,'pno':pno},
			success:function(json){
				var str = '';  //<tr><td></td></tr><tr>....
				$.each(json.data, function(i, order){
					str+="<tr><td>订单编号:"+order.order_num+"</td><td><a href="+order.shop_url+">"+order.shop_name+"</a></td><td colspan='5'></td></tr><tr><td colspan='2' style='text-align:left;'>";
						$.each(order.products, function(j,p){  
							str+="<a href="+p.product_url+"><img src="+p.product_img+" style='margin-right:10px;'></a>"
						});
					str+="</td><td>"+order.user_name+"</td><td>"+order.price+"</td><td>"+order.submit_time+"</td><td>"+order.order_state+"</td><td>操作</td></tr>"
				});
				$('#tb tbody').html(str);
				var name=$('.rt li:first span').html();
				console.log(typeof name)
					var c='';
					var j=parseInt(json.cur_page);
					var p=parseInt(json.page_count);
					for(var i=1;i<=p;i++){
						if(i===j){
							c+="<li><a href='#' class='act'>"+i+"</a></li>";
						}else{
							c+="<li><a href='#'>"+i+"</a></li>"
						}
					}
				$('#page_list').html(c);
				$('#page_list a').click(function(event){
					event.preventDefault();
					var name=$('.rt li:first span').html();
					getOrderList(name,$(this).html())
				})
			}
		});
	}
	/*异步请求消费统计数据,绘制消费统计图*/
	$.get('data/buy-stat.php',function(data){
		console.log("开始处理服务器返回的消费统计数据")
		console.log(data);
		drawBuyStat(data)
	})
	function drawBuyStat(data){
			console.log(data[0].value)
		/*商品数据请求 products.php*/
		//var w=$('.main-right-consume').parent().width();
		//var h=w;
		var w=500;
		var h=400;
		console.log('WIDTH:'+h);
		var canvasBuyStat=$('#consume')[0];
		canvasBuyStat.width=w;
		canvasBuyStat.height=h;

		var canvasWidth=canvasBuyStat.width;
		var canvasHeight=canvasBuyStat.height;
		var bgColor="#fff";
		var fontColor="#333";
		var fontSize=14;
		var padding=60;	//画布中的内容到离画布边界距离 
		var exisEndSpace=30;//坐标轴端点距离
		var orgin={x:padding,y:canvasHeight-padding};
		var xExisEnd={x:canvasWidth-padding,y:canvasHeight-padding};
		console.log(xExisEnd.x,xExisEnd.y)
		var yExisEnd={x:padding,y:padding};

		var ctx=canvasBuyStat.getContext('2d');
		/*X轴坐标*/
		ctx.beginPath();
		ctx.moveTo(orgin.x,orgin.y);
		ctx.lineTo(xExisEnd.x,xExisEnd.y);
		ctx.lineTo((xExisEnd.x)-10,(xExisEnd.y)-5);
		ctx.moveTo(xExisEnd.x,xExisEnd.y);
		ctx.lineTo((xExisEnd.x)-10,(xExisEnd.y)+5);
		ctx.closePath();
		ctx.stroke();
		/*Y轴坐标*/
		ctx.beginPath();
		ctx.moveTo(orgin.x,orgin.y);
		ctx.lineTo(yExisEnd.x,yExisEnd.y);
		ctx.lineTo((yExisEnd.x)-5,(yExisEnd.y)+10);
		ctx.moveTo(yExisEnd.x,yExisEnd.y);
		ctx.lineTo((yExisEnd.x)+5,(yExisEnd.y)+10);
		ctx.closePath();
		ctx.stroke();
		
		var xSum=xExisEnd.x;
		console.log(xSum)
		var ySum=yExisEnd.y;
		var namei=Math.floor((xSum-padding)/data.length);
		console.log(namei.y)
		var name={x:Math.floor((xSum-padding)/data.length),y:canvasHeight}
		//var value={x:(xSum-10)/data.length,y:}
		var dataX=orgin.x;
		var maxValue=0;
		for(var k=0;k<data.length;k++){
			if(data[k].value>maxValue){
				maxValue=data[k].value
			}
		}
		var count=(Math.floor(maxValue/30))/1000;
		console.log(maxValue)
		for(var i=0;i<data.length;i++){
			/*X轴坐标点,坐标值*/
				ctx.beginPath();
				ctx.moveTo(dataX,xExisEnd.y);
				ctx.lineTo(dataX,(xExisEnd.y)-10);
				ctx.closePath();
				ctx.stroke();	
				ctx.fillText(data[i].name,dataX,xExisEnd.y+15);
				dataX=padding+(i+1)*namei;
		}
			/*Y轴坐标点*/
			var YY=xExisEnd.y
		for(var c=1;c<count;c++){
				ctx.beginPath();
				ctx.moveTo(orginX,YY)
				ctx.lineTo(orgin.x,YY)
				ctx.closePath();
				ctx.stroke();
				YY=canvasHeight-padding-(c*1000)/30;
			
		}
		var valueX=dataX;
		ctx.beginPath();
		ctx.moveTo(valueX,dataY);
		for(var r=0;r<data.length;r++){
			var dataY=canvasHeight-padding-((data[r].value)/30)
			valueX=padding+(r)*namei;
			ctx.lineTo(valueX,dataY);
			ctx.fillText(data[r].value,valueX+2,dataY)
		}
			ctx.stroke();
	}

/**异步获取剩余抽奖次数,若大于0,则可以**/
/*lottery-stat.php*/
drawLottery();
function drawLottery(){
	var ctx=$('#lottery-canvas')[0].getContext('2d');
	var canvasWidth=500;
	var canvasHeight=500;
	var pan=new Image();
	pan.src="img/pan.png";
	var panLoaded=false;
	pan.onload=function(){
		panLoaded=true;
		if(pinLoaded){
			startLottery();
		}
	}

	var pin=new Image();
	var pinLoaded=false;
	pin.src="img/pin.png"
		pinLoaded=true;
		if(panLoaded){
			startLottery();
		}
	function startLottery(){
		ctx.drawImage(pan,0,0)
		ctx.drawImage(pin,canvasWidth/2-pin.width/2,canvasHeight/2-(pin.height/2))
		$("#lottery-bt").click(function(){
			ctx.translate(canvasWidth/2,canvasHeight/2);
			var duration=Math.random()*3000+5000;//转动的持续时间
			var last=0; //当前已经转过的时间
			var deg=5;
			var timer=setInterval(function(){
				deg+=5  //可改变转速
				deg%=360;
				ctx.rotate(deg*Math.PI/180)
				ctx.drawImage(pan,-pan.width/2,-pan.height/2);
				ctx.rotate(-deg*Math.PI/180)
				ctx.drawImage(pin,-pin.width/2,-pin.height/2);
				last+=20;
				if(last>=duration){
					clearInterval(timer)	
						//根据所转的角度,获得所得的奖项
				}
				
			},20)
			ctx.translate(0,0);	
		})
	};
}
//必须保证两个图片都加载完成,才能调用开始抽奖.
