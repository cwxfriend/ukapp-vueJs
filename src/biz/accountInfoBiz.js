/**
 * Created by chenwenxiao on 2016/8/19.
 */


import ajax from '../libs/glocalme/ajax'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import authorize from '../libs/glocalme/authorizeHelper'



class accountInfo {
	query(that){
		return new Promise(function(resolve,reject){
			let data = {
				
			};
            let an = new authorize();
            an.authorize(data);

			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.accountInfo,
				method: 'post',
				authorize:true,
				data: data
			}).then(function(d) {
				if(d.resultCode == '00000000'){
					resolve(d);
				}else{
					reject(d);
				}
			}, function(ed) {
				reject(ed);
			});
		});
	}

	queryIdentify() {
		return new Promise(function(resolve,reject){
			let dicData = {
				type: 'IDENTIFICATIONTYPE',
				langType: localStorage.language || 'zh-CN'
			};
	        let an = new authorize();
			an.authorize(dicData);

			ajax.ajax({
				url: conf.config.getDictionay,
				method: 'get',
				authorize: true,
				data: dicData,
			}).then(function(d1) {
				if(d1.resultCode == '00000000'){
					resolve(d1);
				}else{
					reject(d1);
				}
			}, function(ed) {
				reject(ed);
			});
		});
	}

	save(data){
		return new Promise(function(resolve,reject){
	        let an = new authorize();
			an.authorize(data);
			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.updateAccountInfo,
				method: 'post',
				authorize: true,
				data: data,
			}).then(function(d1) {
				resolve(d1);
			}, function(ed) {
				reject(ed);
			});
		});
	}

}
export default accountInfo;