// 路由配置
import Vue from 'vue'

// 路由
import VueRouter from 'vue-router' // 在Vue使用VueRouter
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login.vue'
import shopping from '@/components/shopping.vue'
import ShoppingT from '@/components/shopping trolley.vue'
import order from '@/components/order.vue'
import wdnmd from '@/components/wdnmd.vue'
import giao from '@/components/giao.vue'
import Head from '@/components/head.vue'
import Footer from '@/components/footer.vue'
Vue.use(VueRouter)

// 定义路由规则
var routes = [{
    name: 'home',
    path: '/',
    component: ShoppingT
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'shopping',
    path: '/shopping',
    component: shopping
  },
  {
    name: 'ShoppingT',
    path: '/ShoppingT',
    component: ShoppingT
  },
  {
    name: 'order',
    path: '/order',
    component: order
  },
  {
    name: 'Head',
    path: '/Head',
    component: Head
  },
  {
    name: 'Footer',
    path: '/Footer',
    component: Footer
  }
]
// 创建router对象
var router = new VueRouter({
  routes
})

// 导出路由对象
export default router
