export default {
    search: async function (query){
      let results = await fetch(`http://localhost:3000/search?search=${query}`);
      results = await results.json();
      return results;
    }
}