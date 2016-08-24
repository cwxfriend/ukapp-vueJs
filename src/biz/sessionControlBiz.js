/**
 * Created by chenwenxiao on 2016/8/23.
 */
let T = 1800000;//30分钟session有效期
class sessionControlBiz {
    getTimer(){
        return sessionStorage.timers;
    }
    setTimer(){
        if(sessionStorage.timers!= undefined) {
            sessionStorage.timers = new Date().getTime();
        }
    }
    initCon(){
        sessionStorage.username = localStorage.username;
        sessionStorage.timers = new Date().getTime();
    }
    secCheck(){
        if(sessionStorage.timers != undefined){
            var nows = new Date().getTime();
            if((nows - this.getTimer()) > T){
                sessionStorage.clear();
                return false;
            }else{
                return true;
            }
        }else {
            sessionStorage.clear();
            return false;
        }
    }
}
export default sessionControlBiz;