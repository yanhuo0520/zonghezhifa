const PROVINCE_SUPERVISE = "122";		// 省监管
const CITY_SUPERVISE = "121";			// 市监管
const COUNTY_SUPERVISE = "64";			// 县监管
const TOWN_SUPERVISE = "69";			// 乡监管

const OFFICIAL_VETERINARIAN = "70";		// 官方兽医

const TRANSPORT_COMPANY = "67";			// 运输公司（公司）
const TRANSPORT_PERSON = "62";			// 运输人员

const TREATMENT_PLANT = "68";			// 处理厂（公司)
const TREATMENT_PLANT_PERSON = "63";	// 处理厂人员

const INSURANCE_COMPANY = "66";			// 保险公司（公司）
const INSURANCE_COMPANY_PERSON = "61";	// 保险人员

const FARMER = "65";					// 养殖户65


const CollectStatus_ONE = "10001";		// 已报案-未受理
const CollectStatus_TWO = "10002";		// 已受理-待收集
const CollectStatus_THREE = "10003";	// 已收集-待签字
const CollectStatus_FOUR = "10004";		// 养殖户已签字
const CollectStatus_FIVE = "10005";		// 运输人员已签字
const CollectStatus_SIX = "10006";		// 官方兽医已签字


const TransportStatus_ONE = "50001";		// 收集中
const TransportStatus_TWO = "50002";		// 运输中
const TransportStatus_THREE = "50003";		// 入厂
const TransportStatus_THREE_1 = "50003_1";	// 待核对
const TransportStatus_FOUR = "50004";		// 处理
const TransportStatus_FIVE = "50005";		// 出厂
const TransportStatus_SIX = "50006";		// 已完成

const SIGNIMG_TYPE_REPORTDETAIL = "-1";	// 耳标图片
const SIGNIMG_TYPE_FARM = "1";			// 养殖户签字
const SIGNIMG_TYPE_TSP = "2";			// 运输人员签字
const SIGNIMG_TYPE_REGULATOR_1 = "3";	// 运输人员签字
const SIGNIMG_TYPE_REGULATOR_2 = "4";	// 运输人员签字

var json_unit = [
	{ "id": "1411801", "value": "1411801" },
	{ "id": "2411801", "value": "2411801" },
	{ "id": "3411801", "value": "3411801" }
];

const REPORTDETAIL_IMG_MAXNUM = 6; // 添加耳标页上传图片的最大数量

const FILE_PATH_SIGN = "_doc/sign/"; 			// 签名图片保存路径
const FILE_PATH_EARTAG = "_doc/earTag/"; 		// 耳标收集图片保存路径
