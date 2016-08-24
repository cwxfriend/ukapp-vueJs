<template>
    <div>
        <input 
            type="{{opt.type}}" 
            maxlength="{{opt.max}}" 
            minlength="{{opt.min}}" 
            readonly="{{opt.readonly||false}}" 
            required="{{opt.required||false}}" 
            class="{{classes}}" 

            placeholder="{{pl}}" 
            v-model="val"
            d-msg="{{msgs}}"
            />
            <span class="ml10" v-show="msgsshow">
                                <span class="tipsc"></span>
                                <span class="tipss">{{msgs}}</span>
                            </span>
    </div>
</template>
<script>
    import check from '../libs/glocalme/baseCheck'
    import Vue from 'vue'
    import lan from '../libs/glocalme/lanLoader'

    export default {
        data (){
            return {
                opt:{},
                lan:{},
                msgs:'',
                msgsshow:false
            }
        },
        watch:{
            'val': {
                handler: function (val, oldVal) {
                    let that = this;
                    let ck = new check();
                    let setValT = function(){
                        that.$el.setAttribute('check',true);
                        that.ischeck = true;
                        that.msgsshow = false;
                    },setValF = function(){
                        that.$el.setAttribute('check',false);
                        that.ischeck = false;
                        that.msgsshow = true
                    };

                    if (that.types === 'pwd') {
                        if (val.length >= that.opt.min) {
                            setValT();
                            that.msgs = '';
                        } else {
                            setValF();
                            that.msgs = that.lan.atless + that.opt.min + that.lan.w ;
                        }
                    } else if (that.types === 'date') {

                    } else if (that.types === 'email') {
                        if (ck.isMail(val) && val.length >= that.opt.min) {
                            setValT();
                            that.msgs = '';
                        } else {
                            setValF();
                            if(!ck.isMail(val)){ that.msgs = that.lan.email;}else{that.msgs = that.lan.atless + that.opt.min + that.lan.w ;}
                        }
                    } else if (that.types === 'imei') {
                        if (ck.lengthCheck(val.length,that.opt.min) && ck.isNumber(val) ) {
                            setValT();
                            that.msgs = '';
                        } else {
                            setValF();
                            if(!ck.isNumber(val)){ that.msgs = that.lan.imei;}else{that.msgs = that.lan.atless + that.opt.min + that.lan.w ;}
                        }
                    } else {

                    }
                },
                deep: true
            }
        },
        props: ['types','pl','classes','val','ischeck'],
        ready(){
            let that = this;
            lan.getLan('c_input').then(function(d){
                that.lan = d;
            });
            if(that.types === 'pwd'){
                that.opt = {
                    max:30,
                    min:6,
                    readonly:false,
                    required:true,
                    type:'password'
                }
            }else if(that.types === 'date'){
                that.opt = {
                    max:30,
                    min:30,
                    readonly:true,
                    required:false,
                    type:'text'
                }
            }else if(that.types === 'email'){
                that.opt = {
                    max:100,
                    min:8,
                    readonly:false,
                    required:true,
                    type:'text'
                }
            }else if(that.types === 'imei'){
                that.opt = {
                    max:24,
                    min:24,
                    readonly:false,
                    required:true,
                    type:'text'
                }
            }else{
                console.log('aadf');
            }
        }
    }
</script>
<style>
    .tipsc{
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid #aaa;
        position: absolute;
    }
    .tipss{
        position: absolute;
        padding: 0.5rem 0.75rem;
        background: #aaa;
        color: #fff;
        margin-top: 5px
    }
</style>