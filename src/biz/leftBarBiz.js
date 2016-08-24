/**
 * Created by chenwenxiao on 2016/8/23.
 */



import ajax from '../libs/glocalme/ajax'
import cookie from '../libs/glocalme/cookieHelper'
import conf from './config'
import authorize from '../libs/glocalme/authorizeHelper'



class leftBarBiz {

    query(data){
        return new Promise(function(resolve,reject){
            let an = new authorize();
            an.authorize(data);
            data = JSON.stringify(data);
            ajax.ajax({
                url: conf.config.queryBalanceInfo,
                method: 'post',
                data: data
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

}
export default leftBarBiz;