/**
 * Created by chenwenxiao on 2016/8/19.
 */

import ajax from '../libs/glocalme/ajax'
import md5 from '../libs/md5'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import session from './sessionControlBiz'



class login {
	loginIn(that){
		return new Promise(function(resolve,reject){
			let data = {
				loginType: "PWD",
				channelType: "WEB",
				streamNo: "WEB2016081905145849869",
				userCode: that.userCode,
				mvnoCode: 'GLCAM',
				password: md5.faultylabs.MD5(that.pwd).toLowerCase(),
				clientId: "php160",
				clientSecret: "php160",
			};
			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.login,
				method: 'post',
				data: data
			}).then(function(d) {
				if(d.resultCode == '00000000'){
					var cok = new cookie();
					localStorage.username = that.userCode;
					localStorage.loginCustomerId = d.userId;
					localStorage.accessToken = d.accessToken;
					cok.setCookie('loginCustomerId',d.userId,1);
					cok.setCookie('access_token',d.accessToken,1);
					let se = new session();
					se.initCon();
					resolve(d);
				}else{
					reject(d);
				}
			}, function(ed) {
				console.warn(ed);
			});
		});
	}
}
export default login