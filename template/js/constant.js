/**全国配置*/
// 王帅超本地
// const  MAIN_URL="http://172.168.1.121:7400"; 
// 服务器
// const  MAIN_URL="http://1.192.171.68:9059"; 
const  MAIN_URL="http://172.168.1.130:9056"; 

/** 检疫申报配置 */
const QUARANTINE_MAIN_URL = "http://bidg.apn110.com/isv/terminalTFSEngine/spGateWay";

/** 无害化配置 */
const HARMLESS_MAIN_URL = "http://172.168.0.111:8080/jyharmless";		// 济源 - 孙少明 - 测试
//const HARMLESS_MAIN_URL = "http://172.168.1.118:8080/hnjyharmless";		// 鹤壁 - 张帅 - 测试

const  default_areaCode="459000";//
const  default_areaName="济源市";//

var basePage = {
	pageNo: 1,
	pageSize: 10
};

var Constant = (function() {
  // Private static attributes.
  var constants = { // 定义了两个常量
		MAIL_LIST: MAIN_URL + "/xmdc/api/SsoBasOrgApi_list.action",  							// 组织机构信息的列表分页
		MAIL_PERSON_LIST: MAIN_URL + "/xmdc/api/SsoBasPersonApi_list.action",					// 组织机构信息的列表分页
		MAIL_BUMEN_PERSON_LIST: MAIN_URL + "/xmdc/api/SsoBasPersonApi_getPersonList.action",	// 部门人员类别
		MAIL_ID_DETAIL: MAIN_URL + "/xmdc/api/SsoBasPersonApi_getById.action",					// 人员详情
		
		/** 检疫申报配置 */
		// 获取检疫申报登记页所有动物种类
		POST_ALL_KINDS: QUARANTINE_MAIN_URL + "?syncTransferData=[{'SYNC_ACT':'AIS-2018000100000002','_GATEWAY_NAME':'HA_NETWORK'}]",
		// 获取检疫申报登记页所有行政区域
		POST_ALL_AREA: QUARANTINE_MAIN_URL + "?syncTransferData=[{'SYNC_ACT':'AIS-2002000100000003','_GATEWAY_NAME':'HA_NETWORK'}]",
		
		/** 无害化配置 */
		// 登录
		HARMLESS_LOGIN: HARMLESS_MAIN_URL + "/vac/mobile/core/core_loginApp.action",
		// 获取常量
		HARMLESS_CONSTRANT_DATA: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findConstantData.action",
		// 案件列表
		HARMLESS_REPORT_LIST: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findReportList.action",
		// 案件详情
		HARMLESS_REPORT_DETAILS: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findReportDetails.action",
		// 运输记录列表
		HARMLESS_TRANSPORT_RECORD_LIST: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findTransportLogs.action",
		// 更新运输记录状态
		HARMLESS_UPDATE_TRANSPORT_RECORD_STATUS: HARMLESS_MAIN_URL + "/harmless/app/transport/appTransport_updateTransportLogStatus.action",
		// 根据运输id查询到的案件列表
		HARMLESS_REPORT_LIST_TRANSOPRT_ID: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findTslDetails.action",
		// 删除某一条收集详情记录
		HARMLESS_REPORT_DETAILS_DELETE: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_deleteReportDetail.action",
		// 添加案件信息
		HARMLESS_ADD_REPORT: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_saveReportDetails.action",
		// 批量判断耳边是否重复
		HARMLESS_JUDGING_EARSIGNNUM_REPEAT: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_judgingEarSignNumRepeat.action",
		// 添加消毒记录
		HARMLESS_ADD_TRANSPORT: HARMLESS_MAIN_URL + "/harmless/app/Disinfect/appDisinfect_saveDisinfectLog.action",
		// 进入无害化运输确认
		HARMLESS_TRANSPORT_ok: HARMLESS_MAIN_URL + "/harmless/app/Disinfect/appDisinfect_updateTransportLog.action",
		// 运输详情
		HARMLESS_TRANSPORT_Detail: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findTslDetails.action",
		// 监督人员确认车辆入厂
		HARMLESS_AFFIRM_CAR_COME_IN: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_updateTSLInFac.action",
		// 监督人员确认车辆入厂（案件未收集完成时）
		HARMLESS_AFFIRM_CAR_COME_IN_NOT_COMPLETE: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_updateTSLInFacNotComplete.action",
		// 上传图片
		HARMLESS_UPLOAD_IMG: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_uploadImg.action",
		// 畜禽病死记录
		HARMLESS_BEASTS_AND_BIRDS_RECORD: HARMLESS_MAIN_URL + "/harmless/app/breed/appBreed_findDeadLogList.action",
		// 报案
		HARMLESS_REPORT_CASE: HARMLESS_MAIN_URL + "/harmless/app/breed/appBreed_saveReportByApp.action",
		// 案件列表
		HARMLESS_CASE_LIST: HARMLESS_MAIN_URL + "/harmless/app/breed/appBreed_findReportList.action",
		// 产品流向
		HARMLESS_PRODUCT_FLOW: HARMLESS_MAIN_URL + "/harmless/app/Disinfect/appDisinfect_findProductFlowList.action",
		// 抽查
		HARMLESS_SPOT_CHECK: HARMLESS_MAIN_URL + "/harmless/app/Disinfect/appTransportLogSpotCheck_findTransportLogSpotCheckList.action",
		// 保存抽查
		HARMLESS_SAVE_SPOT_CHECK: HARMLESS_MAIN_URL + "/harmless/app/Disinfect/appTransportLogSpotCheck_saveTransportLogSpotCheck.action",
		// 案件受理-案件列表
		HARMLESS_ACCEPT_CASE_LIST: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_reportList.action",
		// 案件添加保险公司和保险类型
		HARMLESS_ADD_INSURANCE_TO_REPORT: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_updateReport.action",
		// 获取运输人员
		HARMLESS_GET_DRIVER: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_getTransportorList.action",
		// 根据运输人员获取车辆信息
		HARMLESS_GET_CAR_INFO_BY_DRIVER: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_getTruckLists.action",
		// 获取所有的无害化处理厂
		HARMLESS_FACTORYS: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_showHarmless.action",
		// 受理案件
		HARMLESS_ACCEPT_CASE: HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_acceptReports.action",
		// 设备列表
		HARMLESS_DEVICE_LIST: HARMLESS_MAIN_URL + "/harmless/app/video/appvideo_getDeviceList.action",
		// 无害化处理厂列表类型接口
		HARMLESS_BASE1_SUFFIX : HARMLESS_MAIN_URL + "/harmless/app/regulator/appRegulator_findTransportLogs.action"
   }

	var Test = {};
	// 定义了一个静态方法
	Test.getConstant = function(name) { // 获取常量的方法
		return constants[name]; 
	}
	return Test
})();
//使用示例：Constant.getConstant('USER_REGISTER')
