//为jQuery添加一个插件函数
if(!window.jQuery){
	throw new Error('自定义插件函数必须依赖于jQuery')
}
/*  js全局函数,会导致全局对象的污染
	function add(arr){
		var sum=0;
		for(var i=0;i<arr.length;i++){
			result+=arr[i];
		}
		return result;
	}

*/
/*
//累加
jQuery.sum=function(arr){
	var result=0;
	jQuery.each(arr,function(i,value){
		result+=value
	});
	return result
}
//平均值
jQuery.avg=function(arr){
	return jQuery.sum(arr)/arr.length;
}
*/
/**设法防止jQuery全局函数的命名冲突*/
jQuery.terena={};
jQuery.terena.sum=function(arr){
	var result=0;
	jQuery.each(arr,function(i,value){
		result+=value
	});
	return result;
};
jQuery.terena.avg=function(arr){
	return jQuery.terena.sum(arr)/arr.length;
};