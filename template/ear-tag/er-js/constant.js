/**全国配置*/
// 王帅超本地
// const  MAIN_URL="http://172.168.1.121:7400"; 
// 服务器
const MAIN_URL = "http://1.192.171.68:9059";

// const  MAIN_URL="http://172.168.1.115:9059"; 

const default_areaCode = "459000"; //
const default_areaName = "济源市"; //

var Constant = (function() {
	// Private static attributes.
	var constants = { //定义了两个常量
		CITY_EAR_IN: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.sign.save", //市级耳标入库接口
		CITY_EAR_IN_LIST: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.sign.list", //市级耳标入库列表接口：
		CITY_GRANT_XIANG_GET: MAIN_URL + "/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.area", //市级耳标发放获取乡镇信息接口：
		//市级耳标发放给乡镇时获取乡镇人员接口：  //获取养殖场、散养户、检疫员、防疫员接口：
		CITY_GRANT_XIANG_GET_REN: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.ebhuser.list",
		//市级耳标发放给乡镇保存接口    检疫员、防疫员耳标发放给养殖场、散养户保存接口：  乡级耳标发放给养殖场、散养户、检疫员、防疫员保存接口：
		CITY_GRANT_XIANG_SAVE: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.grant.save",
		//市级耳标发放列表接口：  检疫员、防疫员耳标发放列表接口：  乡级耳标发放列表接口：
		CITY_GRANT_LIST: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.grant.list",
		//市级耳标发放给乡镇撤销接口：  检疫员、防疫员耳标撤销接口： 乡级耳标撤销接口
		CITY_GRANT_RECALL: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.grant.revoke",
		// 签收接口
		EAR_SING_FOR: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.grant.sign",
		CITY_GRANT_STOCK_LIST: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.stock.list", //耳标库存列表接口

		EAR_IN_DETAIL: MAIN_URL + "/xmjgxm/clientrcp/earmark_treat.action?api_method=c.earmark.sign.info", //耳标入库详细信息接口
	};
	
	var Test = {};
	// 定义了一个静态方法
	Test.getConstant = function(name) { //获取常量的方法
		return constants[name];
	};
	return Test
})();
//使用示例：Constant.getConstant('USER_REGISTER')
