import axios from 'axios';
import errorHandler from '../utils/errorHandler';
import constants from '../constants';

export default {
  vote: async (id, type) => {
    try {
      const result = await axios.post(`${constants.API_URL}/vote`, {
        id,
        type,
      });

      return result.data;
    } catch (error) {
      errorHandler.handleError(error);
    }
  },
};
