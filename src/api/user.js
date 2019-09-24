import axios from 'axios';
import errorHandler from '../utils/errorHandler';
const url = 'http://localhost:3000';

const parseResponse = response => response.data;

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
      errorHandler.handleError(error);
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
      errorHandler.handleError(error);
    }
  },
};
