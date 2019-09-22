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
      console.log(`Seting query ${query}`);
      state.query = query;
      console.log(`Query in store ${state.query}`);
    },

    setResults(state, results) {
      state.results = results;
    },

    setResult(state, payload) {
      state.results.forEach((res) => {
        if (res.document._id == payload.id) {
          res.document = payload.document;
        }
      });
    },

    setResultCount(state, count) {
      state.resultCount = count;
    },
  },
  actions: {

  },
});
