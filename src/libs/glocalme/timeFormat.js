/**
 * Created by chenwenxiao on 2016/8/23.
 */

class timeFormat {
    getBrowserGMT() {
        var dates = new Date();
        return -dates.getTimezoneOffset() / 60;
    };

    //转换时间long格式到yyyy-mm-dd hh-MM-ss
    getFormatTime(d) {
        var date = new Date(d), Y, M, D, h, m, s;
        if (!d) {
            return;
        }
        if (parseInt(d) < 86400) {
            return d;
        }
        d = d;
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        M = M < 10 ? "0" + M : M;
        D = (date.getDate() + ' ') < 10 ? "0" + (date.getDate() + ' ') : (date.getDate() + ' ');
        h = date.getHours();
        h = (h < 10 ? "0" + h : h) + ':';
        m = date.getMinutes();
        m = (m < 10 ? "0" + m : m) + ':';
        s = date.getSeconds();
        s = (s < 10 ? "0" + s : s);
        return Y + M + D + h + m + s;
    };

    //转换时间yyyy-mm-dd hh-MM-ss格式到long
    formatTimeTolong(datetime) {
        if (!datetime) {
            return;
        }
        var tmp_datetime = datetime.replace(/:/g, '-');
        tmp_datetime = tmp_datetime.replace(/ /g, '-');
        var arr = tmp_datetime.split("-");
        arr[2] = arr[2] || 0;
        arr[3] = arr[3] || 0;
        arr[4] = arr[4] || 0;
        arr[5] = arr[5] || 0;
        var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - _dateHelper.getBrowserGMT(), arr[4], arr[5]));
        return parseInt(now.getTime());
    };
}
export default timeFormat;