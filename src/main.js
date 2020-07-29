// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../util/axios'
import '../util/filters'

import ElementUi from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

require("@/assets/style/bootstrap.min.css");
require("@/assets/style/init.css");

require("./assets/js/jquery-min")

Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//     if(sessionStorage.getItem('user') || to.path == '/login' || to.path == '/register' || to.path == '/forgetPassword' || to.path == '/userRules') {
//         next()
//     }else {
//         // this.$message({
//         //     message: '请先登录！',
//         //     type: 'info'
//         // });
//         router.push('/login')
//     }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
