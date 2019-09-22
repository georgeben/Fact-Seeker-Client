import axios from 'axios';

export default {
  vote: async (id, type) => {
    const result = await axios.post('http://localhost:3000/vote', {
      id,
      type,
    });

    return result.data;
  },
};
