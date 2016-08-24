<template>
    <!-- 登录 -->
    <div class="navtion_loading">
        <div class="loading_name">
            <a class="ellipsis" href="/" target="_self"><span class="ellipsis span1" title="{{lan.go}}" v-text="lan.go"></span></a>
            <a class="ellipsis" @click="loginoutFn()" v-show="loginout" href="javascript:" v-link="{ name:'login' }" target="_self" title="{{lan.loginout}}" v-text="lan.loginout"></a>
            <a class="ellipsis" v-show="login" href="javascript:" v-link="{ name:'login' }" target="_self" title="{{lan.login}}" v-text="lan.login"></a>
        </div>
    </div>
</template>

<script>
    import lan from '../libs/glocalme/lanLoader'
    var that;
    export default {
        data (){
            return {
                lan:{},
                login:true,
                loginout:false,
            }
        },
        ready(){
            that = this;
            lan.getLan('c_homeUser').then(function(d){
                that.lan = d;
            });

            if(localStorage.loginCustomerId === undefined){
                that.login = true;
                that.loginout = false;
            }else{
                that.login = false;
                that.loginout = true;
            }
        },
        methods:{
            loginoutFn() {
                var lt = localStorage.language;
                localStorage.clear();
                sessionStorage.clear();
                localStorage.language = lt || 'zh-CN';
                that.$route.router.go('home');
            }
        }
    }
</script>
