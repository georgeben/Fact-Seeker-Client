import axios from 'axios';
import constants from '../constants';

export default {
  setHttpHeaders(token) {
    const commons = axios.defaults.headers.common;
    const payload = `Bearer ${token}`;
    if (token) {
      commons[constants.authorization] = payload;
    }
  },
  removeHttpAuthHeader() {
    delete axios.defaults.headers.common[constants.authorization];
  }
};
