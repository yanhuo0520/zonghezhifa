//定时调用后台接口获取乡镇街道数据streetData  1在线，0不在线
//首次渲染，后边周期获取渲染
var streetData = [
	{
		"position": "113.747482,34.402536",
		"recordNo": "4101840001",
		"vehicleNum": '豫A2P70T',
		maximumLoad: 1.495,
		vehicleOwner: '常世勤',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.734834,34.411948",
		"recordNo": "4101840002",
		"vehicleNum": '豫A6P26T',
		maximumLoad: 1.495,
		vehicleOwner: '吴涛',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.735265,34.420167",
		"recordNo": "4101840003",
		"vehicleNum": '豫A18RD2',
		maximumLoad: 1.495,
		vehicleOwner: '王彩玲',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.601502,34.792422",
		"recordNo": "4101840001",
		"vehicleNum": '豫A2P70T',
		maximumLoad: 1.495,
		vehicleOwner: '常世勤',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.757974,34.409565",
		"recordNo": "4101840004",
		"vehicleNum": '豫A7188T',
		maximumLoad: 1.495,
		vehicleOwner: '万丽娟',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.716436,34.416117",
		"recordNo": "4101840005",
		"vehicleNum": '豫A9710U',
		maximumLoad: 7.5,
		vehicleOwner: '毛胜利',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.718449,34.393004",
		"recordNo": "4101840006",
		"vehicleNum": '豫AZ1217',
		maximumLoad: 4.895,
		vehicleOwner: '李东伟',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.718449,34.395268",
		"recordNo": "4101840007",
		"vehicleNum": '豫A7P12Q',
		maximumLoad: 1.495,
		vehicleOwner: '沈建红',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.738714,34.380492",
		"recordNo": "4101840008",
		"vehicleNum": '豫A2826B',
		maximumLoad: 4.995,
		vehicleOwner: '毛子成',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.751937,34.380373",
		"recordNo": "4101840009",
		"vehicleNum": '豫AW6778',
		maximumLoad: 9.8,
		vehicleOwner: '郑州博华汽车运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.735552,34.387642",
		"recordNo": "4101840010",
		"vehicleNum": '豫AW6577',
		maximumLoad: 9.8,
		vehicleOwner: '郑州博华汽车运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.728797,34.386927",
		"recordNo": "4101840011",
		"vehicleNum": '豫AZ0702',
		maximumLoad: 1.495,
		vehicleOwner: '郑州博华汽车运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.749063,34.379658",
		"recordNo": "4101840001",
		"vehicleNum": '豫AW9198',
		maximumLoad: 1.495,
		vehicleOwner: '河南安诺驰货运有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.811154,34.390502",
		"recordNo": "4101840014",
		"vehicleNum": '豫AZ5251',
		maximumLoad: 9.925,
		vehicleOwner: '郑州博华汽车运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.765161,34.383353",
		"recordNo": "4101840016",
		"vehicleNum": '豫AL6126',
		maximumLoad: 9.4,
		vehicleOwner: '郑州乾运货物运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.811298,34.402536",
		"recordNo": "4101840001",
		"vehicleNum": '豫A2P70T',
		maximumLoad: 1.495,
		vehicleOwner: '时占杰',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.73469,34.388477",
		"recordNo": "4101840018",
		"vehicleNum": '豫K34588',
		maximumLoad: 9.805,
		vehicleOwner: '河南昂扬物流有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.738858,34.409803",
		"recordNo": "4101840019",
		"vehicleNum": '豫AW0635',
		maximumLoad: 9.8,
		vehicleOwner: '巩延红',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.739289,34.406587",
		"recordNo": "4101840020",
		"vehicleNum": '豫AV7895',
		maximumLoad: 9.855,
		vehicleOwner: '杨宗周',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.761711,34.382161",
		"recordNo": "4101840021",
		"vehicleNum": '豫AV6605',
		maximumLoad: 1.495,
		vehicleOwner: '张中山',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.758262,34.39503",
		"recordNo": "4101840022",
		"vehicleNum": '豫AW3137',
		maximumLoad: 7.99,
		vehicleOwner: '河南星铂睿货运有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.768035,34.391455",
		"recordNo": "4101840023",
		"vehicleNum": '豫AO795T',
		maximumLoad: 9.9,
		vehicleOwner: '李峰岭',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.704651,34.398843",
		"recordNo": "4101840024",
		"vehicleNum": '豫AW2122',
		maximumLoad: 17.925,
		vehicleOwner: '郑州锦畅货物运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.736307,34.394017",
		"recordNo": "4101840025",
		"vehicleNum": '豫AX6608',
		maximumLoad: 16.73,
		vehicleOwner: '郑州薛港汽车运输有限公司',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 1
	},
	{
		"position": "113.746404,34.395626",
		"recordNo": "4101840026",
		"vehicleNum": '豫AN76T9',
		maximumLoad: 1.495,
		vehicleOwner: '刘铁海',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.748057,34.39917",
		"recordNo": "4101840027",
		"vehicleNum": '豫A78HS6',
		maximumLoad: 1.58,
		vehicleOwner: '张豪杰',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.758297,34.397443",
		"recordNo": "4101840029",
		"vehicleNum": '豫A1P05Y',
		maximumLoad: 1.43,
		vehicleOwner: '张宗奎',
		address: '河南省郑州市新郑市',
		fillingDate: '2018-12-01 00:00:00',
		fillingOffice: '新郑市畜牧局',
		state: 0
	},
	{
		"position": "113.747877,34.395507", //坐标点
		"recordNo": "4101840030", //备案号
		"vehicleNum": '豫AG0U85', //车牌号
		maximumLoad: 1.85, //最大载重
		vehicleOwner: '樊喜玲', //车主
		address: '河南省郑州市新郑市', //备案地址
		fillingDate: '2018-12-01 00:00:00', //备案日期
		fillingOffice: '新郑市畜牧局', //备案机关
		state: 0 //在线状态 1在  0不在
	}
];
