/**
 * 广场接口组件
 *
 * @param {Object} window window对象
 */
(function(window) {
    var _name = '$square';

    // 重复引入检查
    if (checkDuplicate(_name)) {
        return;
    }

    var _version = "1.0.0";

    var _path = BASE_SERVER;

    window[_name] = {
        version : _version,

        /**
		 * 获取生猪运载车辆列表
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getPigTransVehicleList : function(param, callback) {
            MUI_get(_path + "pigTransVehicle/list", param, callback);
        },
        
        /**
         * 获取证明信息列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getInformationList : function(param, callback) {
			MUI_get(_path + "information/information", param, callback);
        },
        
        /**
         * 获取告警日志列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getAlarmLogList : function(param, callback) {
            MUI_get(_path + "alarmLog/list", param, callback);
        },
        
        /**
         * 获取屠宰围栏列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getFenceList : function(param, callback) {
            MUI_get(_path + "fence/list", param, callback);
        },
        
        /**
         * 获取消毒记录列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getDisinfectionRecordList : function(param, callback) {
            MUI_get(_path + "disinfectionRecord/list", param, callback);
        },
        
        /**
         * 获取洗消站管理列表。
         *
         * @param {Object} param 参数
         * @param {Function} callback 回调函数
         */
        getDecontaminatingList : function(param, callback) {
            MUI_get(_path + "decontaminating/list", param, callback);
        }
    };
})(window);
