import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    resultCount: 0,
    results: [],
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },

    setResults(state, results) {
      state.results = results;
    },

    setResultCount (state, count){
      state.resultCount = count;
    }
  },
  actions: {

  },
});
