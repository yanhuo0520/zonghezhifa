/**
 * 电商接口组件
 *
 * @param {Object} window window对象
 */
(function(window) {
	var _name = '$ecomm';

	// 重复引入检查
	if (checkDuplicate(_name)) {
		return;
	}

	var _version = "1.0.0";

	var _path = BIZ_SERVER + OWNER_MODULE + '/life';

	window[_name] = {
		version : _version,

		/**
		 * 获取奖品列表。
		 *
		 * @param {Function} callback 回调函数
		 */
		getAwardList : function(param,callback) {
			post(_path + '/award/list', JSON.stringify(param), callback);
		},

		/**
		 * 获取商铺点评列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getShopDetail : function(param, callback) {
			post(_path + '/shop/detail', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取商铺商品。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getShopGoodsList : function(param, callback) {
			post(_path + '/shop/goods/list', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取商铺点评列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getShopCommentList : function(param, callback) {
			post(_path + '/shop/comment/list', JSON.stringify(param), callback);
		},

		/**
		 * 获取附近商铺列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		seachShop : function(param, callback) {
			post(_path + '/shop/search', JSON.stringify(param), callback);
		},
		
		/**
         * 获取【 服务预约】商铺列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getShopOfSubscribe : function(param, callback) {
            post(_path + '/shop/appointment/list', JSON.stringify(param), callback);
        },
		
		/**
		 * 获取周边优惠列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getPromotionNearby : function(param, callback) {
			post(_path + '/preferentialActivity/list', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取商铺优惠列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getPromotionOfShop : function(param, callback) {
			post(_path + '/shop/preferentialActivity/list', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取超市代购列表。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getAllSuperMarketShopList : function(param, callback) {
			post(_path + '/supermarket/list', JSON.stringify(param), callback);
		},
		
		/**
		 * 获取主页搜索商品
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getSearchGoodsList : function(param, callback) {
			post(_path + '/goods/search', JSON.stringify(param), callback);
		},
		
		
		/**
		 * 获取积分广告。
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getScoreAdvertisementSlide : function(param, callback) {
			post(_path + '/score/advertisement/slide', JSON.stringify(param), callback);
		},
		/**
		 * 获取超市下的所有商品
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getSuperMarketGoodsListByShopId : function(param, callback) {
			post(_path + '/supermarket/goods/list', JSON.stringify(param), callback);
		},
		/**
		 * 获取 每日健康知识
		 *
		 * @param {Object} param 参数
		 * @param {Function} callback 回调函数
		 */
		getHealthDaily : function(param, callback) {
			post(_path + '/health/daily', JSON.stringify(param), callback);
		}
	};
})(window);
