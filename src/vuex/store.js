import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       app_view:"GoodsHomePage",
       shangpingid:"",
       shangpinList:[],
    },
    getters:{
       getApp_view(state){
          return state.app_view;
       },
        getShangpinid(state){
         return state.shangpingid;
        }
    },
    mutations:{
      setApp_view(state,val){
       state.app_view=val
      },
      setshangpinid(state,val){
         state.shangpingid=val
        },
        setshangpinList(state,val){
          state.shangpinList.push(val);
        }
    },
    actions:{
       change({commit},val){
         commit("setApp_view",val);
       },
       cunid({commit},val){
         commit("setshangpinid",val);
       }
    }
});