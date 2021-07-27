/**
 * 计算字符串长度 截取并返回指定长度的字符串
 * @param obj	元素对象
 * @param len	截取字节长度 中文2字节 英文1字节
 */
function maxLengthDispose(obj, len) {
	// 获取元素值
	var val = $.trim(obj.value);
	if (val == null) {
		return;
	}
	
	// 计算元素值长度 中文2 英文1
	// 先将中文替换为英文在计算长度
	var realLen = val.toString().replace(/[^\x00-\xff]/g,"aa").length;
	
	// 当实际长度超出指定长度时
	if (realLen > len) {
		// 截取字符串
		val = subString1(val, len);
		// 返回
		obj.value = val;
	}
}
 
/**
 * 截取字符串 中英文混合
 * @param str	待处理字符串
 * @param len	截取字节长度 中文2字节 英文1字节
 */
function subString1(str, len){
	var regexp = /[^\x00-\xff]/g;// 正在表达式匹配中文
	// 当字符串字节长度小于指定的字节长度时
	if (str.replace(regexp, "aa").length <= len) {
		return str;
	}
	// 假设指定长度内都是中文
	var m = Math.floor(len/2);
	for (var i = m, j = str.length; i < j; i++) {
		// 当截取字符串字节长度满足指定的字节长度
		if (str.substring(0, i).replace(regexp, "aa").length >= 0) {
			return str.substring(0, i);
		}
	}
	return str;
}