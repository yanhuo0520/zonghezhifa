/**
 * 基础模块。
 *
 * @param {Object} window window对象
 */
(function(window) {
    // 服务器基础地址
   	window.BASE_SERVER = BASEURL;
    // 业务服务器
    window.IMG_SERVER = IMAGEURL;
    // 图片服务器

    // 模块路径
    window.COMMON_MODULE = '/common';
    window.OWNER_MODULE = '/owner';

    // 网络通讯常量
    window.REQ_TIMEOUT = 100;
    // 连接超时时间
    window.REQ_PAGE_SIZE = 10;
    // 分页页面大小

    // 订单状态常量
//  window.ORDER_STATUS = [
//      '待提交', // 0
//      '已提交', // 1
//      '已取消', // 2
//      '已支付', // 3
//      '已确认', // 4
//      '已拒绝', // 5
//      '已配送(商家)', // 6
//      '待配送(第三方)', // 7
//      '已配送(第三方|系统分配)', // 8
//      '已配送(第三方|主动接单)', // 9
//      '配送完成', // 10
//      '待点评', // 11
//      '已点评' // 12
//  ];
//
//  // 配送方式状态常量  配送方式（0：不支持，1：商家自己配送，2：第三方配送）
//  window.SHOP_DELIVERY_MODE = [
//      '不支持', // 0
//      '商家自己配送', // 1
//      '第三方配送'// 2
//  ];

    /**
     * 网络请求统一函数
     *
     * @param {String} url 请求地址
     * @param {String} data 请求数据(JSON字符串)
     * @param {Function} callback 回调函数
     */
    window.MUI_post = function(url, data, callback) {
  //   	if (api.connectionType == "none") {//判断是否有网络
		// 	api.toast({
		// 		msg : '网络异常'
		// 	});
		// 	api.hideProgress();
		// 	return;
		// }
		// $api.post(url, { values : data }, callback);
		
		mui.post(url, data, callback, "json");
    	
//  	function(ret, err) {
//          if (err) {
//              api.toast({
//                  msg : err.msg
//              });
//
//              api.hideProgress();
//              // 通讯层出错，关闭进度条（如果有的话）
//
//              return;
//          }
//          if ( typeof callback === 'function') {
//              callback(ret, err);
//          }
//          //处理失败情况
//          if(ret.errcode==2000){
//	            var msgInfo=ret.errmsg;
//	            if(msgInfo.indexOf("没有添加地址")!=-1){//如果没添加地址跳转到添加地址界面 您还没有添加地址,请先添加地址再进行此操作!
//	            	openW(basePath+"html/user/winMyAddress.html","winMyAddress");
//	            }
//          }else if(ret.errcode==-2){//登陆失败
//	             openW(basePath+"html/user/userLogin.html","userLogin");
//          }
//          
//      });
    };
	
	window.MUI_get = function(url, data, callback) {
		mui.get(url, data, callback, 'json');
	};

    /**
     * 重复引入检查。
     *
     * @param {String} comp 接口组件名称
     */
    window.checkDuplicate = function(comp) {
        if (window[comp]) {
            console.warn('duplicate reference of ' + comp);
            return true;
        }

        return false;
    }
})(window);
