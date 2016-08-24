/**
 * Created by chenwenxiao on 2016/8/19.
 */


import ajax from '../libs/glocalme/ajax'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import authorize from '../libs/glocalme/authorizeHelper'



class balanceListBiz {

	query(data){
		var that = this;
		return new Promise(function(resolve,reject){
	        let an = new authorize();
			an.authorize(data);
			data = JSON.stringify(data);
			ajax.ajax({
				url: conf.config.getBalanceList,
				method: 'post',
				data: data
			}).then(function(d1) {
				that.queryDic('PAYMETHOD').then(function(d) {
					var paymethod = {};
					for (let i = 0; i < d.data.length; i++) {
						paymethod[d.data[i].key] = d.data[i].value;
					}
					for (let i = 0; i < d1.data.dataList.length; i++) {
						d1.data.dataList[i].payMethod = paymethod[d1.data.dataList[i].payMethod];
					}
				},that.error).then(function(){
					that.queryDic('HANDLETYPE').then(function(d){
						var paymethod = {};
						var mainType = {SUBSTRACT:'减少'};
						for (let i = 0; i < d.data.length; i++) {
							paymethod[d.data[i].key] = d.data[i].value;
						}
						for (let i = 0; i < d1.data.dataList.length; i++) {
							d1.data.dataList[i].operateType = paymethod[d1.data.dataList[i].operateType];
							d1.data.dataList[i].mainType = mainType[d1.data.dataList[i].mainType];
						}
						resolve(d1)
					},that.error);
				},that.error);
			}, function(ed) {
				reject(ed);
			});
		});
	}
	queryDic(type) {
		return new Promise(function(resolve,reject){
			let dicData = {
				type: type,
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
	error(d){
		console.warn(d)
	}

}
export default balanceListBiz;