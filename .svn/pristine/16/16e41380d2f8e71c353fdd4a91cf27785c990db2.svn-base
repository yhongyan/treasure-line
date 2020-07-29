import Vue from 'vue'
import Qs from 'qs'
import axios from 'axios'
const root = process.env.API;

let instance = axios.create({
    withCredentials: false,
    timeout: 300000,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

let xhr = {
    get(url, params) {
        if(root) {
            var trueURL = root + url
        }else {
            var trueURL = root + '/api/' + url
        }
        return new Promise((resolve, reject) => { 
            instance.get(trueURL, {params}).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, params) {
        if(root) {
            var trueURL = root + url
        }else {
            var trueURL = root + '/api/' + url
        }
        return new Promise((resolve, reject) => {
            instance.post(trueURL, Qs.stringify(params)).then(res => {
                resolve(res)
            }).catch(err => {
                if(res.data.sta == 401) {
                    this.$message.error("请重新登录！");
                    this.$router.push('/login')
                }
                reject(err)
            })
        })
    }
}

Vue.prototype.$axios = xhr;