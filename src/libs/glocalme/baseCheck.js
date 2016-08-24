/**
 * Created by chenwenxiao on 2016/8/19.
 */

class  baseCheck  {
	/******************js内部验证******************/
    isNumber (d) {
        return !isNaN(d);
    }
    isFunction (d) {
        return typeof d === 'function';
    }
    isObject (d) {
        return typeof d === 'object';
    }
    isString (d){
    	return typeof d === 'string';
    }
    isArr (d){
    	return d.length >= 0;
    }

    /****************web部分验证***************/

    //邮箱验证
    isMail (d){
    	return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(d);
    }
    //电话验证
    isPhone(d){
    	return /^1\d{10}$/.test(d);
    }
    //验证身份证号
    isPort(d){
    	return /^\d{15}|\d{18}$/.test(d);
    }



    /*****************web通用验证******************/
    lengthCheck(big,small){
    	return big >= small;
    }

    npwdCheck(npwd,opwd){
    	return npwd === opwd;
    }


}

export default baseCheck;