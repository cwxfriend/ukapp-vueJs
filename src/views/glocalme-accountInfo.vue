<template>
    <!-- 全局header -->
    <g-header></g-header>
    <div class="glocal_width_style">
        <g-leftbar></g-leftbar>
        <div class="marginLeft320 right_content" style="padding: 0;">
            <div class="titleForList"><span class="titleName" v-text="lan.title"></span></div>
            <div class="ai_account">
                <ul class="ai_info">
                    <li>
                        <span v-text="lan.account"></span>
                        <input class="readonly" type="text" id="account" readonly="true" style="cursor: no-drop;" v-model="dataObj.userCode"/>
                    </li>
                    <li>
                        <span v-text="lan.nickname"></span>
                        <input type="text" id="nickname" v-model="dataObj.nickname"/>
                    </li>
                    <li>
                        <span v-text="lan.fname"></span>
                        <input type="text" id="firstname" v-model="dataObj.firstname"/>
                    </li>
                    <li>
                        <span v-text="lan.lastname"></span>
                        <input type="text" id="lastname" v-model="dataObj.lastname"/>
                    </li>
                    <li>
                        <span v-text="lan.sex"></span>
                        <div class="gender">
                            <em id="male" class="radio radio_pos {{man}}"></em>{{lan.man}}
                            <em id="female" class="radio radio_pos {{woman}}"></em>{{lan.woman}}
                        </div>
                    </li>
                    <li>
                        <span v-text="lan.tel"></span>
                        <input type="tel" id="phone" v-model="dataObj.phone"/>
                    </li>
                    <li>
                        <span v-text="lan.mail"></span>
                        <input class="readonly" type="email" id="email" readonly="readonly" style="cursor: no-drop;" v-model="dataObj.email"/>
                    </li>
                    <li>
                        <span v-text="lan.pots"></span>
                        <select  v-model="dataObj.identificationType">
                            <option v-for="d in infObj" value="{{d.key}}">{{d.value}}</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="ai_btn_loginout">
                <button v-text="lan.save" @click="save()"></button>
            </div>
        </div>
    </div>

    <g-footer></g-footer>
</template>
<script>
    import '../assets/css/leftMenu.css'
    import '../assets/css/glocalme.css'
    import lan from '../libs/glocalme/lanLoader'
    import accountInfoBiz from '../biz/accountInfoBiz'

    var that;
    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gLeftbar":require('../components/glocalme-leftBar.vue'),
            "gFooter":require('../components/glocalme-footer.vue')
        },
        data (){
            return {
                lan:{},
                woman:'',
                man:'',
                dataObj:{},
                infObj:[]
            }
        },
        ready(){
            that = this;
            lan.getLan('v_accountInfo').then(function(d){
                that.lan = d;
            });


            let ab = new accountInfoBiz();
            ab.queryIdentify(that).then(function(idf){
                that.infObj = idf.data;
                ab.query(that).then(function(d){
                    if(d.data.gender == 'WOMAN'){
                        that.woman = 'radio_checked';
                        that.man = '';
                    }else{
                        that.woman = '';
                        that.man = 'radio_checked';
                    }
                    that.dataObj = d.data;
                },function(d){
                    console.warn(d);
                });
            },function(d){
                console.warn(d);
            });
        },
        methods:{
            save(){
                let ab = new accountInfoBiz();
                ab.save({
                  "nickname": that.dataObj.nickname,
                  "firstname": that.dataObj.firstname,
                  "lastname": that.dataObj.lastname,
                  "gender": that.dataObj.gender,
                  "identification": that.dataObj.identification,
                  "identificationType": that.dataObj.identificationType,
                  "phone": that.dataObj.phone,
                  "countryCode": that.dataObj.countryCode
                }).then(function(d){
                    alert(d.resultDesc);
                },function(d){
                    alert('错误码:' + d.resultCode + '---' + d.resultDesc);
                });
            }
        }
    }
</script>
