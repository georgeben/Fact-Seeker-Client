import store from '../store';

export default {
    handleError: (error) => {
        store.commit('setErrorMsg', error.response.data);
      }
}