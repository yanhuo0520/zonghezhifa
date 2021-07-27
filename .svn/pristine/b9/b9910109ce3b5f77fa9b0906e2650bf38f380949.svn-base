/**
 * $UI函数
 *
 * @param {Object} window
 */
(function(window)
	{"use strict";
	if (typeof (doT) == 'undefined') {
		console.warn('typpof(doT)=' + typeof (doT));
		console.warn('doT.js must reference before this script!');
		return;
	}

	if (window.$UI) {
		console.warn('detect multiple reference!');
		return;
	}

	var _version = "1.0.0";

	var _cache = [];

	/**
	 * 获取UI对象
	 *
	 * @param String id
	 */
	function _UI(id) {
		// 缓存优先
		if (_cache[id]) {
			return _cache[id];
		}

		// id必须为字符串
		if (typeof id !== 'string') {
			console.error('illegal arguments:id must be string');
			console.error('\tid=' + id);
			return null;
		}

		// ID对应的DOM节点必须存在
		var _target = document.getElementById(id);
		if (!_target) {
			console.error('can not find element with this id');
			console.error('\tid=' + id);
			_target = null;
			return null;
		}

		// ID对应的DOM节点必须为DIV
		if (!(_target instanceof HTMLDivElement)) {
			console.error('target element must be HTMLDivElement');
			console.error('\tid=' + id);
			console.error('\ttarget=' + _target);
			_target = null;
			return null;
		}

		var _ui = {
			/**
			 * 获取目标对象
			 */
			getTarget : function() {
				return _target;
			},

			/**
			 *  渲染函数。
			 *
			 * @param {Object} template 模板ID
			 * @param {Object} context 上下文数据
			 * @param {Function} callback 回调函数
			 * @param {Boolean} append 是否追加
			 */
			dotRender : function(template, context, callback, append) {
				if (template && context) {
					var templateContent = document.getElementById(template).text;
					var html = doT.template(templateContent)(context);
					if (append) {
						_target.innerHTML += html;
					} else {
						_target.innerHTML = html;
					}
					//console.log(html);
				//	api.parseTapmode();
					if (callback && typeof callback === 'function') {
						callback(_target);
					}
				} else {
					console.warn('illegal arguments[');
					console.warn('\ttemplate=' + template);
					console.warn('\tcontext=' + context);
					console.warn(']');
				}
			},
			fixImgError : function(imgFolder) {
				var imgs = _target.querySelectorAll('img');
				for (var i = 0; i < imgs.length; i++) {
					imgs[i].onerror = function() {
						this.src = imgFolder + '/empty_photo.png';
					}
				}
			}
		}

		_cache[id] = _ui;

		return _ui;
	};

	_UI.version = _version;

	/**
	 * 算星星函数。
	 */
	_UI.renderStars = function(stars, imgFolder) {
		var full = Math.floor(stars);
		var none = Math.floor(5 - stars);
		var half = 5 - full - none;
		if (half > 0 && half < 0.5) {
			half = 0;
			none++;
		}

		var out = '';
		for (var i = 0; i < full; i++) {
			out += '<img src="' + imgFolder + '/rstar-10.png" />';
		}

		if (half) {
			out += '<img src="' + imgFolder + '/rstar-05.png" />';
		}

		for (var i = 0; i < none; i++) {
			out += '<img src="' + imgFolder + '/rstar-00.png" />';
		}

		return out;
	}

	window.$UI = _UI;
})(window); 