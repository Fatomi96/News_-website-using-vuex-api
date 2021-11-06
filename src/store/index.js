import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allNews:[],
    allSources:[],
    loading: false
  },
  getters: {
    getAllNews: (state) => state.allNews,
    getAllSources: (state) => state.allSources,
    getLoading: (state) => state.loading
  },
  actions: {
    fetchAllNews: ({commit}, payload) => {
      const {
        category = '',
        source = '',
      } = payload;
      const apiKey = process.env.VUE_APP_API_KEY;
      try {
        commit ('setLoading', true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=${source ? '' : 'ng'}&category=${category}&apiKey=${apiKey}&sources=${source}`)
        .then((res) => {
          // console.log(res.data.articles)
          // commit('updateAllNews', res.data)
          commit('setAllNews', res.data.articles)
          commit('setLoading', false)
        })
      } catch (error) {
        console.log(error);
      }
    },
    fetchAllSources: ({commit}, payload) => {
      const {
        category = '',
        source = '',
      } = payload;
      const apiKey = process.env.VUE_APP_API_KEY;
      try {
        commit ('setLoading', true)
        axios.get(`https://newsapi.org/v2/sources?apiKey=${apiKey}&category=${category}&source=${source}`)
        .then((res) => {
          // console.log(res.data)
          // commit('updateAllNews', res.data)
          commit('setAllSources', res.data.sources)
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    setAllNews: (state, payload) => { state.allNews = payload; },
    setAllSources: (state, payload) => { state.allSources = payload; },
    setLoading: (state, payload) => { state.loading = payload; }
  },
  modules: {
  }
})
