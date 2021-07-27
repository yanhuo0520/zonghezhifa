/**
 * 鍝嶅簲寮忔暟瀛楅敭鐩樻彃浠� js锛堝熀浜巎query)
 * time:2018-7-11
 * author:lyn
 */
;
(function($) {
	var mynumbk = function(element, option) {
		var defaults = {
			style: 1, //颜色风格
			textDone: '确定',
			textDelete: '退格',
			textClear: '清除',
			textCancel: '退出',
			valueArea: 0, // 0:输入的值小于10； 1:输入的值大于10
			textSubtract: '*'
		}
		this.target = ''; //褰撳墠娣诲姞鐨勮妭鐐�
		this.ele = $(element);
		this.opt = $.extend({}, defaults, option);
		this.init();
		this.targetValue = "";
		this.pinotInput_flag = true;
	}
	mynumbk.prototype = {
		init: function() {
			this.initHtml();
			this.openLayer();
			this.exitLayer();
			this.insertNum();
			this.delNum();
			this.clearNum();
			this.sureNum();
			this.setStyle();
		},
		initHtml: function() {
			var index = $(".numbk_layer").length + 1;
			var _html = [
				'<div id="numbk' + index + '" class="numbk_layer">',
					'<div class="numbk_mask"></div>',
					'<div class="numbk_actionsheet f-row">',
						'<ul class="numbk_items w-num-input">',
							'<li class="numbk_num">1</li>',
							'<li class="numbk_num">2</li>',
							'<li class="numbk_num">3</li>',
							'<li class="numbk_num">4</li>',
							'<li class="numbk_num">5</li>',
							'<li class="numbk_num">6</li>',
							'<li class="numbk_num">7</li>',
							'<li class="numbk_num">8</li>',
							'<li class="numbk_num">9</li>',
							'<li class="numbk_num">.</li>',
							'<li class="numbk_num">0</li>',
							'<li class="numbk_num">' + this.opt.textSubtract + '</li>',
						'</ul>',
						'<ul class="numbk_items w-num-func f-column">',
							'<li class="numbk_func numbk_del">' + this.opt.textDelete + '</li>',
							'<li class="numbk_func numbk_clear">' + this.opt.textClear + '</li>',
							'<li class="numbk_func numbk_sure">' + this.opt.textDone + '</li>',
						'</ul>',
					'</div>',
				'</div>'
			].join("");
			this.target = $(_html);
			$("body").append(this.target);
		},
		setStyle: function() {
			switch (this.opt.style) {
				case 1:
					$(".numbk_actionsheet", this.target).css("background", "rgba(0,0,0,0.6)");
					$(".numbk_items .numbk_num", this.target).css("color", "#1b50a2");
					//	$(".numbk_items .numbk_screen",this.target).css("color","#1b50a2");
					break;
				case 2:
					$(".numbk_actionsheet", this.target).css("background", "rgba(167, 167, 167, 0.6)");
					$(".numbk_items .numbk_num", this.target).css("color", "#0e90d2");
					//	$(".numbk_items .numbk_screen",this.target).css("color","#0e90d2");
					break;
				case 3:
					$(".numbk_actionsheet", this.target).css("background", "rgba(167, 167, 167, 0.6)");
					$(".numbk_items .numbk_num", this.target).css("color", "#0e90d2");
					//	$(".numbk_items .numbk_screen",this.target).css("color","#0e90d2");
					$(".numbk_items li", this.target).css("font-weight", "100");
					break;
				default:
					$(".numbk_actionsheet", this.target).css("background", "rgba(167, 167, 167, 0.6)");
					$(".numbk_items .numbk_num", this.target).css("color", "#0e90d2");
					//	$(".numbk_items .numbk_screen",this.target).css("color","#0e90d2");
					$(".numbk_items li", this.target).css("font-weight", "100");
					break;
			}
		},
		openLayer: function() {
			var that = this;
			that.ele.on("click", function() {
				$(this).attr("readonly", "readonly");
				var inputVal = isNaN(that.ele.val()) ? '' : that.ele.val();
				$(".numbk_screen", that.target).text(inputVal);
				that.targetValue = inputVal;
				$(that.target).show('fast', function() {
					$(".numbk_actionsheet", that.target).slideDown();
				});
			})
		},
		exitLayer: function() {
			var that = this;
			$(".numbk_mask,.numbk_exit", that.target).on("click", function() {
				that.targetValue = "";
				$(".numbk_actionsheet", that.target).slideUp('fast', function() {
					$(that.target).hide();
					$(this).removeAttr("readonly");
				});
			})
		},
		insertNum: function() {
			var that = this;
			$(".numbk_num", that.target).on("click", function() {
				var currentVal = that.ele.val();
				var currentKey = $(this).text();
				if (currentKey == that.opt.textSubtract) {
					var last_char = currentVal.substring(currentVal.length - 1, currentVal.length);
					if(last_char == ".") {
						currentVal = currentVal.substring(0, currentVal.length - 1);
					}
					if(currentVal != "") {
						currentVal = currentVal.toString() + currentKey;
					}
					that.pinotInput_flag = true;
				} else if (currentKey == ".") {
					if(that.pinotInput_flag) {
						if(currentVal == "") {
							currentVal = "0";
						}
						currentVal = currentVal.toString() + currentKey;
						that.pinotInput_flag = false;
					}
				} else if (currentKey == "0" && (currentVal == "" || currentVal == "0")) {
					currentVal = "0";
				} else {
					currentVal == "0" ? currentVal = "" : currentVal;
					currentVal = currentVal.toString() + $(this).text();
				}
				var currentVals = currentVal.split("*");
				var last_currentVal_child = currentVals[currentVals.length - 1];
				var currentVal_subs = last_currentVal_child.split(".");
				if(currentVal_subs[1] && currentVal_subs[1].length > 2) {
					mui.toast("重量只保留两位小数");
					return;
				}
				if(that.opt.valueArea == 0) {
					if(last_currentVal_child >= 10.0) {
						mui.toast("重量输入需  小于 10 KG");
						return;
					}
				} 
				// else {
				// 	if(last_currentVal_child < 10.0) {
				// 		mui.toast("重量输入需  不小于 10 KG");
				// 		return;
				// 	}
				// }
				that.targetValue = currentVal;
				that.ele.val(that.targetValue);
			})
		},
		delNum: function() {
			var that = this;
			$(".numbk_del", that.target).on("click", function() {
				var currentVal = that.ele.val();
				if (currentVal == "") {
					return;
				}
				
				var last_char = currentVal.substring(currentVal.length - 1, currentVal.length);
				var currentVals = currentVal.split("*");
				var last_currentVal_child = currentVals[currentVals.length - 2];
				
				currentVal = currentVal.substring(0, currentVal.length - 1);
				
				if(last_currentVal_child && last_currentVal_child.indexOf(".") != -1 && last_char == "*") {
					that.pinotInput_flag = false;
				}
				
				if (currentVal == "") {
					that.pinotInput_flag = true;
				}
				
				that.targetValue = currentVal;
				that.ele.val(that.targetValue);
			})
		},
		clearNum: function() {
			var that = this;
			$(".numbk_clear", that.target).on("click", function() {
				that.targetValue = "";
				that.ele.val(that.targetValue);
			})
		},
		sureNum: function() {
			var that = this;
			$(".numbk_sure", that.target).on("click", function() {
				$(".numbk_actionsheet", that.target).slideUp('fast', function() {
					$(that.target).hide();
					$(this).removeAttr("readonly");
				});
			})
		}
	}
	var methods = {
		init: function(element, option) {
			var mynumbkClass = new mynumbk(element, option);
		},
		setValue: function() {
			$(this).val(arguments[0]);
		},
		getValue: function() {
			return $(this).val();
		}
	}
	$.fn.numbk = function(method) {
		var numbkArgument = arguments;
		if (typeof method === 'object' || !method) {
			return this.each(function() {
				methods.init(this, method);
			})
		} else if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(numbkArgument, 1));
		} else {
			console.log('The incoming method does not exist');
		}
	}
}(jQuery))
