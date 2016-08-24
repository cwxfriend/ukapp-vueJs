/**
 * Created by cwx on 2016/8/22.
 */


import echarts from 'echarts'

class charts {
    barChart(opt){
        let bar = echarts.init(document.getElementById(opt.id));
        bar.setOption({
            title: {
                text: opt.title,
                x:'center'
            },
            tooltip: {},
            xAxis: {
                data: opt.titleArr
            },
            yAxis: {},
            series: [{
                name: '单位/M',
                type: 'bar',
                data: opt.data
            }]
        });
    }
    pieChart(opt){
        let bar = echarts.init(document.getElementById(opt.id));
        bar.setOption({
            title : {
                text: opt.title,
                subtext: ' ',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: opt.titleArr
            },
            series : [
                {
                    name: ' ',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:opt.data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    lineChart(opt){
        let bar = echarts.init(document.getElementById(opt.id));
        bar.setOption({
            title: {
                text: opt.title,
                x:'center'
            },
            tooltip: {},
            xAxis: {
                type:'value'
            },
            yAxis: {
                type : 'category',
                data: opt.titleArr
            },
            series: [{
                name: '单位/M',
                type: 'bar',
                data: opt.data
            }]
        });
    }

    pieChart2(opt){
        let bar = echarts.init(document.getElementById(opt.id));
        bar.setOption({
            title: {
                text: opt.title,
                x:'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:opt.titleArr
            },
            series: [
                {
                    name:' ',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:opt.data
                }
            ]
        });
    }

    pieChart3(opt){
        let bar = echarts.init(document.getElementById(opt.id));
        bar.setOption({
            title: {
                text: opt.title,
                x:'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:opt.titleArr
            },
            series: [
                {
                    name:' ',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:opt.data2
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:opt.data
                }
            ]
        });
    }
}

export default charts;