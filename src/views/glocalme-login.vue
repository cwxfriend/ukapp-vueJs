<template>
    <div class="logonwrap bgfixed">
        <div class="lw_header_main">
            <div class="lw_header">
                <p><a href="/"><img src="../assets/images/glocalme/lg_logo.png" alt="logo"><span v-text="lan.wlogin"></span></a></p>
            </div><!-- lw_header-->
        </div><!-- lw_header_main off-->
        <div class="lw_main clear">
            <div class="lw_main_content">
                <h3 class="tit"><a href="javascript:" class="active" v-text="lan.perlogin"></a><span>|</span><a href="javascript:" v-text="lan.cmail"></a></h3>
                <div class="accessLogin personalTab">
                    <div class="tab_login clear">
                        <a href="javascript:" class="curr"><span class="lf" v-text="lan.mail"></span></a>
                        <a href="javascript:"><span class="rt" v-text="lan.tel"></span></a>
                    </div>
                    <form class="loginform" id="loginform" novalidate="novalidate">
                    
                        <p class="center">
                            <g-input types="email" :pl.sync="lan.mail" :ischeck.sync="emailShow" :msgs.sync="userCodeMsg" :val.sync="userCode" classes="text"></g-input>
                            
                        </p>
                        <p class="center mb20">
                            <g-input types="pwd" :pl.sync="lan.pwd" :val.sync="pwd" :ischeck.sync="pwdShow" :msgs.sync="pwdMsg" classes="text"></g-input>
                            
                        </p>

                        <p class="center mb100">
                            <a class="logon_btn" href="javascript:" v-on:click="login()" v-text="lan.login"></a>
                        </p>
                        <p class="center">
                            <a href="javascript:" v-link="{ name:'login'}" class="link fr" v-text="lan.r"></a>
                            <a href="javascript:" v-link="{ name:'login'}" class="link" v-text="lan.fpwd"></a>
                        </p>
                    </form>
                    <form class="loginform" id="PhoneLoginform" novalidate="novalidate">
                        <div class="mobile_box">
                            <p class="center transform">
                                <input class="text mb_telpre" type="text" ajaxname="countryCode" maxlength="5" name="countryCode">
                                <span class="right_box mb_country">中国</span>
                            </p>
                            <!-- 手机区号 -->
                            <div class="country_box"><ul><li phonenum="93">AFGHANISTAN</li><li phonenum="355">ALBANIA</li><li phonenum="213">ALGERIA</li><li phonenum="1684">AMERICAN SAMOA</li><li phonenum="376">ANDORRA</li><li phonenum="244">ANGOLA</li><li phonenum="1264">ANGUILLA</li><li phonenum="1268">ANTIGUA &amp; BARBUDA</li><li phonenum="54">ARGENTINA</li><li phonenum="374">ARMENIA</li><li phonenum="297">ARUBA</li><li phonenum="61">AUSTRALIA</li><li phonenum="43">AUSTRIA</li><li phonenum="994">AZERBAIJAN</li><li phonenum="973">BAHRAIN</li><li phonenum="880">BANGLADESH</li><li phonenum="1246">BARBADOS</li><li phonenum="375">BELARUS</li><li phonenum="32">BELGIUM</li><li phonenum="501">BELIZE</li><li phonenum="229">BENIN</li><li phonenum="1441">BERMUDA</li><li phonenum="975">BHUTAN</li><li phonenum="591">BOLIVIA</li><li phonenum="387">BOSNIA &amp; HERZEGOVINA</li><li phonenum="267">BOTSWANA</li><li phonenum="55">BRAZIL</li><li phonenum="1284">BRITISH VIRGIN ISLANDS</li><li phonenum="673">BRUNEI DARUSSALAM</li><li phonenum="359">BULGARIA</li><li phonenum="226">BURKINA FASO</li><li phonenum="257">BURUNDI</li><li phonenum="855">CAMBODIA</li><li phonenum="237">CAMEROON</li><li phonenum="1">CANADA</li><li phonenum="238">CAPE VERDE</li><li phonenum="599">CARIBBEAN NETHERLANDS</li><li phonenum="1345">CAYMAN ISLANDS</li><li phonenum="236">CENTRAL AFRICAN REPUBLIC</li><li phonenum="235">CHAD</li><li phonenum="56">CHILE</li><li phonenum="86">CHINA</li><li phonenum="57">COLOMBIA</li><li phonenum="269">COMOROS</li><li phonenum="682">COOK ISLANDS</li><li phonenum="506">COSTA RICA</li><li phonenum="225">COTE D'IVOIRE</li><li phonenum="385">CROATIA</li><li phonenum="53">CUBA</li><li phonenum="357">CYPRUS</li><li phonenum="420">CZECH REPUBLIC</li><li phonenum="243">DEMOCRATIC REPUBLIC OF THE CONGO</li><li phonenum="45">DENMARK</li><li phonenum="253">DJIBOUTI</li><li phonenum="1767">DOMINICA</li><li phonenum="1809">DOMINICAN REPUBLIC</li><li phonenum="593">ECUADOR</li><li phonenum="20">EGYPT</li><li phonenum="503">EL SALVADOR</li><li phonenum="240">EQUATORIAL GUINEA</li><li phonenum="291">ERITREA</li><li phonenum="372">ESTONIA</li><li phonenum="251">ETHIOPIA</li><li phonenum="500">FALKLAND ISLANDS (MALVINAS)</li><li phonenum="298">FAROE ISLANDS</li><li phonenum="679">FIJI</li><li phonenum="358">FINLAND</li><li phonenum="33">FRANCE</li><li phonenum="594">FRENCH GUIANA</li><li phonenum="689">FRENCH POLYNESIA</li><li phonenum="241">GABON</li><li phonenum="995">GEORGIA</li><li phonenum="49">GERMANY</li><li phonenum="233">GHANA</li><li phonenum="350">GIBRALTAR</li><li phonenum="30">GREECE</li><li phonenum="299">GREENLAND</li><li phonenum="1473">GRENADA</li><li phonenum="590">GUADELOUPE</li><li phonenum="1671">GUAM</li><li phonenum="502">GUATEMALA</li><li phonenum="224">GUINEA</li><li phonenum="245">GUINEA-BISSAU</li><li phonenum="592">GUYANA</li><li phonenum="509">HAITI</li><li phonenum="504">HONDURAS</li><li phonenum="852">HONG KONG</li><li phonenum="36">HUNGARY</li><li phonenum="354">ICELAND</li><li phonenum="91">INDIA</li><li phonenum="62">INDONESIA</li><li phonenum="98">IRAN, ISLAMIC REPUBLIC OF</li><li phonenum="964">IRAQ</li><li phonenum="353">IRELAND</li><li phonenum="972">ISRAEL</li><li phonenum="39">ITALY</li><li phonenum="1876">JAMAICA</li><li phonenum="81">JAPAN</li><li phonenum="962">JORDAN</li><li phonenum="254">KENYA</li><li phonenum="686">KIRIBATI</li><li phonenum="965">KUWAIT</li><li phonenum="996">KYRGYZSTAN</li><li phonenum="371">LATVIA</li><li phonenum="961">LEBANON</li><li phonenum="266">LESOTHO</li><li phonenum="231">LIBERIA</li><li phonenum="423">LIECHTENSTEIN</li><li phonenum="370">LITHUANIA</li><li phonenum="352">LUXEMBOURG</li><li phonenum="853">MACAO</li><li phonenum="389">MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF</li><li phonenum="261">MADAGASCAR</li><li phonenum="265">MALAWI</li><li phonenum="60">MALAYSIA</li><li phonenum="960">MALDIVES</li><li phonenum="223">MALI</li><li phonenum="356">MALTA</li><li phonenum="692">MARSHALL ISLANDS</li><li phonenum="596">MARTINIQUE</li><li phonenum="222">MAURITANIA</li><li phonenum="230">MAURITIUS</li><li phonenum="52">MEXICO</li><li phonenum="691">MICRONESIA, FEDERATED STATES OF</li><li phonenum="377">MOLDOVA, REPUBLIC OF</li><li phonenum="377">MONACO</li><li phonenum="976">MONGOLIA</li><li phonenum="381">MONTENEGRO</li><li phonenum="1664">MONTSERRAT</li><li phonenum="212">MOROCCO</li><li phonenum="258">MOZAMBIQUE</li><li phonenum="95">MYANMAR</li><li phonenum="264">NAMIBIA</li><li phonenum="674">NAURU</li><li phonenum="977">NEPAL</li><li phonenum="31">NETHERLANDS</li><li phonenum="687">NEW CALEDONIA</li><li phonenum="64">NEW ZEALAND</li><li phonenum="505">NICARAGUA</li><li phonenum="227">NIGER</li><li phonenum="234">NIGERIA</li><li phonenum="683">NIUE</li><li phonenum="6723">NORFOLK ISLAND</li><li phonenum="850">NORTH KOREA</li><li phonenum="1">NORTHERN MARIANA ISLANDS</li><li phonenum="47">NORWAY</li><li phonenum="968">OMAN</li><li phonenum="92">PAKISTAN</li><li phonenum="680">PALAU</li><li phonenum="507">PANAMA</li><li phonenum="675">PAPUA NEW GUINEA</li><li phonenum="595">PARAGUAY</li><li phonenum="51">PERU</li><li phonenum="63">PHILIPPINES</li><li phonenum="48">POLAND</li><li phonenum="351">PORTUGAL</li><li phonenum="970">Palestinian</li><li phonenum="974">QATAR</li><li phonenum="242">REPUBLIC OF THE CONGO</li><li phonenum="262">REUNION</li><li phonenum="40">ROMANIA</li><li phonenum="7">RUSSIAN FEDERATION</li><li phonenum="250">RWANDA</li><li phonenum="290">SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA</li><li phonenum="1869">SAINT KITTS AND NEVIS</li><li phonenum="1758">SAINT LUCIA</li><li phonenum="508">SAINT PIERRE AND MIQUELON</li><li phonenum="685">SAMOA</li><li phonenum="378">SAN MARINO</li><li phonenum="239">SAO TOME &amp; PRINCIPE</li><li phonenum="966">SAUDI ARABIA</li><li phonenum="221">SENEGAL</li><li phonenum="248">SEYCHELLES</li><li phonenum="232">SIERRA LEONE</li><li phonenum="65">SINGAPORE</li><li phonenum="421">SLOVAKIA</li><li phonenum="386">SLOVENIA</li><li phonenum="677">SOLOMON ISLANDS</li><li phonenum="252">SOMALIA</li><li phonenum="27">SOUTH AFRICA</li><li phonenum="82">SOUTH KOREA</li><li phonenum="34">SPAIN</li><li phonenum="94">SRI LANKA</li><li phonenum="249">SUDAN</li><li phonenum="597">SURINAME</li><li phonenum="268">SWAZILAND</li><li phonenum="46">SWEDEN</li><li phonenum="41">SWITZERLAND</li><li phonenum="886">TAIWAN</li><li phonenum="992">TAJIKISTAN</li><li phonenum="255">TANZANIA, UNITED REPUBLIC OF</li><li phonenum="66">THAILAND</li><li phonenum="228">TOGO</li><li phonenum="690">TOKELAU</li><li phonenum="676">TONGA</li><li phonenum="1868">TRINIDAD AND TOBAGO</li><li phonenum="216">TUNISIA</li><li phonenum="90">TURKEY</li><li phonenum="993">TURKMENISTAN</li><li phonenum="1649">TURKS &amp; CAICOS ISLANDS</li><li phonenum="688">TUVALU</li><li phonenum="256">UGANDA</li><li phonenum="380">UKRAINE</li><li phonenum="971">UNITED ARAB EMIRATES</li><li phonenum="44">UNITED KINGDOM</li><li phonenum="1">UNITED STATES</li><li phonenum="1340">UNITED STATES VIRGIN ISLANDS</li><li phonenum="598">URUGUAY</li><li phonenum="998">UZBEKISTAN</li><li phonenum="678">VANUATU</li><li phonenum="379">VATICAN CITY(THE HOLY SEE)</li><li phonenum="58">VENEZUELA</li><li phonenum="84">VIETNAM</li><li phonenum="681">WALLIS AND FUTUNA</li><li phonenum="123">WESTERN SAHARA</li><li phonenum="967">YEMEN</li><li phonenum="260">ZAMBIA</li><li phonenum="263">ZIMBABWE</li></ul></div>
                            <!-- 手机区号 -->
                        </div>
                        <p class="center">
                            <input class="text" type="tel" id="phonenumber" placeholder="请输入手机号码" name="tel" ajaxname="userCode" required="" aria-required="true">
                        </p>
                        <p class="center mb20"><input class="text pwd" type="password" required="" placeholder="密码" name="password" ajaxname="password" aria-required="true"></p>
                        <p class="center mb70">
                            <button class="logon_btn" type="submit">登录</button>
                        </p>
                        <p class="center">
                            <a href="javascript:" v-link="{ name:'login'}" class="link fr">注册个人帐号</a>
                            <a href="javascript:" v-link="{ name:'login'}" class="link">忘记密码</a>
                        </p>
                    </form>
                </div><!-- personalTab off-->
                <div class="accessLogin companyTab" style="display: none;">
                    <form class="loginform pt80" id="companyLoginform" novalidate="novalidate">
                        <p class="center"><input class="text" type="text" required="" placeholder="请输入帐号" ajaxname="userCode" name="usercode" aria-required="true"></p>
                        <p class="center mb20"><input class="text " type="password" required="" placeholder="密码" name="password" ajaxname="password" aria-required="true"></p>
                        <p class="center mb100">
                            <button class="logon_btn" type="submit" v-text="lan.login"></button>
                        </p>
                        <p class="center">
                            <a href="javascript:" v-link="{ name:'login'}" class="link fr" id="register_bt" v-text="lan.loginnow"></a>
                            <a href="javascript:" v-link="{ name:'login'}" class="link" v-text="lan.telr"></a>
                        </p>
                    </form>
                </div><!-- companyTab off-->
            </div><!-- lw_main_content off-->
        </div><!--lw_main off-->
    </div><!-- logonwrap off-->
    <!--底部导航条-->
    <div class="logon_footer">
        <p>
            <!-- <span>使用期限·隐私政策</span> -->
            <span class="mg_lr14" v-text="lan.copyright"></span>
            <span v-text="lan.icp"></span>
        </p>
    </div>
</template>

<script>
    import '../assets/css/logon.css'
    import '../assets/css/tips_common.css'
    import lan from '../libs/glocalme/lanLoader'
    import loginBiz from '../biz/loginBiz'

    var that;
    export default {
        data (){
            return {
                lan:{},
                userCode:'',
                pwd:'',
                pwdMsg:'',
                userCodeMsg:'',
                pwdShow:false,
                emailShow:false,
                resultMsg:'sfsdfs',
                showResult:false
            }
        },
        ready(){
            that = this;
            lan.getLan('v_login').then(function(d){
                that.lan = d;
            });
        },

        components:{
            "gInput":require('../components/glocalme-inputdiv.vue')
        },
        methods:{
            login() {
                if(that.pwdShow && that.emailShow){
                    var lg = new loginBiz();
                    lg.loginIn(this).then(function(d){
                        alert(d.resultDesc);
                        that.$route.router.go('accountInfo');
                    },function(d){
                        alert(d.resultDesc);
                    });
                }
            }
        }
    }
</script>