import axios from 'axios';
import errorHandler from '../utils/errorHandler';
import constants from '../constants';
const url = 'http://localhost:3000';

const parseResponse = response => response.data;

export default {
  signUp: async ({ name, email, password }) => {
    try {
      const result = await axios.post(`${constants.API_URL}/users/`, {
        name,
        email,
        password,
      });
      return parseResponse(result);
    } catch (error) {
      // Set error message
      errorHandler.handleError(error);
    }
  },

  signIn: async ({ email, password }) => {
    try {
      const result = await axios.post(`${constants.API_URL}/users/login`, {
        email,
        password,
      });
      return parseResponse(result);
    } catch (error) {
      errorHandler.handleError(error);
    }
  },

  verifyUserEmail: async (token) => {
    try {
      const result = await axios.post(`${constants.API_URL}/users/verify-email`, {
        token
      })
      return parseResponse(result)
    } catch (error) {
      errorHandler.handleError(error)
    }
  },

  resendConfirmationEmail: async () => {
    try {
      const result = await axios.post(`${constants.API_URL}/users/resend-verification-email`);
      return parseResponse(result);
    } catch (error) {
      errorHandler.handleError(error);
    }
  }
};
