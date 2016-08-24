<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content right_minHeight order_table">
            <div class="titleForList"><span class="titleName">{{lan.title}}</span></div>
            <div class="mo_order_view">
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
            lan.getLan('v_myOrder').then(function(d){
                that.lan = d;
                that.tableData = {
                    url:conf.config.queryOrderList,
                    method:'post',
                    parton:['orderSN','createTime','orderItems','channelType','amount','orderStatus'],
                    lanObj:that.lan.list,
                    pageSize:3,
                    perPage:10,
                    currPage:1,
                    dataPost:{
                      langType:localStorage.lanuage||'zh-CN',
                      customerName:sessionStorage.username
                    },
                    timeFormat:['createTime'],
                    json:true
                };
            });
        }
    }
</script>
<style>
  .order_table table{
    table-layout: auto;
  }
</style>
