import axios from 'axios';
import constants from '../constants';
const parseResponse = (response) => response.data

export default {
    search: async function (query, page) {
      let results = await fetch(`${constants.API_URL}/search?search=${query}&page=${page}`);
      results = await results.json();
      return results;
    },
    getIndexedLinksCount: async function(){
      let result = await axios.get(`${constants.API_URL}/count`);
      return parseResponse(result)
    }
}