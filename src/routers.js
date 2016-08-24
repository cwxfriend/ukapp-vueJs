'use strict';

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '*': {
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '/product':{               //产品页
            name:'product',
            component: function(resolve){
                require(['./views/glocalme-product.vue'],resolve);
            }
        },
        '/login':{               //首页
            name:'login',
            component: function(resolve){
                require(['./views/glocalme-login.vue'],resolve);
            }
        },
        '/accountInfo':{               //账户信息
            name:'accountInfo',
            component: function(resolve){
                require(['./views/glocalme-accountInfo.vue'],resolve);
            },
            auth: true
        },
        '/flowhistory':{               //流量历史
            name:'flowhistory',
            component: function(resolve){
                require(['./views/glocalme-flowhistory.vue'],resolve);
            },
            auth: true
        },
        '/balanceList':{               //余额明细
            name:'balanceList',
            component: function(resolve){
                require(['./views/glocalme-balanceList.vue'],resolve);
            },
            auth: true
        },
        '/echart':{               //余额明细
            name:'echart',
            component: function(resolve){
                require(['./views/glocalme-echart.vue'],resolve);
            },
            auth: true
        },
        '/myOrder':{               //我的订单
            name:'myOrder',
            component: function(resolve){
                require(['./views/glocalme-myOrder.vue'],resolve);
            },
            auth: true
        },
        '/deviceActive':{               //激活设备
            name:'deviceActive',
            component: function(resolve){
                require(['./views/glocalme-deviceActive.vue'],resolve);
            },
            auth: true
        },
        '/myPackage':{               //我的订单
            name:'myPackage',
            component: function(resolve){
                require(['./views/glocalme-myPackage.vue'],resolve);
            },
            auth: true
        },
        '/modifyPassword':{               //修改密码
            name:'modifyPassword',
            component: function(resolve){
                require(['./views/glocalme-modifyPassword.vue'],resolve);
            },
            auth: true
        }
    })
}