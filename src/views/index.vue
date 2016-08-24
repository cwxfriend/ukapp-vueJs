<template>
    <!-- 全局header -->
    <g-header></g-header>
    <g-banner></g-banner>

    <div class="selling">
        <ul class="clear">
            <li>
                <a href="javascript:"><img src="../assets/images/glocalme/homeIcon1.png"></a>
                <p v-text="lan.txt1"></p>
            </li>
            <li>
                <a href="javascript:"><img src="../assets/images/glocalme/homeIcon2.png"></a>
                <p v-text="lan.txt2"></p>
            </li>
            <li>
                <a href="javascript:"><img src="../assets/images/glocalme/homeIcon3.png"></a>
                <p v-text="lan.txt3"></p>
            </li>
            <li>
                <a href="javascript:"><img src="../assets/images/glocalme/homeIcon4.png"></a>
                <p v-text="lan.txt4"></p>
            </li>
        </ul>
    </div>

    <g-footer></g-footer>

</template>
<script>
    import '../assets/css/css_rest.css'
    import '../assets/css/common.css'
    import '../assets/css/index2_css.css'
    import '../assets/css/index_css.css'
    import lan from '../libs/glocalme/lanLoader'

    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gBanner":require('../components/staticPage/glocalme-banner.vue'),
            "gFooter":require('../components/glocalme-footer.vue')
        },
        data (){
            return {
                lan:{}
            }
        },
        ready(){
            var that = this;
            lan.getLan('v_index').then(function(d){
                that.lan = d;
            });
        }
    }
</script>

