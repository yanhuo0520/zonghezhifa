/**全国配置*/
// const  MAIN_URL="http://www.zzhyxy.com";
const  MAIN_URL="http://172.168.1.121:9503";
const  default_areaCode="459000";//
const  default_areaName="济源市";//


var Constant = (function() {
  // Private static attributes.
  var constants = {//定义了两个常量
		LOGIN_IN:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.login",  // 登录接口
		SELECT_LOGIN_IN:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.selectLogin",  // 选择用户进行登录接口
		SEARCH_COMPANY_BASE:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.checkByName",  // 根据企业名称检索企业信息接口
		COMPANY_LOG_SAVE:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.log.save",  // 企业监督日志保存接口
		PICTURE_UPLOAD:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.log.img.save",  // 图片上传接口
		COMPANY_LOG_LIST:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.log.list",  // 企业监督日志列表接口
		COMPANY_LOG_DETAIL:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.log.info",  // 企业监督日志详细信息接口
		PICTURE_DOWNLOAD:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.log.img.download",  // 图片下载接口
		COMPANY_LIST:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.list",  // 企业列表接口
		COMPANY_BASE_SAVE:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.save",  // 企业信息保存接口
		GET_ANIMAL_KIND:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.sort",  // 动物种类获取接口
		GET_AREA:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.area",  // 地区获取接口
		COMPANY_POINT_CHANGE:MAIN_URL+"/xmjgxm/clientrcp/xmzf_treat.action?api_method=c.qy.update",  // 企业坐标信息更改接口
		
		
		
		UPDATE_VERSION_URL:MAIN_URL+"/appJsp/version.jsp" ,//检查版本更新
   }
   

   var Test={};
   // 定义了一个静态方法
   Test.getConstant=function(name){//获取常量的方法
     return constants[name]; 
   }
   return Test
})();
//使用示例：Constant.getConstant('USER_REGISTER')
