import Vue from 'vue'
import axios from 'axios'
//import store from './vueX/user/store.js'
import store from './store/index.js'
import router from './router/index.js'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入jquery
import $ from 'jquery'

import App from './App.vue'
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http.defaults.baseURL = 'http://localhost:7000/'
Vue.config.productionTip = false
Vue.prototype.$qs = qs

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
