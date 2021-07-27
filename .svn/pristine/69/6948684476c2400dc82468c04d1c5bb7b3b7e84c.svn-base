/**
 * 页面函数。
 *
 * @param {Object} window
 *
 */
(function(window) {
	// 分页对象
    var page = {
		pageNum : 1,
		pageSize : REQ_PAGE_SIZE
    };

	function getOption(value, defaultValue) {
		return value === undefined ? defaultValue : value;
	}

	var _page = {
		/**
		 * 页面加载。
		 *
		 * @param {Object} option 配置项，详见下方@option
		 * @option {Boolean} autoload：是否自动加载
		 * @option {Boolean} allowRefresh：是否允许头部下拉刷新
		 * @option {Boolean} allowLoadMore：是否允许底部上划加载更多
		 * @option {Function} loadFun：数据加载函数
		 * @option {Object} loadParam：数据加载函数参数
		 * @option {Boolean} usePage：是否使用分页
		 * @option {Function} context：取渲染数据函数
		 * @option {String} loadAllTip：无更多数据时的提示
		 * @option {String} nodataTip：无数据时的提示
		 * @option {String} container：渲染目标DIV
		 * @option {String} template：渲染模板
		 * @option {String} imgDir：图片目录
		 * @option {Array} storage：数据存储对象
		 */
		render: function(option) {
			// 恢复分页参数
		//	page.pageNum = 1;
			// 选项默认值设定
			var autoload = getOption(option.autoload, true);
			var allowRefresh = getOption(option.allowRefresh, true);
			var allowLoadMore = getOption(option.allowLoadMore, true);
			var loadFun = option.loadFun;
			var loadParam = getOption(option.loadParam, {});
			var usePage = getOption(option.usePage, true);
			var context = option.context;
			var loadAllTip = getOption(option.loadAllTip, '已加载全部数据');
			var nodataTip = getOption(option.nodataTip, '暂无数据');
			var container = getOption(option.container, 'dotContainer');
			var template = getOption(option.template, 'dotTemplate');
			var imgDir = getOption(option.imgDir, '../../image');
			var storage = option.storage;

			/**
			 * 数据加载函数。
			 *
			 * @param {Object} option 配置
			 * @param {Function} callback 回调函数(参数为加载的数据)
			 * @param {Boolean} append 是否追加渲染
			 */
			var loadData = function(option, callback, append) {
				// @option {Function} loadFun：数据加载函数
				// @option {Object} loadParam：数据加载函数参数
				if (loadFun) {
					//	先显示进度条
					plus.nativeUI.showWaiting("正在加载...");
					// plus.nativeUI.showWaiting("正在加载...", {
					// 	loading: {
					// 		icon: "images/loading.gif"
					// 	}
					// });
					
					append = loadParam.append;
					
					//	@option {Boolean} usePage：是否使用分页
					if (usePage) {
						console.debug('检测使用分页,分页参数为:' + JSON.stringify(loadParam));
					}

					loadFun(loadParam, function(ret) {
					//	console.log(JSON.stringify(ret));
						// 处理异常信息
						if (ret.code != 0) {
							// api.toast({
							//     msg : ret.errmsg
							// });

							if (callback) {
								callback(null);
							}

							return;
						}
						// 对获取到的数据做预处理
						// @option {Function} context：取渲染数据函数
						var data;
						var data_1;
						if (context) {
							data = context(ret);
						}
						// 没有获取到数据时的处理
						if (data === null || data === undefined || data == "") {
							if (usePage && loadParam.pageNum > 1) {
								if (loadAllTip && loadAllTip != "") {
									mui.toast(loadAllTip);
								}
							} else {
								if (nodataTip && nodataTip != "") {
									mui.toast(nodataTip);
								}
							}

							if (callback) {
								callback(null);
							}

							// 关闭进度条
							plus.nativeUI.closeWaiting();
							
							return;
						}
						
						// page.pageNum++;
						
						if (storage) {
							var preLen = storage.length;
							if (!append) {
								while (storage.length > 0) {
									var last = storage.pop();
									delete last;
								}
							}

							for (var i = 0; i < data.list.length; i++) {
								storage.push(data.list[i]);
							}

							var newLen = storage.length;
							console.debug('数据存储更新,原长度：' + preLen + ', 新长度：' + newLen);
						}

						// 关闭进度条
						plus.nativeUI.closeWaiting();
						// 执行渲染
						// @option {String} container：渲染目标DIV
						// @option {String} template：渲染模板
						// @option {String} imgDir：图片目录
						$UI(container).dotRender(template, data, function(target) {
							$UI(container).fixImgError(imgDir);
							
							// 执行回调
							if (callback) {
								callback(data);
							}
						}, append);
					})
				}
			}
			/*
			 * @option {Boolean} autoload：是否自动加载
			 */
			if (autoload) {
				// 自动加载
				loadData(option);
			}
		}
		
	}
	window.$page = _page;
})(window);
