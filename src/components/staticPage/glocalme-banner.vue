<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../assets/images/glocalme/banner01.jpg"></div>
                <div class="swiper-slide"><img src="../../assets/images/glocalme/banner02.jpg"></div>
                <div class="swiper-slide"><img src="../../assets/images/glocalme/banner01.jpg"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination">
                <a href="javascript:" class="active"></a>
                <a href="javascript:"></a>
                <a href="javascript:"></a>
            </div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import swiper from '../../libs/swiper.min.js'
    export default {
        data () {
            return {}
        },
        ready () {
            this.$nextTick(()=>{
                let mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,

                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',

                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            })
        }
    }
</script>
<style>
    @import '../../assets/css/swiper.min.css';
    .swiper-container {
        width: 100%;
    }
</style>
