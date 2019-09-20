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
    ...mapMutations(['setQuery', 'setResults']),
    async search(e) {
      e.preventDefault();

      // console.log(mapMutations(['setQuery', 'setResults']))
      if (!this.query) {
        alert('Enter a keyword to search for');
        return;
      }

      let results = await fetch(`http://localhost:3000/search?search=${this.query}`);
      results = await results.json();
      console.log(results);
      this.setResults(results.data);
    },
  },
};
</script>
