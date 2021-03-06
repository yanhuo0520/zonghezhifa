/*设定html字体大小*/
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 415) deviceWidth = 420;
document.documentElement.style.fontSize = deviceWidth / 7.2 + 'px';

function initSettings() {
	var deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth > 415) deviceWidth = 420;
	document.documentElement.style.fontSize = deviceWidth / 7.2 + 'px';
}

function checkLogin() {
	var uuid = plus.storage.getItem("uuid"); // 用户的的id编号
	if (uuid == "" || uuid == null || uuid == "undefined") {
		mui.openWindow({
			id: 'login.html',
			url: 'login.html'
		});
		return false;
	}
	return true;
}

var old_back = mui.back; //备份mui.back，mui.back已将窗口关闭逻辑封装的比较完善（预加载及父子窗口），因此最好复用mui.back

/**
 * 带有ajaxPicker组件页面中返回键逻辑处理
 * @param {Object} nodeShowFlag 是否判断自定义弹框显示标识
 */
function dailogBackKeyFunction(nodeShowFlag) {
	
	var targetIds = [];
	$(".myAjaxPicker").each(function() {
		targetIds.push($(this).attr("id"));
	});
	// 返回键处理
	mui.back = function() {
		var ajaxPickerShowFlag = false;
		for(var i = 0; i < targetIds.length; i++) {
			ajaxPickerShowFlag = $("#ajaxPicker-wrapper-" + targetIds[i]).hasClass("ajaxPicker-show");
			if (ajaxPickerShowFlag) {
				var wrapper_close = mui("#ajaxPicker-wrapper-" + targetIds[i])[0];
				wrapper_close.classList.remove('ajaxPicker-show');
				ajaxPickerShowFlag = false;
				return;
			}
		}
		
		var node = $(".numbk_layer");
		if(nodeShowFlag && !node.is(':hidden')) {
			node.hide();
			return;
		}
		
		if(nodeShowFlag) {
			if(!ajaxPickerShowFlag && node.is(':hidden')) {
				old_back();
			}
		} else {
			if(!ajaxPickerShowFlag) {
				old_back();
			}
		}
	};
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
 * 两个Double类型或者float类型的字符串的加法运算
 * @param {Object} num1
 * @param {Object} num2
 */
function numAdd(num1, num2) {
	var baseNum, baseNum1, baseNum2;
	try {
		baseNum1 = num1.toString().split(".")[1].length;
	} catch (e) {
		baseNum1 = 0;
	}
	try {
		baseNum2 = num2.toString().split(".")[1].length;
	} catch (e) {
		baseNum2 = 0;
	}
	baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
	var precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2; //精度
	return ((num1 * baseNum + num2 * baseNum) / baseNum).toFixed(precision);;
};


function removeFileByPath(dirPath) {
//	var dirPath = '_doc/tempImage/';
	plus.io.resolveLocalFileSystemURL(dirPath, function(entry) {    
	    //读取这个目录对象    
	    var directoryReader = entry.createReader();    
	    // console.log(dirPath)    
	    //读取这个目录下的所有文件    
	    directoryReader.readEntries(function(entries) {    
	        // console.log(entries.length)    
	        //如果有才操作    
	        if (entries.length > 0) {    
	            //删除目录将会删除其下的所有文件及子目录 不能删除根目录，如果操作删除根目录  
	            //将会删除目录下的文件及子目录，不会删除根目录自身。 删除目录成功通过succesCB  
	            //回调返回，失败则通过errorCB返回。  
	            entry.removeRecursively(function(entry) {    
	                // console.log('删除成功回调')    
	                //删除成功回调    
	            }, function(e) {    
	                // console.log('!!')    
	                //错误信息    
	                mui.toast(e.message + ' ?!');    
	            })    
	        }    
	    }, function(e) {    
	        mui.toast('读取文件失败：' + e.message)    
	    })    
	}, function(e) {    
	    mui.toast('读取目录失败：' + e.message)    
	})
}
 
