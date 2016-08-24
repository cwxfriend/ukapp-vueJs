/**
 * Created by cwx on 2016/8/23.
 */
"use strict";
import lan from '../src/libs/glocalme/lanLoader';

describe('获取语言包功能测试模块测试', function() {
  it("获取语言包", function() {
    var strss = '{"1txt1":"全球WiFi 任性联网","txt2":"资费灵活 不用不花钱","txt3":"高速上网 五人共享","txt4":"专属网络 信息安全"}';
    lan.getLan('v_index').then(function(d){
      assert.equal(strss, d.toString());
    },function(d){
      assert.equal(strss, d.toString());

    });
  });

});