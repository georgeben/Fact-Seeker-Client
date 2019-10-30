<template>
    <div>
        <form @submit="search">
            <input placeholder="Search for anything..." v-model="query"/>
            <button @click="search">Search</button>
        </form>
        <p class="stat">{{count}} links have been indexed.</p>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '../../api/search'

export default {
  name: 'SearchBox',
  data() {
    return {
      query: '',
      count: 0.
    };
  },
  methods: {
    ...mapMutations(['setQuery', 'setResults']),
    async search(e) {
      e.preventDefault();

      if (!this.query) {
        return;
      }

      this.setQuery(this.query)
      let results = await api.search(this.query)
      console.log(results);
      this.setResults(results);

      this.$router.push('/search')
    },
  },
  async created(){
      let result = await api.getIndexedLinksCount();
      this.count = result.data;
  }
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

.stat{
    text-align: center;
    margin-top: 50px;
}
</style>
