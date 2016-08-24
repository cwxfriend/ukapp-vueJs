/**
 * Created by chenwenxiao on 2016/8/19.
 */

"use strict";
import ajax from './ajax'

let getLan = function(name) {
    return new Promise(function(resolve, reject) {
        var lan;
        if(localStorage.language === undefined){
            lan = window.navigator.language;
        }else{
            lan = localStorage.language;
        }
        ajax.ajax({
            data: {},
            url: '/dist/i18n/' + lan + '/' + name + '.json',
            method: 'get'
        }).then(function(d){
            resolve(d);
        },function(d){
            reject(d);
        });
    });
};

exports.getLan = getLan;
