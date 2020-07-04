import {
  SAVE_ARTICLES,
  ADD_ARTICLES,
  UPDATE_ARTICLE
} from "../mutations.type";

export default {
  state: {
    articles: []
  },
  mutations: {
    [SAVE_ARTICLES](state, payload) {
      state.articles = payload
    },
    [ADD_ARTICLES](state, payload) {
      state.articles.push(payload)
    },
    [UPDATE_ARTICLE](state, payload, newArticle) {
      payload = newArticle
    }
  },
  actions: {
    addArticles(context, payload) {
      return new Promise((resolve, reject) => {
        let oldArticle = context.state.articles.find(item => item.title === payload.title);
        
        if(oldArticle) {
          context.commit(UPDATE_ARTICLE, oldArticle, payload)
        } else {
          context.commit(ADD_ARTICLES, payload)
        }
      })
    },
    getArticle(context, payload) {
      return new Promise((resolve, reject) => {
        if(Array.isArray(payload)) {
          let arts = [];
          payload.forEach(item => {
            let post = context.state.articles.find(art => art.id === item)
            arts.push(post)
          });
          resolve(arts)
        } else if(typeof payload === 'number') {
          let post = context.state.articles.find(art => art.id === payload)
          resolve(post)
        } else {
          reject('TypeError!')
        }
      })
    }
  }
}