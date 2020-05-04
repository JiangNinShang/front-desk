// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {  // 初始化数据，只要有可能的用到的最好都初始化
    // user: JSON.parse(sessionStorage.getItem("session_user"))||null
    user:null
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getName(state) {
      if (state.user != null) {
        return state.user.uname;
      }
      return null;
    }
  },
  mutations: {
    update(state, obj) { 
      state.user = obj;
      // sessionStorage.setItem("session_user",JSON.stringify(obj));
    }
  },
  actions: {
    login({commit}, user) {
      commit('update', user)
    },
    logout({commit}) {
      commit('update', null)
    }
  }
})

export default store;