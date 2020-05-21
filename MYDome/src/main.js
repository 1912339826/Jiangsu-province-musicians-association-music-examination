// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import api from '../src/api/api2'
import req from '../src/api/req'

// normalize.css（css样式初始化）
import 'normalize.css/normalize.css'

Vue.use(Vant);
// import {Lazyload}  from 'vant';

// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true,
//   loading:'../static/images/加载中.png',
//   error:'../static/images/图片损坏.png'
// });

Vue.config.productionTip = false

Vue.prototype.$req = req
window.api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
