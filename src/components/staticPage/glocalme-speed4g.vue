<template>
    <!-- 4G极速上网 -->
    <div class="speed_4g">
        <div class="inner">
            <div class="txt">
                <h3 class="big_title" v-text="lan.g4"></h3>
                <p v-text="lan.g4Txt"></p>
            </div>
            <div class="rocket_fire">
                <img src="../../assets/images/glocalme/hj_top_icon.png" class="top fire_top">
                <img src="../../assets/images/glocalme/hj_mid_icon.png" class="mid fire_move">
                <img src="../../assets/images/glocalme/hj_bottom_icon.png" class="bottom fire_bottom">
                <img src="../../assets/images/glocalme/satellite.png" class="satellite satellite_animation">
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
            lan.getLan('c_speed4g').then(function(d){
                that.lan = d;
            });
        }
    }
</script>