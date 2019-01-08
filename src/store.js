import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenStatus: "",
    authenTrigger: false
  },
  getters: {
    authenStatus: state => {
      return state.authenStatus;
    },
    authenTrigger: state => {
      return state.authenTrigger;
    }
  },
  mutations: {
    changeAuthenStatus(state, status) {
      state.authenStatus = status;
    },
    authenClick(state) {
      state.authenTrigger = !state.authenTrigger;
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
    }
  }
});
