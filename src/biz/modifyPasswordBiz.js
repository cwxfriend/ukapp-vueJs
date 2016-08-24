/**
 * Created by chenwenxiao on 2016/8/19.
 */


import ajax from '../libs/glocalme/ajax'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import authorize from '../libs/glocalme/authorizeHelper'
import md5 from '../libs/md5'



class modifyPasswordBiz {

	save(data){
		return new Promise(function(resolve,reject){
	        let an = new authorize();
	        data.oldPwd = md5.faultylabs.MD5(data.oldPwd).toLowerCase();
	        data.newPwd = md5.faultylabs.MD5(data.newPwd).toLowerCase();
			an.authorize(data);
			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.modifyPassword,
				method: 'post',
				data: data,
			}).then(function(d1) {
				resolve(d1);
			}, function(ed) {
				reject(ed);
			});
		});
	}

}
export default modifyPasswordBiz;