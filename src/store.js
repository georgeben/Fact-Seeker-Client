import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    results: [],
  },
  mutations: {
    setQuery(state, query) {
      console.log('Setting query...');
      state.query = query;
    },

    setResults(state, results) {
      console.log('Setting results...');
      state.results = results;
      console.log('New', state.results);
    },
  },
  actions: {

  },
});
