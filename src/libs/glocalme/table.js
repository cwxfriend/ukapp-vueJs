/**
 * Created by chenwenxiao on 2016/8/23.
 */

import ajax from './ajax'
import authorize from './authorizeHelper'
import timeFormat from './timeFormat'
import $ from '../jquery.min'


class table {
    //计算页面显示页数
    setPageSizes(opt){
        var pageMsize = opt.pageSize;
        var totalPage = opt.totalPage;
        var pageNum = opt.pageNum;
        var pageSizes = [];
        if (totalPage >= pageMsize) {
            var begin = 0;
            var end = 0;
            if (pageNum < pageMsize / 2) {
                begin = 1;
                end = pageMsize;
            } else if (pageNum > (totalPage - pageMsize / 2)) {
                begin = totalPage - pageMsize + 1;
                end = totalPage;
            } else {
                begin = pageNum - parseInt(pageMsize / 2);
                end = pageNum + parseInt(pageMsize / 2)
            }
            for (let i = begin; i <= end; i++) {
                pageSizes.push(i);
            }
        } else {
            for (let i = 1; i <= totalPage; i++) {
                pageSizes.push(i);
            }
        }
        if (pageSizes.length == 0) {
            pageSizes.push(1);
        }
        return pageSizes;
    }
    queryData(opt) {
        return new Promise(function (resolve, reject) {
            opt.data = $.extend({ perPageCount:opt.perPage,currentPage:opt.curPage||1 },opt.data);
            let an = new authorize();
            an.authorize(opt.data);
            if(opt.json){
                opt.data = JSON.stringify(opt.data);
            }
            ajax.ajax({
                method:opt.method,
                data:opt.data,
                url:opt.url
            }).then(resolve,reject);
        });
    }
    getDuceData(opt){
        var that = this;
        return new Promise(function (resolve, reject) {
            let optQuery = {
                url:opt.url,
                method:opt.method,
                data:opt.dataPost,
                json:opt.json,
                perPage:opt.perPage,
                curPage:opt.currPage
            };
            let duce = function(data) {
                var oldData = $.extend({}, data);

                if (data.data != undefined) {
                    if (opt.timeFormat != undefined) {
                        var timeF = new timeFormat();
                        for (let i = 0; i < opt.timeFormat.length; i++) {
                            for (let j = 0; j < data.data.dataList.length; j++) {
                                try {
                                    data.data.dataList[j][opt.timeFormat[i]] = timeF.getFormatTime(data.data.dataList[j][opt.timeFormat[i]]);
                                } catch (es) {
                                }
                            }
                        }
                    }
                }
                let reData = {
                    data:data.data.dataList,
                    totalPage:data.data.totalPage,
                    totalRecord:data.data.totalRecord,
                    parton:opt.parton,
                    lanObj:opt.lanObj,
                    pageNow:data.data.pageNum,
                    pages:that.setPageSizes({
                      pageSize:opt.pageSize,
                      totalPage:data.data.totalPage,
                      pageNum:data.data.pageNum
                    })
                };
                resolve(reData, oldData);
            };
            let faild = function(data){
                console.warn(data);
            };
            that.queryData(optQuery).then(duce,faild);
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
                data: dicData
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
export default table;
