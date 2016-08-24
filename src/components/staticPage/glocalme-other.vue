<template>
    <!-- 一拖五 -->
    <div class="g1_section_three section g1s">
        <div class="g1_section_main">
            <div class="share_icon aniexpand"></div>
            <div class="share_main">
                <h2>{{lan.ot1}}</h2>
                <p class="wd">{{lan.ot2}}</p>


                <!-- <p class="wd"><span>按流量收费:</span>计费0.05€/MB， 10€封顶，不限流量 </p> -->
                <!-- <p class="wd"><span>套餐收费:</span>私人定制，流量计费更省心 </p> -->
                <img src="../../assets/images/glocalme/share_img.png">
                <b></b>
            </div>
        </div>
    </div>
    <!-- 资费灵活 -->
    <div class="g1_section_one g1_section_new_two section color_s2">
        <div class="g1_section_main">
            <h2 class="tit">{{lan.ot3}}</h2>
            <p class="mb5 mb6"><span>{{lan.ot4}}</span>{{lan.ot5}}</p>
            <p class="mb5"><span class="mb6">{{lan.ot6}}</span>{{lan.ot7}}</p>


            <!-- <p class="mb5">您的Wi-Fi可支持5人同时上网。也支持智能手机、iPad、笔记本、可穿戴智能设备，等各种WiFi设备均能使用。</p> -->
            <img src="../../assets/images/glocalme/cn_des.png">
        </div>
    </div>
    <!-- 零漫游 -->
    <div class="g1_section_two section color_s1 en_flash">
        <div class="txt">
            <h3 class="big_title">{{lan.ot8}}</h3>
            <p>{{lan.ot9}}</p>
        </div>
        <object width="100%" type="application/x-shockwave-flash" data="http://glocalme.ukelink.com/static/index/img/common/icon/adv1.swf">
            <param name="movie" value="http://www1.glocalme.com/static/index/img/common/icon/adv1.swf">
            <param name="wmode" value="transparent">
        </object>
    </div>
    <!-- 数据安全 -->
    <div class="data_security">
        <div class="inner">
            <div class="txt_1">
                <h3 class="big_title_1">{{lan.ot10}}</h3>
                <p>{{lan.ot11}}</p>
            </div>
            <div class="img_div_1 dataSecurityAnimation">
                <img class="mainImg" src="../../assets/images/glocalme/data_security.png">
                <img class="face1" src="../../assets/images/glocalme/face1.png">
                <img class="face2" src="../../assets/images/glocalme/face1.png">
                <img class="face3" src="../../assets/images/glocalme/face1.png">

                <div class="huan1">
                    <img class="line1" src="../../assets/images/glocalme/line.png">
                    <div class="wrap_icon"><span><i></i></span></div>
                </div>

                <div class="huan1 huan2">
                    <img class="line1" src="../../assets/images/glocalme/line.png">
                    <div class="wrap_icon"><span><i></i></span></div>
                </div>

            </div>
        </div>
    </div>
    <!-- 续航15小时 -->
    <div class="hours_fifteen">
        <div class="inner">
            <div class="txt_2">
                <h3 class="big_title_2">{{lan.ot12}}</h3>
                <p>{{lan.ot13}}
                    <br> {{lan.ot14}}
                    <br> {{lan.ot15}}
                    <br> {{lan.ot16}}                </p>
                <div class="mah_hours">
                    <span class="span_1"><i class="i_q">40</i><i class="i_s">0</i><i class="i_g">0</i><i class="danwei">mAh</i></span>
                    <span class="span_2"><i class="i_h">0</i><i class="danwei">hours</i></span>
                </div>
                <div class="mah">
                    <span class="span_1"><i class="i_r">5980</i><i class="danwei">mAh</i></span>
                </div>
            </div>
            <div class="img_div_2">
                <img class="product_picture" src="../../assets/images/glocalme/wifi2.jpg">
            </div>
        </div>
    </div>
    <!-- 下载app -->
    <div class="app_down_load">
        <div class="inner">
            <div class="txt_1">
                <h3 class="big_title_1">{{lan.ot17}}</h3>
                <p>{{lan.ot18}}</p>
                <p><img class="saoma" src="../../assets/images/glocalme/saoma.png"></p>
                <p>
                    <a href="http://itunes.apple.com/cn/app/glocalme/id825314001?mt=8" target="_self" class="apple_1"><img src="../../assets/images/glocalme/iphone_download.png"></a>
                    <a href="http://glocalme.com:8085/app_android/GlocalMe.apk" target="_self" class="andriod_2"><img src="../../assets/images/glocalme/ardriod_download.png"></a>
                </p>
            </div>
            <div class="img_div_1">
                <img class="product_app" src="../../assets/images/glocalme/down_app.png">
            </div>
        </div>
    </div>
    <!-- 机器 -->
    <div class="simcard">
        <div class="inner">
            <div class="txt">
                <h3 class="big_title">{{lan.ot19}}</h3>
                <p>{{lan.ot20}}</p>
            </div>
            <div class="img_div">
                <img class="product_picture_2" src="../../assets/images/glocalme/jiqi.png">
            </div>
        </div>
    </div>
    <!-- 产品参数 -->
    <div class="product_arguments clear">
        <div class="inner">
            <div class="txt">
                <h3 class="big_title">{{lan.ot21}}</h3>
            </div>
            <div class="arguments clear">
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td class="td1">{{lan.ot22}}</td>
                        <td class="td2">WCDMA Band 1/2/5/8<br>LTE-TDD Band 39/40/41</td>
                        <td class="td3">LTE-FDD Band 1/3/5/7/8/17/20<br>GSM 850/900/1800/1900MHz</td>
                    </tr>

                    <tr class="li_bj">
                        <td class="td1">{{lan.ot23}}</td>
                        <td class="td2">4G: 150 Mbps</td>
                        <td class="td3"></td>
                    </tr>

                    <tr>
                        <td class="td1">{{lan.ot24}}</td>
                        <td class="td2">4G: 50 Mbps</td>
                        <td class="td3"></td>
                    </tr>

                    <tr class="li_bj">
                        <td class="td1">{{lan.ot25}}</td>
                        <td class="td2">{{lan.ot26}}<br>{{lan.ot27}}DC 5V-1A</td>
                        <td class="td3">{{lan.ot28}}<br>{{lan.ot29}}DC 5V-1A</td>
                    </tr>

                    <tr>
                        <td class="td1">{{lan.ot30}}</td>
                        <td class="td2">6,000 mAh</td>
                        <td class="td3"></td>
                    </tr>

                    <tr class="li_bj">
                        <td class="td1">{{lan.ot31}}</td>
                        <td class="td2">117 x 63.8 x 20.9mm</td>
                        <td class="td3"></td>
                    </tr>

                    <tr>
                        <td class="td1">{{lan.ot32}}</td>
                        <td class="td2">224g(Net)　353g（Total）</td>
                        <td class="td3"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- 使用说明 -->
    <div class="use_descrition clear">
        <div class="inner clear">
            <div class="txt">
                <h3 class="big_title">{{lan.ot33}}</h3>
            </div>
            <div class="img_div_4">
                <img src="../../assets/images/glocalme/jiqi2.png">
            </div>
            <div class="txt_4 clear">
                <p><br> step1：
                    <br> {{lan.ot34}}
                    <br> {{lan.ot35}}
                    <br>
                    <br> step2：
                    <br> {{lan.ot36}}
                    <br> {{lan.ot37}}
                    <br>
                    <br> step3：
                    <br> {{lan.ot38}}
                    <br> {{lan.ot39}}
                    <br>
                    <br> step4：
                    <br> {{lan.ot40}}
                    <br> {{lan.ot41}}                    <br>
                    <br>
                </p>
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
            lan.getLan('c_other').then(function(d){
                that.lan = d;
            });
        }
    }
</script>