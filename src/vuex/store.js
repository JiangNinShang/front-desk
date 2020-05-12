import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
       app_view:"GoodsHomePage",
       shangpingid:"",
       shangpinList: JSON.parse(window.sessionStorage.getItem("session_list"))||[],
    },
    getters:{
       getApp_view(state){
          return state.app_view;
       },
        getShangpinid(state){
         return state.shangpingid;
        },
        getShangpinList(state){
         return state.shangpinList;
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
          window.sessionStorage.setItem("session_list",JSON.stringify(state.shangpinList));            
        }
    },
    actions:{
       change({commit},val){
         commit("setApp_view",val);
       },
       cunid({commit},val){
         commit("setshangpinid",val);
       },
       shuzu({commit},val){
        commit("setshangpinList",val);   

       }
    }
});