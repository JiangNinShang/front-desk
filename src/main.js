// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import LiuApp from './LiuApp'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import store from './vuex/store'

Vue.prototype.$http=axios;

axios.defaults.baseURL="http://localhost:7000";

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { LiuApp },
  template: '<LiuApp/>',
  store
})
