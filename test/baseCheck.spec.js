/**
 * Created by chenwenxiao on 2016/8/23.
 */
import baseCheck from '../../src/glocalme/baseCheck';

describe('基础验证模块测试', function() {
  let bc = new baseCheck();
  var aa = function(){
    alert('sdf');
  };
  var aad = {
    aa:'123', bb:'233'
  };
  var aaf = {
    aa:'123',
    fn:function(){}
  };
  var arr = ['aa','bb'];

  var mail1 = 'cwx@ukelink.com',
       mail2 = '31264645@qq.com';

  it("是否是数字的判断", function() {
    assert.equal(true, bc.isNumber('123'));
    assert.equal(true, bc.isNumber(123));
    //字符串
    assert.equal(false, bc.isNumber('123a'));
    //越界数字
    assert.equal(true, bc.isNumber(1231542454154515454542421542454));
  });

  it("是否是数字的函数的判断", function() {
    assert.equal(false, bc.isFunction('123a'));
    assert.equal(true, bc.isFunction(aa));
    assert.equal(false, bc.isFunction(aad));
    assert.equal(false, bc.isFunction(aaf));
  });

  it("是否是对象的判断", function() {
    assert.equal(false, bc.isObject('123a'));
    assert.equal(false, bc.isObject(aa));
    assert.equal(true, bc.isObject(aad));
    assert.equal(true, bc.isObject(aaf));
  });

  it("是否是字符串的判断", function() {
    assert.equal(true, bc.isString('123a'));
    assert.equal(false, bc.isString(aa));
    assert.equal(false, bc.isString(aad));
    assert.equal(false, bc.isString(123));
  });


  it("是否是数组的判断", function() {
    assert.equal(false, bc.isArr('123a'));
    assert.equal(true, bc.isArr(arr));
  });

  it("是否是邮箱的判断", function() {
    assert.equal(false, bc.isMail('123a'));
    assert.equal(true, bc.isMail(mail1));
    assert.equal(true, bc.isMail(mail2));
  });
  it("是否是电话的判断", function() {
    assert.equal(false, bc.isPhone('123a'));
    assert.equal(true, bc.isPhone(18581558098));
    assert.equal(false, bc.isPhone(1115884545));
  });
  it("是否是身份证的判断", function() {
    assert.equal(true, bc.isPort('450502199506320478'));
  });
  it("是否相等的判断", function() {
    assert.equal(true, bc.npwdCheck(123,123));
  });
  it("大小的判断", function() {
    assert.equal(false, bc.lengthCheck(5,60));
    assert.equal(true, bc.lengthCheck(10,5));
    assert.equal(true, bc.lengthCheck(30,2));
  });

});