<template>
    <div class="modal-scrollable {{hide}} hideMsg" style="z-index: 1060;" @click="close()">
    <div class="modal fade CloseingCallBack in" id="msg_box" tabindex="-1" aria-hidden="false" style="margin-top: -162px;">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header bg_theme">
    <button type="button" class="close CloseingCallBack" data-dismiss="modal" aria-label="Close" @click="close()">
    <span aria-hidden="true">×</span></button><h4 class="modal-title">{{lan.msg_title}}</h4></div> <div class="modal-body msg_box_body"><img src="../assets/images/glocalme/rc_CodeError.png"><p class="msg_content">{{cts}}</p></div><div class="modal-footer"><button type="button"  @click="close()" class="btn btn-primary" data-dismiss="modal" id="msg_tck_ok">{{lan.msg_ok}}</button><button type="button" class="btn btn-default hide" data-dismiss="modal" id="msg_tck_cancel">取消</button></div></div></div></div></div>
</template>
<script>
    import lan from '../libs/glocalme/lanLoader'
    export default {
        data (){
            return {
                lan:{},
                hide:''
            }
        },
        watch:{
            'isshow': {
                handler: function (val, oldVal) {
                    if(val===true){
                        this.hide = 'showMsg';
                    }
                },
                deep: true
            }
        },
        props: ['cts','isshow'],
        ready(){
            var that = this;
            lan.getLan('c_msgbox').then(function(d){
                that.lan = d;
            });
        },
        methods:{
            close(){
                this.hide = '';
                this.isshow = false;
            }
        }
    }
</script>
<style>
    .hideMsg{
        top: -3000px;
        display: none;
    }
    .showMsg{
        top: 0;
        display: block;
        transition: top 0.5s;
    }

</style>