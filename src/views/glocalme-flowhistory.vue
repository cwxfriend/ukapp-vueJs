<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <!-- <div style="background: #f4f4f4;height:20px;"></div> -->
            <div class="fh_queryCon">
                <input id="start" type="text" readonly="true" placeholder="{{lan.time}}" onclick="timerStartFn()">
                <img src="../assets/images/glocalme/calendar.png" onclick="timerStartFn()">
                <label>{{lan.to}}</label>
                <input id="end" type="text" readonly="true" placeholder="{{lan.etime}}" onclick="timerEndFn()">
                <img src="../assets/images/glocalme/calendar.png" onclick="timerEndFn()">
                <button class="fh_btn_query">{{lan.search}}</button>
            </div>
            <div>
                <g-table :datas.sync="tableData"></g-table>
                <div class="fh_tips" v-text="lan.notie"></div>
            </div>
        </div>
    </div>

    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import '../assets/css/pager.css'
    import lan from '../libs/glocalme/lanLoader'
    import conf from '../biz/config'

    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gLeftbar":require('../components/glocalme-leftBar.vue'),
            "gFooter":require('../components/glocalme-footer.vue'),
          "gTable":require('../components/glocalme-table.vue')
        },
        data (){
            return {
                lan:{},
                tableData:{}
            }
        },
        ready(){
            var that = this;
            lan.getLan('v_flowHistory').then(function(d){
                that.lan = d;

                that.tableData = {
                    url:conf.config.queryFlowHistory,
                    method:'post',
                    parton:['orderSN','createTime','orderItems','channelType','amount','orderStatus'],
                    lanObj:that.lan.list,
                    pageSize:3,
                    perPage:10,
                    currPage:1,
                    dataPost:{
                      customerName:sessionStorage.username
                    },
                    timeFormat:['createTime'],
                    json:true
                };
            });
        }
    }
</script>
