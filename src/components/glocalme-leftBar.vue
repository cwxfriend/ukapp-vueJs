<template>
    <div class="pa_left_div fl">
        <div class="pa_accountinfo">
            <div class="pa_account_name clear">
                <img class="current" id="headIcon" src="../assets/images/glocalme/headPortrait_lady.png">
                <span id="username" class="ellipsis" title="{{user}}">{{user}}</span>
            </div>

            <div class="pa_balance">{{lan.pay}}<span id="balance">{{pay}}</span></div>

            <div class="pa_charge"><button id="charge" v-text="lan.paynow"></button></div>

            <div class="pa_nav">
                <ul>
                    <li><a href="javascript:" v-link="{name:'accountInfo'}" id="accountInfo" v-text="lan.account"></a></li>
                    <li><a href="javascript:" v-link="{name:'myPackage'}" id="myPackage" v-text="lan.pak"></a></li>
                    <li><a href="javascript:" v-link="{name:'myOrder'}" id="myOrder" v-text="lan.order"></a></li>
                    <li><a href="javascript:" v-link="{name:'flowhistory'}" id="flowhistory" v-text="lan.his"></a></li>
                    <li><a href="javascript:" v-link="{name:'deviceActive'}" id="deviceActive" v-text="lan.active"></a></li>
                    <li><a href="javascript:" v-link="{name:'balanceList'}" id="balanceList" v-text="lan.balanceList"></a></li>
                    <li><a href="javascript:" v-link="{name:'modifyPassword'}" id="modifyPassword" v-text="lan.pwd"></a></li>
                    <li><a href="javascript:" v-link="{name:'echart'}" id="echart" v-text="lan.chart"></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/leftMenu.css'
    import lan from '../libs/glocalme/lanLoader'
    import $ from '../libs/jquery.min'
    import leftBarBiz from '../biz/leftBarBiz'

    export default {
        data (){
            return {
                lan:{},
                user:localStorage.username,
                pay:''
            }
        },
        ready(){
            let that = this;
            lan.getLan('c_leftBar').then(function(d){
                that.lan = d;
            });
            let tg = window.location.href.split('/').pop();
            $('.pa_left_div').find('#' + tg).addClass('active');
            if(sessionStorage.pay == undefined) {
                let lt = new leftBarBiz();
                lt.query({
                    customerId: localStorage.loginCustomerId
                }).then(function (d) {
                    sessionStorage.pay = d.data.balance;
                    that.pay = sessionStorage.pay;
                },function(d){
                    console.warn(d);
                });
            }else{
                that.pay = sessionStorage.pay;
            }
        }
    }
</script>