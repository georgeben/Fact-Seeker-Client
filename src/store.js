import Vue from 'vue';
import Vuex from 'vuex';
import constants from './constants';
import storageUtil from './utils/localStorage';
import requests from './config/requests';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    resultCount: 0,
    results: [],
    user: null,
    token: '',
    errorMessage: '',
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

    setUser(state, user) {
      console.log('Setting user');
      state.user = user;
      storageUtil.updateState(constants.currentUser, user);
      state.token = user.token;
      storageUtil.updateState(constants.token, user.token);

      // Set axios header
      requests.setHttpHeaders(state.token);
    },

    setErrorMsg(state, message) {
      state.errorMessage = message.data;
    },
    reset(state) {
      state.errorMessage = '';
      state.user = null;
      state.token = null;
    }

  },
  actions: {

  },
});
