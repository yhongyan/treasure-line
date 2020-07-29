import Vue from 'vue'
import Qs from 'qs'
import router from '../../src/router/index'
import axios from 'axios'
import {Message} from 'element-ui';
const root = process.env.API;
const rootCode = process.env.CODE;

let instance = axios.create({
    withCredentials: false,
    timeout: 300000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

//小程序码实例
let instanceCode = axios.create({
    withCredentials: false,
    timeout: 300000,
    responseType: 'arraybuffer',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

// http request 拦截器
instance.interceptors.request.use(
    config => {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if(user){// 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = user.authorization
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

//响应拦截器即异常处理
instance.interceptors.response.use(response => {
    //对响应数据做些事
    if(response.headers.authorization){//如果token过期就进行更换
        let user = JSON.parse(sessionStorage.getItem('user'))
        user.authorization = response.headers.authorization
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    return response;
}, err => {
    console.log(err, "errerrerr")
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '错误请求'
                break;
            case 401:
                err.message = '未授权，请重新登录!';
                router.push('/login');
                break;
            case 403:
                err.message = '拒绝访问'
                break;
            case 404:
                err.message = '请求错误,未找到该资源'
                break;
            case 405:
                err.message = '请求方法未允许'
                break;
            case 408:
                err.message = '请求超时'
                break;
            case 500:
                err.message = '服务器端出错'
                break;
            case 501:
                err.message = '网络未实现'
                break;
            case 502:
                err.message = '网络错误'
                break;
            case 503:
                err.message = '服务不可用'
                break;
            case 504:
                err.message = '网络超时'
                break;
            case 505:
                err.message = 'http版本不支持该请求'
                break;
            default:
                err.message = `连接错误${err.response.status}`
        }
    } else {
        if (!err.message) {
            err.message = "连接到服务器失败"
        }
    }
    Message({message: err.message, type: 'error', showClose: true});
    return Promise.resolve('')
})

let xhr = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(root + url, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(root + url, Qs.stringify(params)).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getCode(url, params) {
        return new Promise((resolve, reject) => {
            instanceCode.get(rootCode + url, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
}

Vue.prototype.$axios = xhr;

