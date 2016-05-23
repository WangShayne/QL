$().ready(function(){
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
			getOrderList(json.msg,5)
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
					console.log(order.order_num)
					str+="<tr><td>订单编号:"+order.order_num+"</td><td><a href="+order.shop_url+">"+order.shop_name+"</a></td><td colspan='5'></td></tr><tr><td colspan='2' style='text-align:left;'>";
						$.each(order.products, function(j,p){  
							str+="<a href="+p.product_url+"><img src="+p.product_img+" style='margin-right:10px;'></a>"
						});
					str+="</td><td>"+order.user_name+"</td><td>"+order.price+"</td><td>"+order.submit_time+"</td><td>"+order.order_state+"</td><td>操作</td></tr>"
				});
				$('#tb tbody').html(str);
				var name=$('.rt li:first span').html();
					var c='';
					var j=parseInt(json.cur_page);
					var p=parseInt(json.page_count);
					for(var i=1;i<=p;i++){
					
						if(i===j){
							c+="<li><a href='javascript:alert("+123+")' class='act'>"+i+"</a></li>";
						}else{
							c+='<li><a href=\"javascript:getOrderList('+name+ ',' +j+');'\"+'>'+i+"</a></li>'
						}
						
					}
				$('#page_list').html(c);
			}
		});
	}
	/*商品数据请求 products.php*/
})
