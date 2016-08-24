/**
 * Created by chenwenxiao on 2016/8/19.
 */

"use strict";

let config = {
    login:'/bss/app/noauth/QuickUserLogin',
    accountInfo:'/bss/app/user/QueryUserInfo',
    updateAccountInfo:'/bss/app/user/UpdateUserInfo',
    getDictionay:'/bss/dictionary/queryDictionaryByLang',
    modifyPassword:'/bss/app/user/UpdatePassword',
    activeDevice:'/bss/app/terminal/QueryDeviceBindingInfo',
    getBalanceList:'/bss/app/user/QueryBalanceList',
    queryBalanceInfo:'/bss/app/user/QueryBalanceInfo',
    queryUserOfferList:'/bss/app/orderRelation/QueryUserOfferList',
    queryOrderList:'/bss/app/order/QueryOrderList',
    queryFlowHistory:'/bss/app/user/QueryFlowHistory',
    queryBalanceList:'/bss/app/user/QueryBalanceList'
};

exports.config = config;
