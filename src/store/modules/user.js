import {SAVE_USER} from "../mutations.type";

export default {
  state: {
    username: '',
    article_count: 0,
    description: '',
    type: 'personal',
  },
  mutations: {
    [SAVE_USER](state, payload) {
      state.username = payload.username;
      state.article_count = payload.article_count;
      state.description = payload.description;
      state.type = payload.type
    }
  },
  actions: {
    setUser(context, payload) {
      return new Promise((resolve, reject) => {
        if(payload) {
          context.commit(SAVE_USER, payload)
        }
      })
      
    }
  },
  getters: {
    userName(state) {
      return state.username
    },
    articleCount(state) {
      return state.article_count
    },
    type(state) {
      return state.type
    },
    description(state) {
      return state.description
    },
    accountType(state) {
      return state.type
    }
  }
}