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
import api from '../api/search'

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

      this.setQuery(this.query)
      let results = await api.search(this.query)
      console.log(results);
      this.setResults(results.data);
      this.setResultCount(results.count)

      this.$router.push('/search')
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
