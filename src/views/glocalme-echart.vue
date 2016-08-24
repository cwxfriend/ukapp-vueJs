<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <g-chart :datas.sync="chartData"></g-chart>
        </div>
    </div>

    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import '../assets/css/pager.css'
    import lan from '../libs/glocalme/lanLoader'
    import ajax from '../libs/glocalme/ajax'

    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gLeftbar":require('../components/glocalme-leftBar.vue'),
            "gFooter":require('../components/glocalme-footer.vue'),
            "gChart":require('../components/glocalme-chart.vue')
        },
        data (){
            return {
                lan:{},
                chartData:{}
            }
        },
        ready(){
            var that = this;
            lan.getLan('v_echart').then(function(d){
                that.lan = d;
                ajax.ajax({
                    url:'/testData/chart.json',
                    method:'get',
                    data:{}
                }).then(function(d){
                    var arr1 = [],arr2 = [];
                    for(let i = 0; i< d.data.length;i++){
                        arr1.push(d.data[i].cnt);
                        arr2.push(d.data[i].iso2);
                    }
                    that.chartData = {
                        title:that.lan.dataTitle,
                        dataArr:arr1,
                        titleArr:arr2
                    };
                });
            });
        }
    }
</script>