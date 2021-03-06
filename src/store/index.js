import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import menu from '../modules/App/Store/menu'
import user from '../core/Authentication/Store/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload
      localStorage.setItem('currentLanguage', payload)
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit('changeLang', payload)
    }
  },
  modules: {
    menu,
    user
  }
})
