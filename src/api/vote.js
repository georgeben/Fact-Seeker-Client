import axios from 'axios';
import errorHandler from '../utils/errorHandler';

export default {
  vote: async (id, type) => {
    try {
      const result = await axios.post('http://localhost:3000/vote', {
        id,
        type,
      });

      return result.data;
    } catch (error) {
      errorHandler.handleError(error);
    }
  },
};
