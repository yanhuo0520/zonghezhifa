/**
 * 时间工具函数。
 *
 * @param {Object} window window对象
 */
(function(window) {
    var _util = {
    	/**
    	 *校验身份证号正确 
    	 */
    	checkIdCard:function(card){
		   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
		   var reg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		   if(reg.test(card) === false)  
		   {  
		       return  false;  
		   }  
		   return true;
    	},
    	checkSjh:function(tel){//校验手机号
			 var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
			 if (reg.test(tel)) {
			      return true;
			 }else{
			      return false;
			 };
		},
		isPositiveNum:function(s){//是否为正整数 
			var re = /^[0-9]*[1-9][0-9]*$/ ; 
			return re.test(s);
		},
        /**
         * 格式化时间。
         *
         * 格式：HH:mm
         * @param {Integer} hour
         * @param {Integer} minute
         */
        formatTime : function(hours, minutes) {
            var out = '';
            if (hours < 10) {
                out += '0';
            }
            out += hours;
            out += ':';
            if (minutes < 10) {
                out += '0';
            }
            out += minutes;

            return out;
        },

        /**
         * 格式化日期。
         *
         * 格式：yyyy-MM-dd
         *
         * @param {Integer} year 年份
         * @param {Integer} month 月份
         * @param {Integer} day 日
         */
        formatDate : function(year, month, day) {
            var out = year + '-';
            if (month < 10) {
                out += '0';
            }
            out += month;
            out += '-';
            if (day < 10) {
                out += '0';
            }
            out += day;

            return out;
        },

        /**
         * 格式化日期。
         *
         * 格式：yyyy-MM-dd
         *
         * @param {Integer} year 年份
         * @param {Integer} month 月份
         * @param {Integer} day 日
         */
        formatDateTime : function(date) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            return this.formatDate(year, month, day) + ' ' + this.formatTime(hours, minutes);
        }, 
        /**
         * 格式化加油卡号
 		 * @param {Object} gascardNo
         */
        formatGascardNo:function(gascardNo){
			if(!gascardNo||(gascardNo.length!=16&&gascardNo.length!=19)){
				return "";
			}
			return "***"+gascardNo.substring(gascardNo.length-4,gascardNo.length);
		},
		/**
		 * 格式化手机号
 		 * @param {Object} mobilePhone
		 */
		formatMPhone:function(mobilePhone){
			if(!mobilePhone||mobilePhone.length!=11){
				return "";
			}
			return mobilePhone.substring(0,4)+"***"+mobilePhone.substring(8,11);
		},
		
		formatIdcardCard:function(idcard){
			return idcard;
		},
		formatGascard:function(gascard){
			return (gascard.gascardType==3?"自绑·中石化":(gascard.gascardType==2?"爱帮·中石化":"爱帮·中石油"))+this.formatGascardNo(gascard.cardNo)+(gascard.backup1?"("+gascard.backup1+")":"");
		},
		formatGascard2:function(gascard){
			return this.formatGascardNo(gascard.cardNo)+"("+(gascard.gascardType==3?"自绑·中石化":(gascard.gascardType==2?"爱帮·中石化":"爱帮·中石油"))+")";
		}
    };

    window.$util = _util;

    function _getMsg(data) {
        var msg = "";
        if (data.length > 0) {
            msg += JSON.stringify(data[0]);
        }

        for (var i = 1; i < data.length; i++) {
            msg += ', ';
            msg += JSON.stringify(data[i]);
        }

        if (data.length > 1) {
            msg = '[' + msg + ']';
        }

        return msg;
    }

    var _log = {
        debug : function() {
            console.debug(_getMsg(arguments));
        },

        info : function() {
            console.info(_getMsg(arguments));
        },
        
        log : function() {
            console.log(_getMsg(arguments));
        },
        
        warn : function() {
            console.warn(_getMsg(arguments));
        },

        error : function() {
            console.error(_getMsg(arguments));
        }
    };

    window.$log = _log;

//  NodeList.prototype.each = Array.prototype.each = function(callback){
//      for(var i = 0; i != this.length; i++){
//          if(callback(i, this[i]) === false){
//              break;
//          }
//      }
//  }
 	  String.prototype.trim=function(){
	　　    return this.replace(/(^\s*)|(\s*$)/g, "");
	　　 };
	　　 String.prototype.ltrim=function(){
	　　    return this.replace(/(^\s*)/g,"");
	　　 };
	　　 String.prototype.rtrim=function(){
	　　    return this.replace(/(\s*$)/g,"");
	　　 };
})(window);
