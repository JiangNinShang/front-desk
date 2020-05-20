import Vue from 'vue'
import App from './App.vue'
import store from './vuex/trade and order/store.js'
import router from './router/index.js'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import {
	pcaa
} from 'area-data-vue';
import 'area-linkage-vue/dist/index.css';
import AreaLinkageVue from 'area-linkage-vue';
Vue.prototype.axios = axios
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http.defaults.baseURL = 'http://localhost:8090/'
Vue.prototype.$pcaa = pcaa;

Vue.use(AreaLinkageVue)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
