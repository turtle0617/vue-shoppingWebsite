import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenStatus: "",
    isAuthenBeTrigger: false,
    userName: ""
  },
  getters: {
    authenStatus: state => {
      return state.authenStatus;
    },
    isAuthenBeTrigger: state => {
      return state.isAuthenBeTrigger;
    },
    userName: state => {
      return state.userName;
    }
  },
  mutations: {
    changeAuthenStatus(state, status) {
      state.authenStatus = status;
    },
    authenClick(state) {
      state.isAuthenBeTrigger = !state.isAuthenBeTrigger;
    },
    login(state,status) {
      state.userName = status;
    },
    logout(state){
      state.userName = "";
    }
  },
  actions: {
    changeAuthenStatus(context, status) {
      context.commit("changeAuthenStatus", status);
    },
    authenClick(context, status) {
      if (status) {
        context.commit("changeAuthenStatus", status);
      }
      context.commit("authenClick");
    },
    login(context, status) {
      context.commit("login", status);
      context.commit("authenClick");
    },
    logout(context){
      context.commit("logout");
    }
  }
});
