/**
 * 通用接口组件。
 *
 * @param {Object} window window对象
 */
(function(window) {
    var _name = '$comm';

    // 重复引入检查
    if (checkDuplicate(_name)) {
        return;
    }

    var _version = "1.0.0";

    var _path = BIZ_SERVER + COMMON_MODULE;

    window[_name] = {
        version : _version,

        /**
         * 用户登录。
         *
         * @param {String} username 用户名
         * @param {String} password 密码
         * @param {Function} callback 回调函数
         */
        login : function(mobilePhone, password, callback) {
            var param = {
                mobilePhone : mobilePhone,
                password : password,
                role : '1'
            };

            post(_path + '/login', JSON.stringify(param), callback);
        },

        /**
         * 用户登出。。
         *
         * @param {Function} callback 回调函数
         */
        logout : function(callback) {
            post(_path + '/logout', null, callback);
        },

        /**
         * 版本检查。
         *
         * @param {Function} callback 回调函数
         */
        versionCheck : function(callback) {
            var param = {
                clientType : 1,
                version : api.appVersion
            };
            post(_path + '/version/get', JSON.stringify(param), callback);
        },

        /**
         * 获取验证码。
         *
         * @param {Function} callback 回调函数
         */
        getVerificationCode : function(param, callback) {
            post(_path + '/getVerificationCode', JSON.stringify(param), callback);
        },

        /**
         * 校验验证码。
         *
         * @param {String} mobilePhone 电话号码
         * @param {String} vrfCode 验证码
         * @param {Function} callback 回调函数
         */
        checkVrfCode : function(mobilePhone, vrfCode, callback) {
            var param = {
                mobilePhone: mobilePhone,
                verificationCode: vrfCode,
                type:1
            }
            
            post(_path + '/checkVerificationCode', JSON.stringify(param), callback);
        },
        /**
         * 校验验证码。
         *
         * @param {String} mobilePhone 电话号码
         * @param {String} vrfCode 验证码
         * @param {String} type  1 2 3 4
         * @param {Function} callback 回调函数
         */
        checkVrfCode : function(mobilePhone, vrfCode,type, callback) {
            var param = {
                mobilePhone: mobilePhone,
                verificationCode: vrfCode,
                type:type
            }
            
            post(_path + '/checkVerificationCode', JSON.stringify(param), callback);
        },
        /**
         * 获取分享信息。
         *
         * @param {Function} callback 回调函数
         */
        getShareInfo : function(callback) {
            post(_path + '/client/shareInfo/get', null, callback);
        },
        
        /**
         * 找回密码。
         *
         * @param {Function} callback 回调函数
         */
        getRetrievePassword : function(mobilePhone, vrfCode, password,callback) {
            var param = {
                mobilePhone: mobilePhone,
                verificationCode: vrfCode,
                password: password
            }
            post(_path + '/retrievePassword', JSON.stringify(param), callback);
        },
        /**
         * 注册。
         *
         * @param {Function} callback 回调函数
         */
        register : function(param, callback) {
            post(_path + '/register', JSON.stringify(param), callback);
        }
    };
})(window);
