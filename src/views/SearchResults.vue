<template>
  <div class="container">
    <small v-if="query">{{this.resultCount}} {{resultCount > 1? 'results': 'result'}} found for {{query}} in 0.02 seconds </small>
    <div class="results" v-if="this.results.length > 0">
      <SearchResult v-for="(result) in results" :key="result.title" :result=result />
    </div>
    <div class="no-results" v-else>
      <p>No results found</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'SearchResults',
  components: {
    SearchResult,
  },
  computed: {
    ...mapState(['query', 'results', 'resultCount']),
  },

};
</script>

<style scoped>

.container{
  padding: 5px;
}

.results{
  width: 70%;
  margin: auto;
}

</style>
