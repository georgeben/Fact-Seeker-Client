<template>
  <div class="container">
    <small v-if="query">{{this.resultCount}} {{resultCount > 1? 'results': 'result'}} found for {{query}} in 0.02 seconds </small>
    <div class="results" v-if="this.results.length > 0">
      <SearchResult v-for="(result) in results" :key="result.title" :result=result />
      <div class="pb-0 pt-3">
          <ul v-if="pager.pages && pager.pages.length" class="pagination">
              <li :class="{'disabled':pager.currentPage === 1}" class="page-item first-item">
                  <router-link :to="{ query: { page: 1 }}" class="page-link">First</router-link>
              </li>
              <li :class="{'disabled':pager.currentPage === 1}" class="page-item previous-item">
                  <router-link :to="{ query: { page: pager.currentPage - 1 }}" class="page-link">Previous</router-link>
              </li>
              <li v-for="page in pager.pages" :key="page" :class="{'active':pager.currentPage === page}" class="page-item number-item">
                  <router-link :to="{ query: { page: page }}" class="page-link">{{page}}</router-link>
              </li>
              <li :class="{'disabled':pager.currentPage === pager.totalPages}" class="page-item next-item">
                  <router-link :to="{ query: { page: pager.currentPage + 1 }}" class="page-link">Next</router-link>
              </li>
              <li :class="{'disabled':pager.currentPage === pager.totalPages}" class="page-item last-item">
                  <router-link :to="{ query: { page: pager.totalPages }}" class="page-link">Last</router-link>
              </li>
          </ul>
      </div>
    </div>
    <div class="no-results" v-else>
      <p>No results found</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SearchResult from '@/components/SearchResult.vue';
import api from '../api/search';

export default {
  name: 'SearchResults',
  components: {
    SearchResult,
  },
  computed: {
    ...mapState(['query', 'results', 'resultCount', 'pager']),
  },
  methods: {
     ...mapMutations(['setQuery', 'setResults']),
  },
  watch: {
      '$route.query.page': {
          async handler(page) {
              page = parseInt(page) || 1;
              if (page !== this.pager.currentPage) {
                  let results = await api.search(this.query, page)
                  this.setResults(results);
              }
          }
      }
  }

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
