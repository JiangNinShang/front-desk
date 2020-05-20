import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  tableData: [{
      date: '2016-05-03',
      name: '王小虎1',
      price: 10,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-02',
      name: '王小虎2',
      price: 101,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎3',
      price: 110,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎4',
      price: 120,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-08',
      name: '王小虎5',
      price: 1120,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-06',
      name: '王小虎6',
      price: 103,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-07',
      name: '王小虎7',
      price: 107,
      num: 1,
      path: 'http://www.wm2en9.cn/img/yun.png',
      address: '上海市普陀区金沙江路 1518 弄'
    }
  ], //存储购物车数据
  site: [

  ] //地址
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
