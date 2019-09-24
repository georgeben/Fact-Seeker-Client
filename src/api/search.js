import axios from 'axios';

const parseResponse = (response) => response.data

export default {
    search: async function (query, page) {
      let results = await fetch(`http://localhost:3000/search?search=${query}&page=${page}`);
      results = await results.json();
      return results;
    },
    getIndexedLinksCount: async function(){
      let result = await axios.get('http://localhost:3000/count');
      return parseResponse(result)
    }
}