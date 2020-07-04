import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);

import moment from "moment";
Vue.prototype.$moment = moment;
moment.locale('zh-cn')

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
