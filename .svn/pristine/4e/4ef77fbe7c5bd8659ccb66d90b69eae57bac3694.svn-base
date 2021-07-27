/**
 * 电商接口组件。
 *
 * @param {Object} window window对象
 */
(function(window) {
	var _name = '$mine';

	// 重复引入检查
	if (checkDuplicate(_name)) {
		return;
	}

	var _version = "1.0.0";

	var _path = 'http://172.168.1.114:6020/shuzixumu';

	window[_name] = {
		version : _version,

		shoppingCart : {
			/**
			 * 获取购物车信息。
			 *
			 * @param {String} communityId 社区ID
			 * @param {Function} callback 回调函数
			 */
			view : function(communityId, callback) {
				var param = {
					communityId : communityId
				};
				post(_path + '/shoppingCart/view', JSON.stringify(param), callback);
			},

			/**
			 * 添加购物车项。
			 *
			 * @param {String} communityId 社区ID
			 * @param {String} shopId 商铺ID
			 * @param {String} goodsId 商品ID
			 * @param {Integer} goodsNumber 商品数量
			 * @param {Function} callback 回调函数
			 */
			addItem : function(communityId, shopId, goodsId, goodsNumber, callback) {
				var param = {
					communityId : communityId,
					shopId : shopId,
					goodsId : goodsId,
					goodsNumber : goodsNumber,
					type : 1 // 添加项目
				};
				post(_path + '/shoppingCart/goods/save', JSON.stringify(param), callback);
			},

			/**
			 * 更新购物车项。
			 *
			 * @param {String} communityId 社区ID
			 * @param {String} shopId 商铺ID
			 * @param {String} goodsId 商品ID
			 * @param {Integer} goodsNumber 商品数量
			 * @param {Function} callback 回调函数
			 */
			updateItem : function(communityId, shopId, goodsId, goodsNumber, callback) {
				var param = {
					communityId : communityId,
					shopId : shopId,
					goodsId : goodsId,
					goodsNumber : goodsNumber,
					type : 2 // 更新项目
				};
				post(_path + '/shoppingCart/goods/save', JSON.stringify(param), callback);
			},

			/**
			 * 移除购物车项。
			 *
			 * @param {String} id 购物车项ID
			 * @param {Function} callback 回调函数
			 */
			deleteItem : function(id, callback) {
				var param = {
					id : id
				};
				post(_path + '/shoppingCart/goods/delete', JSON.stringify(param), callback);
			},

			/**
			 * 清空购物车。
			 *
			 * @param {String} communityId 社区ID
			 * @param {Function} callback 回调函数
			 */
			clear : function(communityId, callback) {
				var param = {
					communityId : communityId
				};
				post(_path + '/shoppingCart/clear', JSON.stringify(param), callback);
			}
		},

		/**
		 * 获取我的积分。
		 *
		 * @param {Function} callback 回调函数
		 */
		getMyScore : function(callback) {
			post(_path + '/score/my', null, callback);
		},

		/**
		 * 领取积分。
		 *
		 * @param {Function} callback 回调函数
		 */
		receiveScore : function(callback) {
			post(_path + '/score/receive', null, callback);
		},

		/**
		 *抽奖
		 *
		 * @param {String} communityId 社区ID
		 * @param {Function} callback 回调函数
		 */
		getSweepstakes : function(param, callback) {
			post(_path + '/score/sweepstakes', JSON.stringify(param), callback);
		},

		// 订单相关接口
		/**
		 * 购物车提交订单分拆。
		 *
		 * @param {String} communityId 社区ID
		 * @param {Array} shopList 一个商铺列表的数组，其中的元素结构如下：
		 * 						{String} id 商铺ID
		 * 						{Array} goodsList 被选中的商品列表，其中的元素结构如下：
		 * 							{String} id 商品ID
		 * 							{Integer} num 商品数量
		 * @param {Function} callback 回调函数
		 */
		orderSplit : function(communityId, shopList, callback) {
			var param = {
				communityId : communityId,
				shopList : shopList
			};
			post(_path + '/activeOrder/generate2', JSON.stringify(param), callback);
		},

		/**
		 * 订单提交
		 *
		 * @param {String} orderId 订单ID
		 * @param {String} address 送货地址
		 * @param {Integer} type 送货类型
		 * @param {String} startTime 开始时间
		 * @param {String} endTime 结束时间
		 * @param {String} couponId 优惠券ID
		 * @param {String} remark 备注
		 * @param {Function} callback 回调函数
		 */
		submitOrder : function(orderId, address, type, startTime, endTime, couponId, remark,name,tel,needBill,billDetail, callback) {
			var param = {
				orderId : orderId,
				distributionAddress : address,
				deliveryTimeType : type,
				couponId : couponId,
				remark : remark,
				name:name,
				tel:tel,
				needBill:needBill,
				billDetail:billDetail
			};
			if(needBill==0){//不需要发票的
				param.billDetail="";
			}
			if (type == 2) {
				param.deliveryStartTime = startTime;
				param.deliveryEndTime = endTime;
			} else if (type == 3) {
				param.pickStartTime = startTime;
				param.pickEndTime = endTime;
			}
			post(_path + '/activeOrder/submit', JSON.stringify(param), callback);
		},

		/**
		 * 订单取消。
		 *
		 * @param {String} orderId 订单ID
		 * @param {Function} callback 回调函数
		 */
		cancelOrder : function(orderId, callback) {
			var param = {
				orderId : orderId,
			};
			post(_path + '/activeOrder/cancel', JSON.stringify(param), callback);
		},

		/**
		 * 订单支付。
		 *
		 * @param {String} orderId 订单ID
		 * @param {Integer} paymentType 支付类型
		 * @param {Function} callback
		 */
		payOrder : function(orderId, paymentType, callback) {
			var param = {
				orderId : orderId,
				paymentType : paymentType
			};

			post(_path + '/activeOrder/pay', JSON.stringify(param), callback);
		},

		/**
		 * 获取活动订单。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getActiveOrders : function(param, callback) {
			post(_path + '/activeOrder/list', JSON.stringify(param), callback);
		},

		/**
		 * 获取历史订单。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback
		 */
		getHistoryOrders : function(param, callback) {
			post(_path + '/historyOrder/list', JSON.stringify(param), callback);
		},

		/**
		 * 订单收货确认。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback
		 */
		receiptConfirm : function(param, callback) {
			post(_path + '/activeOrder/confirmReceipt', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的地址。
		 *
		 * @param {Function} callback 回调函数
		 */
		getHouseList : function(callback) {
			post(_path + '/house/list', null, callback);
		},

		/**
		 * 获取我的配送地址。
		 *
		 * @param {String} communityId 社区ID
		 * @param {Function} callback 回调函数
		 */
		getHouseList : function(communityId, callback) {
			var param = {
				communityId : communityId
			};
			post(_path + '/address/list', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的配送地址
		 *
		 * @param {String} communityId 社区ID
		 * @param {Function} callback 回调函数
		 */
		getDeliveryAddressList : function(communityId, callback) {
			var param = {
				communityId : communityId
			};

			post(_path + '/address/list', JSON.stringify(param), callback);
		},

		/**
		 * 我的帖子列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getNoteList : function(param, callback) {
			post(_path + '/note/list', JSON.stringify(param), callback);
		},

		/**
		 * 微论坛帖子列表接口。
		 *
		 * @param {Object} param 帖子ID
		 * @param {Function} callback 回调函数
		 */
		getNoteList : function(param, callback) {
			post(_path + '/note/list', JSON.stringify(param), callback);
		},

		/**
		 * 微论坛帖子详情接口。
		 *
		 * @param {Object} param 帖子ID
		 * @param {Function} callback 回调函数
		 */
		getNoteDetail : function(id, callback) {
			var param = {
				id : id
			};
			post(_path + '/note/detail', JSON.stringify(param), callback);
		},

		/**
		 * 微论坛帖回帖列表接口。
		 *
		 * @param {Object} param 帖子ID
		 * @param {Function} callback 回调函数
		 */
		getFollowNoteList : function(param, callback) {
			post(_path + '/followNote/list', JSON.stringify(param), callback);
		},

		/**
		 * 微论坛帖子评论接口。
		 *
		 * @param {Object} param 帖子ID
		 * @param {Function} callback 回调函数
		 */
		addFollow : function(param, callback) {
			post(_path + '/followNote/add', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的商品收藏列表
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		getGoodsFavorite : function(param, callback) {
			post(_path + '/goods/favorite/list', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的商铺收藏列表
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		getShopFavorite : function(param, callback) {
			post(_path + '/shop/favorite/list', JSON.stringify(param), callback);
		},

		/**
		 * 发帖接口
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		addThread : function(param, callback) {
			post(_path + '/note/add', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的优惠券列表
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		getMyCoupons : function(param, callback) {
			post(_path + '/coupon/list', JSON.stringify(param), callback);
		},
		/**
		 * 小区公告评论接口
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		announcementReply : function(param, callback) {
			post(_path + '/announcement/reply', JSON.stringify(param), callback);
		},

		addShop : function(shopId, callback) {
			var param = {
				shopId : shopId
			};
			post(_path + '/shop/favorite/add', JSON.stringify(param), callback);
		},
		cancelShop : function(shopId, callback) {
			var param = {
				shopId : shopId
			};
			post(_path + '/shop/favorite/cancel', JSON.stringify(param), callback);
		},
		/**
		 * 发帖接口
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		addNote : function(param, callback) {
			post(_path + '/note/add', JSON.stringify(param), callback);
		},

		/**
		 * 小区投票接口
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		voteResultAdd : function(voteOptionId, callback) {
			var param = {
				voteOptionId : voteOptionId
			}
			post(_path + '/announcement/vote/result/add', JSON.stringify(param), callback);
		},

		/**
		 * 获取用户信息
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		getUserDetail : function(callback) {
			post(_path + '/user/detail', null, callback);
		},

		/**
		 * 修改昵称
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		upUserNickname : function(param, callback) {
			post(_path + '/user/nickname/update', JSON.stringify(param), callback);
		},

		/**
		 * 修改用户真实姓名
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		upUserRealname : function(param, callback) {
			post(_path + '/user/realname/update', JSON.stringify(param), callback);
		},

		/**
		 * 更新用户手机号码
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		upUserTelno : function(param, callback) {
			post(_path + '/user/telno/update', JSON.stringify(param), callback);
		},

		/**
		 * 获取我的小区地址
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		getHouseList : function(callback) {
			post(_path + '/house/list', null, callback);
		},

		/**
		 * 删除我的小区地址
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		delHouse : function(param, callback) {
			post(_path + '/house/delete', JSON.stringify(param), callback);
		},

		/**
		 * 保存我的小区地址
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		saveHouse : function(param, callback) {
			post(_path + '/house/save', JSON.stringify(param), callback);
		},

		/**
		 * 超市自选
		 *
		 * @param {Object} param
		 * @param {Object} callback
		 */
		addSupermarketOptional : function(param, callback) {
			post(_path + '/supermarketOptional/add', JSON.stringify(param), callback);
		},


		/**
		 * 上传头像
		 *
		 * @param {Integer} id
		 * @param {String} path
		 * @param {Object} callback
		 */
		uploadPortrait : function(id, path, callback) {
			api.showProgress({
		        title: '头像上传中...',
		        modal: false//false可以移动页面
		    });
		//    console.log(id + " - " + path);
			api.ajax({
				url : _path + '/member/updateMyInfoJson.html',
				method : 'post',
				cache : false,
				timeout : REQ_TIMEOUT,
				data : {
					values : { 
						'id' : id
					},
					files : {
						'photoFile' : path
					}
				}
			}, function(ret, err) {
				if (err) {
					api.toast({
						msg : err.msg
					});

					return;
				} else {
					if(ret.result == 1) {
						var userInfo = $api.getStorage("userInfo");
						userInfo.photo = "/" + ret.photo;
						$api.setStorage("userInfo", userInfo);
						api.execScript({
							frameName : 'frm_infoView',
							script : 'setUserPhoto();'
						});
						api.execScript({
							name : "root",
							frameName : 'indexMain4',
							script : 'setUserInfo();'
						});
					} else {
						api.toast({
	                        msg: ret.msg,
	                        duration : 3500
                        });
					}
				}
				
				api.hideProgress();
				// 通讯层出错，关闭进度条（如果有的话）
				
				if ( typeof callback === 'function') {
					callback(ret, err);
				}
			});
		},
		/**
		 * 上传身份证
		 *
		 * @param {String} path
		 * @param {Object} callback
		 */
		uploadIdcardImg : function(path, callback) {
			api.showProgress({
		        title: '图片上传中...',
		        modal: false//false可以移动页面
		    });
			api.ajax({
				url : _path + '/idcard/upload',
				method : 'post',
				cache : false,
				timeout : REQ_TIMEOUT,
				data : {
					files : {
						'imageFile' : path
					}
				}
			}, function(ret, err) {
				if (err) {
					api.toast({
						msg : err.msg
					});

					return;
				} 
				
				api.hideProgress();
				// 通讯层出错，关闭进度条（如果有的话）
				
				if ( typeof callback === 'function') {
					callback(ret, err);
				}
			});
		},
		/**
		 * 更新我的加油卡信息
		 * @param {Object} param
		 * @param {Object} callback
		 */
		updateGascardUser: function(param, callback) {
			post(_path + '/gascardUser/update', JSON.stringify(param), callback);
		},
		
		/**
		 * 是否收藏商铺状态
		 * @param {Object} param
		 * @param {Object} callback
		 */
		shopfavoritestate : function(param, callback) {
			post(_path + '/shop/favorite/state', JSON.stringify(param), callback);
		},

		/**
		 * 是否收藏商品状态
		 * @param {Object} param
		 * @param {Object} callback
		 */
		goodsfavoritestate : function(param, callback) {
			post(_path + '/goods/favorite/state', JSON.stringify(param), callback);
		},

		/**
		 * 是否收藏商品状态
		 * @param {Object} param
		 * @param {Object} callback
		 */
		addSubscribe : function(param, callback) {
			post(_path + '/appointment/add', JSON.stringify(param), callback);
		},

		/**
		 * 收藏商品
		 * @param {Object} goodsId
		 * @param {Object} callback
		 */
		addFavoritegoods : function(goodsId, callback) {
			var param = {
				goodsId : goodsId
			}
			post(_path + '/goods/favorite/add', JSON.stringify(param), callback);
		},

		/**
		 * 取消收藏商品
		 * @param {Object} goodsId
		 * @param {Object} callback
		 */
		cancelFavoriteGoods : function(goodsId, callback) {
			var param = {
				goodsId : goodsId
			}
			post(_path + '/goods/favorite/cancel', JSON.stringify(param), callback);
		},

		/**
		 * 再次购买
		 *
		 * @param {String} orderId 订单ID
		 * @param {Function} callback 回调函数
		 */
		buyAgian : function(orderId, callback) {
			var param = {
				orderId : orderId
			}

			post(_path + '/buyAgain', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取我的受邀好友列表
		 *
		 * @param {String} recom 邀请码
		 * @param {Function} callback 回调函数
		 */
		getMyFriend : function(param, callback) {
			post(_path + '/myfriend/list', JSON.stringify(param), callback);
		},
	}
})(window);
