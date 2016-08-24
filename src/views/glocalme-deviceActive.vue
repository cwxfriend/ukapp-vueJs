<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <div class="da_IMEI_input">
                <p class="mb20">
                    <label class="key_name" v-text="lan.imei"></label>
                    <label class="hasTips">
                        <g-input types="imei" :pl.sync="lan.Inimei" :ischeck.sync="imeiCheck" :val.sync="imei" classes="text"></g-input>
                        <span class="da_IMEI_tips hide"  v-text="lan.check"></span>
                    </label>
                </p>
                <p>
                    <label class="key_name" v-text="lan.pwd"></label>
                    <label class="hasTips">
                        <g-input types="pwd" :pl.sync="lan.dpwd" :ischeck.sync="tmlPwdCheck" :val.sync="tmlPwd" classes="text"></g-input>
                    </label>
                </p>
                <div class="btn_div">
                    <button class="da_btn_active" id="da_btn_active" v-text="lan.active"></button>
                    <button class="da_btn_active hide" id="da_btn_unactive" v-text="lan.deactive"></button>
                </div>
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
    import deviceActiveBiz from '../biz/deviceActiveBiz'
    var that;
    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gLeftbar":require('../components/glocalme-leftBar.vue'),
            "gFooter":require('../components/glocalme-footer.vue'),
            "gInput":require('../components/glocalme-inputdiv.vue')
        },
        data (){
            return {
                lan:{},
                imei:'',
                imeiCheck:false,
                tmlPwdCheck:false,
                tmlPwd:''
            }
        },
        ready(){
            that = this;
            lan.getLan('v_deviceActive').then(function(d){
                that.lan = d;
            });
        },
        methods:{
            save(){
                if(imeiCheck&&tmlPwdCheck){
                    let mp = new modifyPasswordBiz();
                    mp.save({
                      "operateType": "1",
                      "imei": that.imei,
                      "tmlPwd": that.tmlPwd
                    }).then(function(d){
                        alert(d.resultDesc);
                    },function(d){
                        alert('错误码:' + d.resultCode + '---' + d.resultDesc);
                    });
                }
            }
        }
    }
</script>
