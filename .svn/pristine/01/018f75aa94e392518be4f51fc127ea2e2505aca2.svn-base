import Vue from 'vue'


Vue.filter('timeTrans',function(val) {
    function add0(m){return m<10?'0'+m:m };
    if(val) {
        var time = new Date(val*1000);
        var y = time.getFullYear();
        var m = time.getMonth()+1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y+'-'+add0(m)+'-'+add0(d);
        // +' '+add0(h)+':'+add0(mm)
    }
})

Vue.filter('zhangfu',function(val) {
    if(val && val != '--') {
        return val.toFixed(4) + '%'
    }else {
        return '--'
    }
})

Vue.filter('zhangfu1',function(val) {
    if(val && val != '--') {
        var str = val.split('%').join('')*1;
        return str.toFixed(4) + '%'
    }else {
        return '--'
    }
})

Vue.filter('price',function(val) {
    if(val) {
        return (val*1).toFixed(4)
    }else {
        return '--'
    }
})

Vue.filter('sixLength',function(val) {
    if(val) {
        return val.substring(0,5)
    }else {
        return '--'
    }
})
