import axios from 'axios';
import store from '../store';

const url = 'http://localhost:3000';
const parseResponse = response => response.data;

const handleError = (error) => {
  store.commit('setErrorMsg', error.response.data);
}

export default {
  signUp: async ({ name, email, password }) => {
    try {
      const result = await axios.post('http://localhost:3000/users/', {
        name,
        email,
        password,
      });
      console.log(result);
      return parseResponse(result);
    } catch (error) {
      // Set error message
      handleError(error);
    }
  },

  signIn: async ({ email, password }) => {
    try {
      const result = await axios.post(`${url}/users/login`, {
        email,
        password,
      });
      return parseResponse(result);
    } catch (error) {
      handleError(error);
    }
  },
};
