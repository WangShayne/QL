<?php 
		/**从请求消息头中读取客户端的首选语言,据此输出不同的欢迎消息**/
		header('Content-Type:application/javascript;charset=UTF-8');
		$arr=getallheaders();//读取所有的请求头部
		$long=$arr['Accept-Language']; //获取客户端首选语言
		$start2=substr($long,0,2);//获取字符串的前两个字母
		if($start2==="zh"){
			echo "alert('你好!')";
		}else if($start2=='en'){
			echo "msgDiv.innerHTML='hello'";
		}else if($start2='ja'){
			echo "console.log('あさぅさネソスネタメヌニシツフノヌヒニミメムノミムマヌメマヌタハシトフュ')";
		}
?>