主页面 
	index.html
	
公共文件夹
	css、image、js
	
项目集template
	home.html、 mail.html、 apply.html、 my.html、 login.html
	template-》css
	template->images
	template->js
	
template分项目-
政府角色监管模块
	ani-husbandry ->ani-css
	ani-husbandry ->ani-image
	ani-husbandry ->ani-js
	ani-husbandry ->ani-husbandry
耳标管理
	ear-tag -> ear-css
	ear-tag -> ear-img
	ear-tag -> ear-js
	
#### 监管(ani-husbandry) ####	
#### 养殖监管 ---> 企业列表有4个按钮 监督日志，出栏量，死亡记录，免疫记录的入口
#### 其他监管 ---> 企业列表只有 监督日志的入口
日志
养殖企业(企业类型qylx：5)
	添加 log-breed-add.html
	查看 log-breed-view.html
屠宰企业(企业类型qylx：8)
	添加 log-slaughter-add.html
	查看 log-slaughter-view.html
动物诊疗(企业类型qylx企业类型qylx：9)
	添加 log-animal-add.html
	查看 log-animal-view.html
饲料生产(企业类型qylx：1)
	添加 log-feed-pro-add.html
	查看 log-feed-pro-view.html
饲料销售(企业类型qylx：2)
	添加 log-feed-sale-add.html
	查看 log-feed-sale-view.html
兽药生产(企业类型qylx：3)
	添加 log-vet-drug-pro-add.html
	查看 log-vet-drug-pro-view.html
兽药销售(企业类型qylx：4)
	添加 log-vet-drug-sale-add.html
	查看 log-vet-drug-sale-view.html
生鲜乳收购(企业类型qylx：11)
	添加 log-raw-milk-buy-add.html
	查看	 log-raw-milk-buy-view .html
生鲜乳运输(企业类型qylx：12)
	添加 log-raw-milk-trans-add.html
	查看 log-raw-milk-transt-view.html
	
#### 生猪运载(pigcarryingvehicle) ####
生猪运载(13)
	首页 pigcarryingvehicle.html
	车辆监控 monitor.html
		地图 		monitor-map.html
		列表 		monitor-list.html
	电子围栏 enclosure.html
		电子围栏 	fenceList.html
		告警记录 	alarmLogList.html
	洗消管理 disinfection.html
		消毒记录 	disinfectionRecordList.html
		洗消站管理 	decontaminatingList.html
	系统分析 analysis.html
	
#### 耳标管理(ear-tag) #####
## 市级账户/县级账号 ---> 有入库登记权限，乡级无
## 县级/乡级 ---> 可下发所有所有下级（检疫员，防疫员，养殖场，散养户）
## 防疫员/防疫员 ---> 可下发养殖场，散养户
耳标管理模块：
	首页 er-home.html
	入库登记（市级/县级/乡级) city-in.html
	入库列表 in-list.html
	
	耳标发放（市级）city-issued.html
	耳标发放（乡级）xiang-issued.html
	耳标发放（检疫员/防疫员）jianFang-issued.html
	
	发放列表 issued-list.html
	耳标库存 er-stock-list.html
private String degree;// 管理等级 1:部级   2:省级  3：市级  4：县级  5：乡级   6：终端
	                
private String role;// 管理员角色标识     
	市级 耳标管理员：等级为3
	乡镇耳标管理员  ：等级为5                        
	 防疫员：fyy    等级为6
	 检疫员：jyy    等级为6   
	 养殖场：yzqy   等级为6                
	 散养户：syh    等级为6                 
	
#### 检疫申报(quarantine) #####
	首页 quarantine-home.html
		检疫申报登记 quarantine-add.html
		申报单列表 quarantine-list.html
			检疫申报单详情 quarantine-detail.html
				申报受理 quarantine-accept.html


#### 无害化处理(harmless) ####
## 监管人员 ---> ergl027320
## 处理厂身份 ---> 有权限查看进场登记 
## 养殖户身份 ---> 有权限查看畜禽病死记录、报案 fyy028436
## 运输司机 ---> 有权限操作入场页面 ergl028202
	首页 harmless.html
		案件列表 farmers-list.html
		
		监控中心 supervisory-center.html
			案件受理 accept-case.html
			现场收集 scene-collect.html
				收集详情 scene-collect-detail.html
					无耳标 collect-noEarTagNum.html
					有耳标(无保险) collect-noInsuranceEarTagNum.html
					有耳标(有保险) collect-earTagNum.html
				蓝牙选择 scene-collect-dayin.html
			运输中心 transport-record-review.html
					transport-record-driver.html
			视频监控 camera-video-stair.html
				视频详情 camera-video-stair-detail.html
				
		运输记录 transport-record.html
			记录详情 transport-record-detail.html
			
		无害化处理厂 harmless-factory.html
###处理厂身份【可见】	进场登记 entry-registration.html
			消毒记录 disinfection-record.html
				新增消毒记录  disinfection-add.html
				查看消毒记录 disinfection-view.html
			抽查列表 check-list.html
				进场抽查 check.html
				抽查记录 check-view.html
			流向登记 flow-registration.html
			
		保险公司

############# 养殖企业【可见】
		养殖企业 farmers-center.html
			畜禽病死记录 animal-death-record.html
			报案 case-list.html
			案件列表 farmers-list.html
			
############# 运输司机【可见】
		运输记录 transport-record-driver.html
		
############# 监管人员【可见】
		运输记录 transport-record-review.html