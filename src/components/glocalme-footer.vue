<template>
    <div class="page_footer">
        <div class="info">
            <span class="international_call">{{lan.tel}}：<a href="tel:852-8191-2660">+852-8191-2660</a></span>
            <span class="china_phone">{{lan.ctel}}：<a href="tel:400-822-1581">400-822-1581</a></span>
            <span class="service_hours">GMT+8：9am-6pm</span>
            <div class="language double_click">
                <select v-on:change="changeLan()" v-model="languageType">
                    <option value="zh-CN">{{lan.cn}}</option>
                    <option value="zh-TW">{{lan.tw}}</option>
                    <option value="zh-HK">{{lan.hk}}</option>
                    <option value="en-US">{{lan.en}}</option>
                </select>
            </div>
            <div class="mobile_lang">
                <img src="../assets/images/glocalme/xiaZai_btn.png">
                <div class="scan_code">
                    <img src="../assets/images/glocalme/code_small.png">
                    <span></span>
                    <em></em>
                </div>
            </div>
            <p><span class="copyright" v-text="lan.company"></span></p>
        </div>
    </div>
</template>


<script>
    import lan from '../libs/glocalme/lanLoader'
    import cookie from '../libs/glocalme/cookieHelper'

    export default {
        data (){
            return {
                lan:{},
                languageType:localStorage.language||window.navigator.language
            }
        },
        ready(){
            var that = this;
            lan.getLan('c_footer').then(function(d){
                that.lan = d;
            });
        },
        methods:{
            changeLan() {
                let that = this;
                localStorage.language = that.languageType;
                let cookieHelper = new cookie(); 
                cookieHelper.setCookie('language',that.languageType,1);
                window.location.reload();
            }
        }
    }
</script>