import axios from 'axios';

const parseResponse = (response) => response.data

export default {
  signUp: async ({ name, email, password }) => {
    const result = await axios.post('http://localhost:3000/users/', {
        name,
        email,
        password
    });
    console.log(result)
    return parseResponse(result)
  },
};
