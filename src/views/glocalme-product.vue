<template>
    <!-- 全局header -->
    <g-header></g-header>
    <g-banner></g-banner>
    <g-coverage></g-coverage>
    <g-speed4g></g-speed4g>
    <g-other></g-other>
    <g-footer></g-footer>
</template>

<script>
    import '../assets/css/four_g_wifi_css.css'

    export default {
        components:{
            "gHeader":require('../components/glocalme-header.vue'),
            "gBanner":require('../components/staticPage/glocalme-banner.vue'),
            "gFooter":require('../components/glocalme-footer.vue'),
            "gCoverage":require('../components/staticPage/glocalme-coverage.vue'),
            "gOther":require('../components/staticPage/glocalme-other.vue'),
            "gSpeed4g":require('../components/staticPage/glocalme-speed4g.vue')
        }
    }
</script>