/**
 * Created by chenwenxiao on 2016/8/23.
 */
import timeFormat from '../../src/glocalme/timeFormat';

describe('时间转换模块测试', function() {
  let tf = new timeFormat();

  it("当前浏览器时区判断", function() {
    assert.equal(8, tf.getBrowserGMT());
  });
  it("转换时间long格式到yyyy-mm-dd hh-MM-ss", function() {
    //字符串用例
    assert.equal('2016-08-04 11:15:13', tf.getFormatTime('1470280513000'));
    //数字传入用例
    assert.equal('2016-08-04 11:15:13', tf.getFormatTime(1470280513000));
  });
  it("转换时间yyyy-mm-dd hh-MM-ss格式到long", function() {
    //字符串用例1
    assert.equal(1470280513000, tf.formatTimeTolong('2016-08-04 11:15:13'));
  });

});