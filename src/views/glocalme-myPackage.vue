<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>


        <div class="marginLeft320 right_content right_minHeight">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <div class="mp_mypackage">
                <div class="mp_use_record fl">
                    <button class="mp_btn_view" id="viewRecord" v-text="lan.record"></button>
                    <div class="mp_package_item">
                        <div class="mp_bg_userful">
                            <p class="mp_package_name" v-text="lan.app"></p>
                            <div class="mp_package_info">
                                <span>剩余流量：<i name="flow">0</i>MB</span><span>有效期：<i name="time">7天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><span class="mp_status_color1" style="position: absolute;right: 30px;bottom: 0">已置顶</span></div></div><div class="mp_package_item"><div class="mp_bg_userful"><p class="mp_package_name">APPWEB流量包200M</p><div class="mp_package_info"><span>剩余流量：<i name="flow">1.95</i>MB</span><span>有效期：<i name="time">30天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><button class="topFirst">置顶</button><input type="hidden" value="57a4030d26cf6724697f5107"></div></div><div class="mp_package_item"><div class="mp_bg_userful"><p class="mp_package_name">APPWEB流量包200M</p><div class="mp_package_info"><span>剩余流量：<i name="flow">1.95</i>MB</span><span>有效期：<i name="time">30天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><button class="topFirst">置顶</button><input type="hidden" value="57a402e026cf6724697f505d"></div></div><div class="mp_package_item"><div class="mp_bg_userless"><p class="mp_package_name">全球畅享</p><div class="mp_package_info"><span>剩余流量：0MB</span><span>有效期：2016-07-27至2016-08-03</span></div><span class="mp_package_status mp_status_color2">无效</span></div></div><div class="mp_package_item"><div class="mp_bg_userful"><p class="mp_package_name">APPWEB流量包200M</p><div class="mp_package_info"><span>剩余流量：<i name="flow">1.95</i>MB</span><span>有效期：<i name="time">30天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><button class="topFirst">置顶</button><input type="hidden" value="5790451726cf672c57a8dd3a"></div></div><div class="mp_package_item"><div class="mp_bg_userless"><p class="mp_package_name">全球畅销套餐</p><div class="mp_package_info"><span>剩余流量：0MB</span><span>有效期：2016-06-17至2016-06-24</span></div><span class="mp_package_status mp_status_color2">无效</span></div></div><div class="mp_package_item"><div class="mp_bg_userful"><p class="mp_package_name">APP测试流量套餐</p><div class="mp_package_info"><span>剩余流量：<i name="flow">0</i>MB</span><span>有效期：<i name="time">7天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><button class="topFirst">置顶</button><input type="hidden" value="575d254619faad1b346802ba"></div></div><div class="mp_package_item"><div class="mp_bg_userless"><p class="mp_package_name">APP测试畅享套餐</p><div class="mp_package_info"><span>剩余流量：0MB</span><span>有效期：2016-06-12至2016-06-19</span></div><span class="mp_package_status mp_status_color2">无效</span></div></div><div class="mp_package_item"><div class="mp_bg_userful"><p class="mp_package_name">APP测试流量套餐</p><div class="mp_package_info"><span>剩余流量：<i name="flow">0</i>MB</span><span>有效期：<i name="time">7天</i></span></div><span class="mp_package_status mp_status_color1">未激活</span><button class="topFirst">置顶</button><input type="hidden" value="575d254419faad1b346802b6"></div></div><div class="mp_package_item"><div class="mp_bg_userless"><p class="mp_package_name">APP测试畅享套餐</p><div class="mp_package_info"><span>剩余流量：0MB</span><span>有效期：2016-06-08至2016-06-15</span></div><span class="mp_package_status mp_status_color2">无效</span></div></div></div>
                <div class="mp_use_intro">
                    <span v-text="lan.say"></span>
                    <p v-text="lan.say1"></p>
                    <p v-text="lan.say2"></p>
                    <p v-text="lan.say3"></p>
                </div>
            </div>

                <div id="pager" class="clear">
                    <ul class="pages">
                        <li class="pgNext pgEmpty" v-text="lan.first"></li>
                        <li class="pgNext pgEmpty" v-text="lan.prev"></li>
                        <li class="page-number pgCurrent">1</li>
                        <li class="pgNext pgEmpty" v-text="lan.next"></li>
                        <li class="pgNext pgEmpty" v-text="lan.last"></li>
                    </ul>
                </div><!-- 分页 -->
        </div>


    </div>

    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import '../assets/css/pager.css'
    import lan from '../libs/glocalme/lanLoader'

    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gLeftbar":require('../components/glocalme-leftBar.vue'),
            "gFooter":require('../components/glocalme-footer.vue')
        },
        data (){
            return {
                lan:{}
            }
        },
        ready(){
            var that = this;
            lan.getLan('v_myPackage').then(function(d){
                that.lan = d;
            });
        }
    }
</script>
<style>
    .topFirst {
        position: absolute;
        right: 30px;
        bottom: 0px;
        border: none;
        padding: 5px 10px;
        background: #69b046;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
