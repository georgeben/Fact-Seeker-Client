<template>
  <div class="container">
    <small>{{this.resultCount}} {{resultCount > 1? 'results': 'result'}} found in 0.02 seconds </small>
    <div class="results" v-if="this.results.length > 0">
      <SearchResult v-for="(result) in results" :key="result.title" :result=result />
    </div>
    <div class="no-results" v-else>
      <p>No results found</p>
    </div>
  </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue'
import { mapState } from 'vuex';
export default {
  name: 'SearchResults',
  components: {
    SearchResult
  },
  computed: {
    ...mapState(['query', 'results', 'resultCount'])
  }
  
}
</script>

<style scoped>
small{
  text-align: left;
  padding-top: 10px;
}

.results{
  width: 70%;
  margin: auto;
}

</style>
