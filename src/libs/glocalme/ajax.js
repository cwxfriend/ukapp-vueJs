/**
 * Created by chenwenxiao on 2016/8/19.
 */

"use strict";
import $ from '../jquery.min'
import session from '../../biz/sessionControlBiz'

let ajax = function(opt){
    return new Promise(function(resolve, reject) {
        let se = new session();
        se.setTimer();
        if($){
            $.ajax({
                dataType:'json',
                contentType: 'application/json;charset=utf-8',
                success:function(d){
                    resolve(d);
                },
                beforeSend: function (request) {
                    request.setRequestHeader("Accept-Language", localStorage.language);
                },
                data:opt.data,
                url:opt.url,
                type:opt.method,
                error:function(e){
                    reject(e);
                }
            });
        }else{
            reject('没有引入jquery库，代码无法运行！');
        }
    });
};
exports.ajax = ajax;
