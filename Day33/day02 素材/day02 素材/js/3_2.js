function getFocus(txt){
	//给txt穿txt_focus
	txt.className="txt_focus"
	//找到txt旁边的div,脱掉衣服
	txt.parentNode.nextElementSibling.firstElementChild.classname="";
}
function valiName(txtName){
	//声明正则,验证10个字符以内的字母数字或_组成,保存在变量reg中
	reg=/^\w{1,10}$/g
	return vali(txtName,reg)
}
function vali(txt,reg){ //重构  排除原程序的错误,简化原程序的代码
	//将txt的衣服脱掉
	txt.className=""
	//找到txt旁边的div,保存在变量div中
	var div=txt.parentNode.nextElementSibling.firstElementChild;
	//如果用reg验证txtName的内容通过.
	if(reg.test(txt.value)){
		//给div穿上vali_success衣服
		div.className="vali_success"
		//返回true
		return true;
	}
	else{//否则
		//给div穿vali_fail衣服
		div.className="vali_fail"
		//返回false
		return false;
	}
}
function valiPwd(txtPwd){
	//声明正则,验证6位数字
	reg=/^\d{6}$/
	return vali(txt,reg)
}