var BASEURL = "http://vehicle.apn110.com/vehicle/mobile/";
//var BASEURL = "http://172.168.1.123:88/mobile/";
//var IMAGEURL = "http://vehicle.apn110.com/vehicle/profile/avatar/";
var IMAGEURL = "http://172.168.1.122:88/profile/avatar/";

var defaultCityName = "郑州市";

// 填补区域选择时空数据功能
var baseArea = [{
	id: "0000000000001",
	value: "暂无区域信息"
}];

// 洗消站类型JSON数据
var json_xixiaozhanType = [
	{
		value: '人员洗消站',
		id: '人员洗消站'
	}, {
		value: '车辆洗消站',
		id: '车辆洗消站'
	}, {
		value: '装备洗消站',
		id: '装备洗消站'
	}, {
		value: '服装洗消站',
		id: '服装洗消站'
	}
];

// 洗消方式JSON数据
var json_decontaminWay = [
	{
		value: '消毒',
		id: '消毒'
	}, {
		value: '洗消沾染',
		id: '洗消沾染'
	}, {
		value: '局部洗消',
		id: '局部洗消'
	}, {
		value: '全部洗消',
		id: '全部洗消'
	}
];

// 消毒方式JSON数据
var json_disinfectionMetod = [
	{
		value: '喷洒式消毒',
		id: '喷洒式消毒'
	}, {
		value: '注射式消毒',
		id: '注射式消毒'
	}, {
		value: '投喂式消毒',
		id: '投喂式消毒'
	}
];

/**
 *通用传输数据类
 */
var BaseParams = {
	pageNum: 1,
	pageSize: 10
}

// 页面跳转到地区选择页
function toLocationSelect() {
	openNewWebView("../user/locationList.html", "locationList.html");
}

// 关闭地区选择页
function closeLocationSelect() {
	closeWebView("locationList.html");
	closeWebView("locationList-content.html");
}

// 创建并显示新窗口
function openNewWebView(url, id, styles, extras) {
	var ws = plus.webview.create(url, id, styles, extras);
	plus.webview.show(ws, "fade-in", 300); // 显示窗口	
}

// 关闭窗口
function closeWebView(id) {
	var ws = id ? plus.webview.getWebviewById(id) : plus.webview.currentWebview();
	plus.webview.close(ws);
}

/**
 * 清空指定的输入框
 * @param targetId {String} 输入框的ID
 */
function clearInputContent(targetId) {
	$("#" + targetId).val("");
}

/**
 * 首次设置首页定位信息
 * @param targetId {String} 输入框的ID
 */
function firstSsetIndexLoactionInfo(targetId) {
	var cityName = plus.storage.getItem("cityName") || defaultCityName;
	$("#" + targetId).html(cityName);
}

/**
 * 设置首页定位信息
 * @param targetId {String} 输入框的ID
 */
function setIndexLoactionInfo(targetId) {
	var cityName = plus.storage.getItem("cityNameSelect") || defaultCityName;
	$("#" + targetId).html(cityName);
}

/**
 * 获取当前地理位置
 */
function getCurrentPosition() {
	plus.geolocation.getCurrentPosition(function(p) {
		console.log(JSON.stringify(p));
		var cityName = p.address.city;
		plus.storage.setItem("cityName", cityName);
	}, function(e) {
		console.debug('Geolocation error: ' + e.message);
	});
}

function backKeyFunction() {
	//返回键处理
	//处理逻辑：1.5秒内，连续两次按返回键，则退出应用；
	var first = null;
	mui.back = function() {
		
		//首次按键，提示‘再按一次退出应用’
		if (!first) {
			first = new Date().getTime();
			mui.toast('再按一次退出应用');
			setTimeout(function() {
				first = null;
			}, 1500);
		} else {
			if (new Date().getTime() - first < 1500) {
				plus.runtime.quit();
			}
		}
	};
}

/** 
 * js截取字符串，中英文都能用 
 * @param str：需要截取的字符串 
 * @param len: 需要截取的长度 
 */
function cutstr(str, len) {
	if(str == null) {
		return "";
	} else {
		var str_length = 0;
		var str_len = 0;
		str_cut = new String();
		str_len = str.length;
		for (var i = 0; i < str_len; i++) {
			a = str.charAt(i);
			str_length++;
			if (escape(a).length > 4) {
				//中文字符的长度经编码之后大于4  
				str_length++;
			}
			str_cut = str_cut.concat(a);
			if (str_length > len) {
				str_cut = str_cut.concat("");
				return str_cut;
			}
		}
		//如果给定字符串小于指定长度，则返回源字符串；  
		if (str_length < len) {
			return str;
		}
	}
}

function resizeListener(targetWebViewId) {
	var height = plus.display.resolutionHeight;  //获得手机屏幕高度 
	var width = plus.display.resolutionWidth;  //获得手机屏幕高度 
	window.addEventListener('resize', function(e) { //resize 件事监听软盘打开或关闭时的动作
		e.stopPropagation();
		var sub = plus.webview.getWebviewById("launchFooter");
		// var self1 = plus.webview.currentWebview();
		// console.log(self1.id);
		if(width == plus.display.resolutionWidth) {
			if(height > plus.display.resolutionHeight) {
				sub.setStyle({
					bottom: "-50px",
					top: "0px"
				});
				
				plus.webview.getWebviewById(targetWebViewId).setStyle({
					bottom: "0px"
				});
			} else {
				sub.setStyle({
					top: "0px",
					bottom: "0px"
				});
				plus.webview.getWebviewById(targetWebViewId).setStyle({
					bottom: "51px"
				});
			}
		}
	});
}
				
/**
 * 截取url地址，获取窗口的id；
 * @param {String} url html文件的路径
 * @param {String} wvId webviewObject的id
 */
function cutWebviewId(url) {
	var startIndex = url.lastIndexOf("/");
	var endIndex = url.lastIndexOf(".html");
	var wvId = url.substring(startIndex + 1, endIndex);
	return wvId;
}
