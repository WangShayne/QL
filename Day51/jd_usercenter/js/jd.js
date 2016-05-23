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
				$('.rt ul li:first').html(json.msg+',欢迎回来!');
			}else{
				$('.msg').html(json.msg);
				$('[name="uname"]').val('');
				$('[name="upwd"]').val('')
			}
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
})
