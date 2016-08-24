<template>
    <div>
        <div class="chart-tab">
            <ul>
                <li v-text="lan.chart1" @click="chart1()" class="act"></li>
                <li v-text="lan.chart3" @click="chart3()"></li>
                <li v-text="lan.chart2" @click="chart2()"></li>
                <li v-text="lan.chart4" @click="chart4()"></li>
                <li v-text="lan.chart5" @click="chart5()"></li>
            </ul>
        </div>
        <div id="chart" style="width: 100%; height: 500px;">
        </div>
    </div>
</template>
<script>
    import chart from '../biz/chartBiz'
    import $ from '../libs/jquery.min'
    import lan from '../libs/glocalme/lanLoader'


    var c = new chart();
    export default {
        data (){
            return {
                lan:{}
            }
        },
        watch:{
            'datas': {
                handler: function (val, oldVal) {
                    this.chart1();
                },
                deep: true
            }
        },
        ready(){
            var that = this;
            lan.getLan('v_echart').then(function(d){
                that.lan = d;
            });
        },
        props:['datas'],
        methods: {
            chart1(){
                $('.chart-tab').find('li').removeClass('act').eq(0).addClass('act');
                c.barChart({
                    id: 'chart',
                    title:this.datas.title,
                    data:this.datas.dataArr,
                    titleArr:this.datas.titleArr
                });
            },
            chart2(){
                $('.chart-tab').find('li').removeClass('act').eq(2).addClass('act');
                var arr = [];
                for(var i = 0 ; i<this.datas.dataArr.length;i++){
                    arr.push({
                        value:this.datas.dataArr[i],
                        name:this.datas.titleArr[i]
                    });
                }
                c.pieChart({
                    id: 'chart',
                    title:this.datas.title,
                    data:arr,
                    titleArr:this.datas.titleArr
                });
            },
            chart3(){
                $('.chart-tab').find('li').removeClass('act').eq(1).addClass('act');
                c.lineChart({
                    id: 'chart',
                    title:this.datas.title,
                    data:this.datas.dataArr,
                    titleArr:this.datas.titleArr
                });
            },
            chart4(){
                $('.chart-tab').find('li').removeClass('act').eq(3).addClass('act');
                var arr = [];
                for(var i = 0 ; i<this.datas.dataArr.length;i++){
                    arr.push({
                        value:this.datas.dataArr[i],
                        name:this.datas.titleArr[i]
                    });
                }
                c.pieChart2({
                    id: 'chart',
                    title:this.datas.title,
                    data:arr,
                    titleArr:this.datas.titleArr
                });
            },
            chart5(){
                $('.chart-tab').find('li').removeClass('act').eq(4).addClass('act');
                var arr = [],arr1 = [];
                for(var i = 0 ; i<this.datas.dataArr.length;i++){
                    arr.push({
                        value:this.datas.dataArr[i],
                        name:this.datas.titleArr[i]
                    });
                    if(arr1.length<3){
                        arr1.push({
                            value:this.datas.dataArr[i],
                            name:this.datas.titleArr[i]
                        });
                    }
                }
                c.pieChart3({
                    id: 'chart',
                    title:this.datas.title,
                    data:arr,
                    data2:arr1,
                    titleArr:this.datas.titleArr
                });
            }
        }
    }
</script>
<style>
    .chart-tab{
        margin: 20px 0;
    }
    .chart-tab li{
        display: inline-block;
        cursor: pointer;
        padding: 5px;
    }
    .chart-tab li.act,.chart-tab li:hover{
        background: #ddd;
        color: #fff;
    }
</style>

