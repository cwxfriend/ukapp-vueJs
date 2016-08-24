/**
 * Created by chenwenxiao on 2016/8/19.
 */


import ajax from '../libs/glocalme/ajax'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import authorize from '../libs/glocalme/authorizeHelper'



class deviceActiveBiz {

	save(data){
		return new Promise(function(resolve,reject){
	        let an = new authorize();
			an.authorize(data);
			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.activeDevice,
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
export default deviceActiveBiz;