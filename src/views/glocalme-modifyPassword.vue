<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <form class="loginform" id="loginform" novalidate="novalidate">
                <p class="mpsd_input">
                    <g-input types="pwd" :pl.sync="lan.opwd" :ischeck.sync="opwdCheck" :val.sync="opwd" classes="text"></g-input>
                </p>
                <p class="mpsd_input">
                    <g-input types="pwd" :pl.sync="lan.npwd" :ischeck.sync="npwdCheck" :val.sync="npwd" classes="text"></g-input>
                </p>
                <p class="mpsd_input">
                    <g-input types="pwd" :pl.sync="lan.rpwd" :ischeck.sync="rpwdCheck" :val.sync="rpwd" classes="text"></g-input>
                </p>
                <p class="mpsd_input">
                    <button class="btn_save mt50" type="button" v-text="lan.save" @click="save()"></button>
                </p>
            </form>
        </div>
    </div>
    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import '../assets/css/pager.css'
    import lan from '../libs/glocalme/lanLoader'
    import modifyPasswordBiz from '../biz/modifyPasswordBiz'

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
                opwd:'',
                npwd:'',
                rpwd:'',
                opwdCheck:false,
                npwdCheck:false,
                rpwdCheck:false
            }
        },
        ready(){
            that = this;
            lan.getLan('v_modifyPassword').then(function(d){
                that.lan = d
            });
        },
        methods:{
            save(){
                if(that.opwdCheck&&that.npwdCheck&&that.rpwdCheck){
                    if(that.npwd!==that.rpwd){
                        alert(that.lan.twice);
                        return;
                    }
                    let mp = new modifyPasswordBiz();
                    mp.save({
                      "oldPwd": that.opwd,
                      "newPwd": that.npwd
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
