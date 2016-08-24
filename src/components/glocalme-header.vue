<template>
    <div class="navtion without_top">
        <!-- logo -->
        <div class="navtion_logo"><a href="/"><img src="../assets/images/glocalme/logo_latest.png"></a></div>
        <!-- 导航 -->
        <div class="navtion_bar">
            <ul>
                <li class="nav_li">
                    <div class="nav_header"><a href="/" target="_self" class="current" v-text="lan.home"></a></div>
                </li>
                <li class="nav_li">
                    <div class="nav_header"><a href="javascript:" v-link="{name:'product'}" target="_self" v-text="lan.product"></a></div>
                    <div class="nav_sub">
                        <div class="g_series">
                            <span class="g_1"><img src="../assets/images/glocalme/g2.png"></span>
                        </div>
                        <button class="btn_1 rounded"><a href="/" target="_self" v-text="lan.buy"></a></button>
                        <div class="nav_sub_text">
                            <ul>
                                <li><a href="javascript:" v-text="lan.cover"></a></li>
                                <li><a href="javascript:" v-text="lan.g4"></a></li>
                                <li><a href="javascript:" v-text="lan.pak"></a></li>
                                <li><a href="javascript:" v-text="lan.car"></a></li>
                                <li><a href="javascript:" v-text="lan.support"></a></li>
                                <li><a href="javascript:" v-text="lan.manager"></a></li>
                                <li><a href="javascript:" v-text="lan.param"></a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="nav_li">
                    <div class="nav_header"><a href="/" target="_self" v-text="lan.store"></a></div>
                </li>
                <li class="nav_li">
                    <div class="nav_header"><a href="/" target="_self" v-text="lan.coverCountry"></a></div>
                </li>
                <li class="nav_li">
                    <div class="nav_header"><a href="/" target="_self" v-text="lan.help"></a></div>
                </li>
            </ul>
        </div>
        <!-- 登录 -->
        <g-login></g-login>
    </div>
</template>

<script type="text/ecmascript-6">
    import lan from '../libs/glocalme/lanLoader'

    export default {
        data (){
            return {
                lan:{}
            }
        },
        components:{
            'gLogin':require('./glocalme-home-user.vue')
        },
        ready(){
            var that = this;
            lan.getLan('c_header').then(function(d){
                that.lan = d;
            });
        }
    }
</script>
