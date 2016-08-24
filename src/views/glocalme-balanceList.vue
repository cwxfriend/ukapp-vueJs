<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <g-table :datas.sync="tableData"></g-table>
        </div>
    </div>

    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import '../assets/css/pager.css'
    import lan from '../libs/glocalme/lanLoader'
    import banlanceListBiz from '../biz/balanceListBiz'
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
            lan.getLan('v_balanceList').then(function(d){
                that.lan = d;
                let bt = new banlanceListBiz();

                that.tableData = {
                    url:conf.config.queryBalanceList,
                    method:'post',
                    parton:['operateType','createTime','mainType','amount','payMethod','goodsName'],
                    lanObj:that.lan.list,
                    pageSize:3,
                    perPage:10,
                    currPage:1,
                    dataPost:{langType:localStorage.lanuage||'zh-CN'},
                    timeFormat:['createTime'],
                    json:true
                };
            });
        }
    }
</script>
