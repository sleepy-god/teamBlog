import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import articles from "./modules/articles";
import user from "./modules/user";

Vue.use(Vuex)
const state = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

store.registerModule('articles', articles)
store.registerModule('user', user)


export default store
