<template>
    <div>
        <form @submit="search">
            <input placeholder="Search for anything..." v-model="query"/>
            <button @click="search">Search</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SearchBox',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    ...mapMutations(['setQuery', 'setResults', 'setResultCount']),
    async search(e) {
      e.preventDefault();

      // console.log(mapMutations(['setQuery', 'setResults']))
      if (!this.query) {
        return;
      }

      this.$router.push('/search')

      let results = await fetch(`http://localhost:3000/search?search=${this.query}`);
      results = await results.json();
      console.log(results);
      this.setResults(results.data);
      this.setResultCount(results.count)
    },
  },
};
</script>

<style scoped>
form{
    width: 60%;
    margin: auto;
}

form input{
    width: 80%;
    padding: 10px;
}

form button{
    background-color: #1a66b1;
    color: white;
    padding: 12px;
    border: none;
    cursor: pointer;
}
</style>
