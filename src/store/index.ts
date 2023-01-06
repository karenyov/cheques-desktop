import Vue from "vue";
import Vuex from "vuex";
import { getAuthStorage } from "../middleware/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: getAuthStorage()? true : false,
    login: '',
    remember_login: false
  },
  getters: {},
  mutations: {
    isAuth(state, params) {
      localStorage.setItem('auth', JSON.stringify(params));
      state.isAuth = true;
      state.login = params.login;
      state.remember_login = params.remember_login;
    }
  },
  actions: {},
  modules: {},
});
