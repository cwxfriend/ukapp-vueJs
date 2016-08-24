<template>
    <div class="national_coverage clear">
        <div class="inner">
            <div class="txt">
                <h3 class="big_title" v-text="lan.cover"></h3>
                <p v-text="lan.coverTxt"></p>
                <a href="/" target="_self" v-text="lan.detial"></a>
            </div>
            <div class="img_div">
                <img class="img_word" src="../../assets/images/glocalme/global2.png">
                <i class="i_1"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_2"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_3"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_4"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_5"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_6"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_7"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_8"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_9"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_10"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_11"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_12"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_13"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_14"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_15"><img src="../../assets/images/glocalme/xinhao.png"></i>
                <i class="i_16"><img src="../../assets/images/glocalme/xinhao.png"></i>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import lan from '../../libs/glocalme/lanLoader'

    export default {
        data (){
            return {
                lan:{}
            }
        },
        ready(){
            var that = this;
            lan.getLan('c_coverage').then(function(d){
                that.lan = d;
            });
        }
    }
</script>