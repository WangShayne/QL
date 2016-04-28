function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}

function valiAll(form){
	//找到form中的姓名文本框,保存在变量txtName中
	var txtName=form.username
	//调用valiName方法,传入txtName作为参数,将结果保存在变量rName中
	var rName=valiName(txtName);
	//找到form中的密码文本框,保存在变量txtPwd中
	var txtPwd=form.pwd
	//调用valiPwd方法,传入txtPwd中作为参数,将结果保存在变量rPwd中
	var rPwd=valiPwd(txtPwd)
	//如果rName等于false,或者rPwd等于false.
	if(rName==false||rPwd==false){
		return false;//取消事件
	}
	else{//否则
		return true;
	}
}

/*function valiAll(e){
	var rName=valiName(form1.username);
	var rPwd=valiPwd(form1.pwd);
	if(rName==false||rPwd==false){
		e.preventDefault();
	}
}
window.onload=function(){
	form1.addEventListener("submit",valiAll)
}*/